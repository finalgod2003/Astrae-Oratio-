// Site-wide constants. Update `LAST_UPDATED` and `RELEASE` whenever official news changes.

export const SITE_NAME = 'Astrae Oratio Wiki';
export const SITE_URL = 'https://astraeoratio.org';
export const SITE_TAGLINE = 'Unofficial fan wiki & guide';
export const LAST_UPDATED = '2026-10-07';
/** Public contact address. Set up forwarding for it at the registrar before launch. */
export const CONTACT_EMAIL = 'contact@astraeoratio.org';

/**
 * Analytics & verification. Empty values switch the tag off.
 * - ga4Id: GA4 measurement ID ("G-XXXXXXXXXX").
 * - gscVerification: the `content` value of Search Console's HTML-tag verification.
 * - Plausible runs on our self-hosted Plausible CE instance (plausibleHost). When plausibleScriptId
 *   (the site's "pa-…" script from the dashboard snippet) is set, the CE snippet is used; otherwise
 *   the generic data-domain script with outbound-link tracking.
 */
export const ANALYTICS = {
  ga4Id: 'G-5C9VXLMJWJ',
  gscVerification: '',
  plausibleHost: 'https://stats.blackholeenglish.com',
  plausibleDomain: 'astraeoratio.org',
  plausibleScriptId: 'pa-JYA-wLD9OhFNpTex6ExYu',
};

export const NAV = [
  { href: '/release-date-download/', label: 'Release Date' },
  { href: '/characters/', label: 'Characters' },
  { href: '/world/', label: 'World' },
  { href: '/guides/', label: 'Guides' },
  { href: '/tier-list/', label: 'Tier List' },
  { href: '/codes/', label: 'Codes' },
  { href: '/news/', label: 'News' },
];

/** Current launch status. Everything on the home and release pages reads from here. */
export const RELEASE = {
  status: 'In development',
  window: '2027',
  mobile: 'iOS & Android — 2027',
  pc: 'PC — after the mobile launch (date TBA)',
  preRegistration: 'Not open yet',
  announcedOn: '2026-09-16',
  lastTest: 'Global CBT, Oct 2–6, 2026',
  developer: 'Dynamis One',
  publisher: 'NC (NCSOFT)',
  textLanguages: ['English', 'Japanese', 'Korean', 'Traditional Chinese'],
  voice: 'Japanese',
};

export const OFFICIAL = {
  site: 'https://astraeoratio.plaync.com/en-us/index',
  siteJa: 'https://astraeoratio.plaync.com/ja-jp/index',
  news: 'https://astraeoratio.plaync.com/en-us/news',
  characters: 'https://astraeoratio.plaync.com/en-us/character',
  world: 'https://astraeoratio.plaync.com/en-us/world',
  fanPolicy: 'https://astraeoratio.plaync.com/en-us/media?tab=fan-content-guidelines',
  support: 'https://help.plaync.com/faq/pwa6ebd4cf85b0',
  socials: [
    { label: 'X (English)', handle: '@Asora_EN', url: 'https://x.com/Asora_EN' },
    { label: 'X (Japanese)', handle: '@Asora_JP', url: 'https://x.com/Asora_JP' },
    { label: 'X (Korean)', handle: '@Asora_KR', url: 'https://x.com/Asora_KR' },
    { label: 'YouTube (English)', handle: '@Asora_EN', url: 'https://www.youtube.com/@Asora_EN' },
    { label: 'YouTube (Japanese)', handle: '@Asora_JP', url: 'https://www.youtube.com/@Asora_JP' },
    { label: 'YouTube (Korean)', handle: '@Asora_KR', url: 'https://www.youtube.com/@Asora_KR' },
    { label: 'Facebook (Taiwan)', handle: 'Asora.TW', url: 'https://www.facebook.com/Asora.TW/' },
  ],
};

/** Official videos (verified on the official YouTube channels). */
export const VIDEOS = {
  prologueDigest: { id: 'EohSWwWOcJ0', title: 'Prologue Digest PV', date: '2026-09-17' },
  prologueAnimation: { id: 'LDzQg4FDWVo', title: 'Prologue Animation PV', date: '2026-09-30' },
  characterIntro: { id: 'OD64xufKMyU', title: 'Character Introduction PV “City, Stars, and Magic”', date: '2026-06-23' },
  moaPickup: { id: 'SFQ_tubc-3A', title: 'Pickup PV “Hanamori Moa”', date: '2026-10' },
};

/** Reusable source links (cite these at the bottom of pages). */
export const SRC = {
  officialWorld: { label: 'Official site — World', url: 'https://astraeoratio.plaync.com/en-us/world' },
  officialCharacters: { label: 'Official site — Characters', url: 'https://astraeoratio.plaync.com/en-us/character' },
  officialNews: { label: 'Official site — News', url: 'https://astraeoratio.plaync.com/en-us/news' },
  cbtRecruit: {
    label: 'Official notice — [CBT] Tester Recruitment Announcement',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6a851c30eea53f5d6dbcf35e',
  },
  cbtFaq: {
    label: 'Official notice — [CBT] Frequently Asked Questions',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6a851c3aa279104f7d9d5790',
  },
  cbtSchedule: {
    label: 'Official notice — CBT Tester Selection Results and Key Schedule',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6ab085a9ab04307987fe2b76',
  },
  cbtServer: {
    label: 'Official notice — [CBT] Server Opening Notice',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6abe704981a1f241964f25e4',
  },
  cbtGuidebook: {
    label: 'Official notice — [CBT] Astrae Oratio Guidebook',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6abf1e30eea53f5d6dbcfa4a',
  },
  cbtRewards: {
    label: 'Official event — [CBT] Limited-Time Reward Event',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6abf1e306b722c561dc6a932',
  },
  cbtScenario: {
    label: 'Official event — [CBT] Scenario Pack Completion Event',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6abf1e30eea53f5d6dbcfa39',
  },
  cbtIssues: {
    label: 'Official notice — [CBT] Known Issues Notice',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6abf171138eb0528f9001ff7',
  },
  tgsNotice: {
    label: 'Official news — TGS 2026 Announcement',
    url: 'https://astraeoratio.plaync.com/en-us/news?tab=view&articleId=6a86c63ffa7da41c727d6086',
  },
  gematsuRelease: {
    label: 'Gematsu — Astrae Oratio launches in 2027 for iOS and Android, followed by PC',
    url: 'https://www.gematsu.com/2026/09/astrae-oratio-launches-in-2027-for-ios-and-android-followed-by-pc',
  },
  automatonPc: {
    label: 'AUTOMATON — PC release following mobile launch in 2027',
    url: 'https://automaton-media.com/en/news/astrae-oratio-to-get-a-pc-release-following-mobile-launch-in-2027-japanese-voice-acting-also-confirmed/',
  },
  invenBreakdown: {
    label: 'Inven Global — Comprehensive Breakdown of Key Information on Astrae Oratio (Sep 18, 2026)',
    url: 'https://www.invenglobal.com/articles/26209/comprehensive-breakdown-of-key-information-on-astrae-oratio',
  },
  invenGameplay: {
    label: 'Inven Global — A Blend of 90s Nostalgia and Modern Gameplay',
    url: 'https://www.invenglobal.com/articles/23160/astrae-oratio-a-blend-of-90s-nostalgia-and-modern-gameplay',
  },
  invenCbtStart: {
    label: 'Inven Global — Astrae Oratio Begins Global CBT',
    url: 'https://www.invenglobal.com/articles/26758/ncs-new-shindenki-magic-rpg-astrae-oratio-begins-global-cbt',
  },
  invenCbtAnnounce: {
    label: 'Inven Global — NC to Hold Global CBT for Astrae Oratio on October 2',
    url: 'https://www.invenglobal.com/articles/26440/nc-to-hold-global-cbt-for-astrae-oratio-on-october-2',
  },
  invenTgsPage: {
    label: 'Inven Global — NC Opens Astrae Oratio TGS 2026 Special Page',
    url: 'https://www.invenglobal.com/articles/25653/nc-opens-astrae-oratio-tgs-2026-special-page',
  },
  invenPrologueAnim: {
    label: 'Inven Global — Astrae Oratio Unveils Prologue Animation PV',
    url: 'https://www.invenglobal.com/articles/26692/astrae-oratio-unveils-prologue-animation-pv-an-incident-shaking-tokyos-night',
  },
  invenTeaserSite: {
    label: 'Inven Global — Official website for Dynamis One’s new title launches',
    url: 'https://www.invenglobal.com/articles/21477/teaser-d-7-official-website-for-dynamis-ones-new-title-astrae-oratio-launches',
  },
  dailianTgs: {
    label: 'Dailian — TGS 2026 developer interview (Korean)',
    url: 'https://www.dailian.co.kr/news/view/1691650',
  },
  prCharacterPv: {
    label: 'PR TIMES via Anime!Anime! — Character PV press release (Japanese)',
    url: 'https://animeanime.jp/release/prtimes/20260623/294373.html',
  },
  finalWeapon: {
    label: 'Final Weapon — Astrae Oratio launches in 2027 for Android and iOS',
    url: 'https://finalweapon.net/2026/09/16/astrae-oratio-launches-in-2027-for-android-and-ios/',
  },
  steparuRoster: {
    label: 'Steparu (YouTube) — All 18 CBT characters showcase, with in-game role labels',
    url: 'https://www.youtube.com/watch?v=9IGWBAa5nDQ',
  },
  noteCbt: {
    label: 'note.com — CBT day-3 impressions (Japanese, player write-up)',
    url: 'https://note.com/houtaruu/n/n0b7712b2e481',
  },
};

export type Source = { label: string; url: string };
