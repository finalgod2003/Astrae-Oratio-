# Astrae Oratio Wiki — astraeoratio.org

非官方 Astrae Oratio（アストラエ・オラティオ）英文攻略站。Astro 7 静态站，构建产物是纯 HTML，可部署到任意静态托管（Vercel / Cloudflare Pages / Netlify / GitHub Pages）。

## 常用命令

```bash
npm install          # 安装依赖（Node ≥ 22.12）
npm run dev          # 本地开发 http://localhost:4321
npm run build        # 构建到 dist/
npm run check:links  # 构建后检查所有内链和 #锚点
npm run assets       # 重新生成 favicon / OG 分享图（public/）
```

## 页面与关键词对应

| 页面 | 路径 | 对准词 | 内容来源 |
| --- | --- | --- | --- |
| 首页 | `/` | astrae oratio wiki / guide | H1 只放品牌词；正文分区覆盖 release date / download / pc / 角色 |
| 上线与下载 | `/release-date-download/` | release date / download / apk / pc / pre-registration | 官方公告、CBT FAQ、Gematsu 等 |
| 角色图鉴 | `/characters/`、`/characters/<slug>/` | 角色名 + 定位 / 声优 | 官方角色档案 + CBT 实机定位 |
| 阵营 | `/factions/` | 阵营名 | 官方站 |
| 世界观 | `/world/` | 专有名词 | 官方 World 页 |
| 术语表 | `/glossary/` | 专有名词 / 道具名 | 官方站 + CBT 公告 |
| 系统解析 | `/guides/combat/`、`/guides/gacha/`、`/guides/progression/` | 战斗 / 抽卡 / 养成 | CBT Guidebook、TGS 报道、玩家实测（均标注来源） |
| 强度榜 | `/tier-list/` | astrae oratio tier list | 待实机数据（当前 noindex） |
| 兑换码 / 重抽 | `/codes/` | astrae oratio codes / reroll | 待上线（当前 noindex） |
| 新闻 / 更新日志 | `/news/`、`/news/<slug>/`、`/rss.xml` | 游戏名 + news / update | 官方公告、官方 X |

## 内容在哪里改

- **角色**：`src/content/characters/*.md`（一人一个文件，frontmatter 是结构化字段，正文是介绍）。新增角色复制一个文件改即可，`faction` 填 `src/data/factions.ts` 里的 slug。
- **阵营**：`src/data/factions.ts`
- **术语表**：`src/data/glossary.ts`
- **系统解析**：`src/content/guides/*.md`（标题后可写 `{#锚点}` 固定锚点）
- **新闻**：`src/content/news/*.md`，按 `date` 自动排序，自动进 RSS 和首页“Latest news”。
- **上线状态 / 官方链接 / 视频**：`src/data/site.ts`（`RELEASE`、`OFFICIAL`、`VIDEOS`、`LAST_UPDATED`）。

### 兑换码和强度榜上线

`src/data/codes.json` 与 `src/data/tier-list.json` 里的 `status` 现在是 `"upcoming"`：页面带 `noindex`，且不进 sitemap。
填好数据后把 `status` 改成 `"live"`，页面会自动去掉 noindex、加入 sitemap，首页卡片文案也会跟着变。

## 统计与站长工具

都在 `src/data/site.ts` 的 `ANALYTICS`：

- `ga4Id`：GA4 衡量 ID（`G-XXXXXXXXXX`），留空则不加载 gtag。
- `gscVerification`：Search Console「HTML 标记」验证的 content 值，留空则不输出。
- Plausible：使用自建实例 `https://stats.blackholeenglish.com`（`plausibleHost`）。
  - 在自建后台添加站点 `astraeoratio.org`，把它给出的代码片段里 `pa-xxxx.js` 的文件名（不含 `.js`）填到 `plausibleScriptId`，页面就会输出和 blackholeenglish.com 相同的 CE 片段。
  - `plausibleScriptId` 留空时，退回使用实例上的 `script.outbound-links.js` + `data-domain`（含外链点击统计）。
  - 站点没在后台添加之前，事件会被丢弃；Plausible 脚本也会忽略 localhost。

## 部署（Cloudflare Pages）

1. Cloudflare → Add a domain → `astraeoratio.org`（Free 计划），按提示把 Namecheap 的 Nameservers 改成 Cloudflare 给的两条（Namecheap → Domain List → Manage → Nameservers → Custom DNS）。
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → 选择仓库 `finalgod2003/Astrae-Oratio-`：
   - Production branch：`main`
   - Framework preset：Astro；Build command：`npm run build`；Build output directory：`dist`
   - 环境变量 `NODE_VERSION` = `22`（Astro 7 需要 Node ≥ 22.12；仓库里也有 `.nvmrc`）
3. Pages 项目（`astrae-oratio`，预览地址 `astrae-oratio.pages.dev`）→ Custom domains：添加 `astraeoratio.org`（要等域名在 Cloudflare 里变成 Active 才能添加）。
4. www 跳转根域名：DNS 里 `www` 是指向根域名的 CNAME（已开代理），再在 Rules → Redirect Rules 里把 `www.astraeoratio.org/*` 301 到 `https://astraeoratio.org/${1}`。
5. 之后每次 push 到 `main` 自动构建上线。

`public/_headers` 为 `/_astro/*` 带哈希的静态资源设置了一年强缓存。

## 版权与官方素材

- 本站为非官方粉丝站，页脚与 About 页均有声明。
- 不托管官方立绘：角色卡的“星座徽记”是按角色 slug 生成的原创 SVG（`src/components/Sigil.astro`）。
- 官方 PV 通过 YouTube 点击加载嵌入（youtube-nocookie）。
- 所有文字为原创改写，未照搬官方文案；每页底部列出来源。
- 参考官方二创指南：<https://astraeoratio.plaync.com/en-us/media?tab=fan-content-guidelines>
