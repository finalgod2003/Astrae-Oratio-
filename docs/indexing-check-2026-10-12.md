# astraeoratio.org 索引检查与修复

核验日期：2026-10-12（Asia/Taipei）。

## 初次检查：Search Console 实际报告

网页索引报告的上次更新日期为 2026-10-09，当时共有 22 个网址已收录、29 个未收录。

| 原因 | 数量 | 核验与处理 |
| --- | ---: | --- |
| 被 noindex 排除 | 2 | `/codes/`、`/tier-list/`。初次检查时对应数据为 `upcoming`，按当时配置主动排除；用户后续要求开放收录，见下文。 |
| 网页会自动重定向 | 1 | `https://www.astraeoratio.org/` 正常 301 到主域名，不应取消跳转。 |
| 已发现，尚未编入索引 | 24 | Google 报告中的状态；不等同于技术性禁止收录，本次未声称这些页面已被收录。 |
| 已抓取，尚未编入索引 | 2 | Google 报告中的状态；本次未声称这些页面已被收录。 |

另通过 URL 检查确认：`https://astraeoratio.org/` 显示“网址已收录到 Google”。

## 已在线修复的故障

发现 `http://www.astraeoratio.org/` 及其子路径返回 HTTP 522。Cloudflare 的原规则仅匹配 `https://www.*`，遗漏 HTTP 请求。

已更新并部署原有 Redirect Rule：

- 名称：`WWW to canonical HTTPS (HTTP and HTTPS)`
- Request URL：`http*://www.astraeoratio.org/*`
- Target URL：`https://astraeoratio.org/${2}`
- HTTP 状态：301
- Preserve query string：开启
- Cloudflare 控制台状态：Active

修复后的线上验证：

| 请求 | 首次响应 | 最终响应 |
| --- | --- | --- |
| `http://www.astraeoratio.org/` | 301 → `https://astraeoratio.org/` | 200 |
| `https://www.astraeoratio.org/` | 301 → `https://astraeoratio.org/` | 200 |
| HTTP、HTTPS 两种 www 下的 `/characters/`，附带测试查询参数 | 301 → 主域名同一路径，保留完整查询参数 | 200 |
| `http://astraeoratio.org/` | 301 → `https://astraeoratio.org/` | 200 |
| `https://astraeoratio.org/` | 200，无跳转 | 200 |

测试查询包含 UTM 和普通参数，仅用于验证重定向保留参数；不是推广链接，不代表真实流量来源。

## 初次检查：页面结果与边界

- 线上 sitemap 的全部 47 个页面均直接返回 200，canonical 指向自身，无 HTML `noindex` 或 `X-Robots-Tag: noindex`。
- `robots.txt` 允许抓取，指向有效的 `sitemap-index.xml`。
- 两个 `upcoming` 页面均返回 200，含 `noindex, follow`，没有进入 sitemap。
- 测试不存在的路径返回真实 404，错误页保留 `noindex`。
- 初次修复仅调整 Cloudflare 跳转规则，未修改兑换码、排名数据和页面收录开关；未对当时有意排除或正常 301 发起“验证修正情况”。
- 上述 47 是调整收录配置前通过检查的页面数，不是 Google 已收录数量。

## 同日后续调整：开放两张说明页收录

用户明确选择“让现有说明页现在就可以被 Google 收录”。据此将索引规则与真实内容的上线状态分开：

- `/codes/`、`/tier-list/` 不再输出 `noindex`，加入 sitemap。
- `status` 仍为 `upcoming`，继续显示暂无兑换码、CBT 角色列表和未来排名方法，不发布空的兑换码表或虚构排名。
- 404 页面继续输出 `noindex`，不加入 sitemap。
- 更新数据文件注释和维护文档，避免以后错误地将空数据设为 `live`。

本地验证：`npm run build` 成功；`npm run check:links` 检查全部 50 个 HTML 页面通过；构建产物的 sitemap 包含 49 个规范网址，两张说明页的 canonical 与正文正确、均无 `noindex`，404 保护仍有效。

此配置通过 `main` 的 Cloudflare Pages 自动部署发布。技术上允许收录并不保证 Google 立即收录；Google 的验证和索引更新需要重新抓取。

参考：[Google 关于重定向与规范网址的说明](https://developers.google.com/search/docs/crawling-indexing/301-redirects)、[Cloudflare 同时匹配 HTTP/HTTPS 并保留路径和查询的官方示例](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-all-different-hostname/)。
