// Clans & organizations. Names follow the official English site; JA/ZH names from the official site's other languages.
// `members` are character slugs (files in src/content/characters). `npcs` are minor named NPCs without their own page.

export type Faction = {
  slug: string;
  name: string;
  fullName?: string;
  nameJa: string;
  nameZh?: string;
  ward: string;
  kind: string;
  color: string;
  summary: string;
  description: string[];
  members: string[];
  npcs?: { name: string; nameJa?: string; note: string }[];
  storyArc?: string;
};

export const FACTIONS: Faction[] = [
  {
    slug: 'special-district-office',
    name: 'Special District Office',
    fullName: 'Other Decree Special District Office',
    nameJa: '特区庁（裏令指定特例区域管理庁）',
    nameZh: '特區廳（裏令指定特例區域管理廳）',
    ward: 'Minato (beneath Tokyo Tower)',
    kind: 'Government agency',
    color: '#d4a537',
    summary:
      'The agency the Shunin is transferred to — on paper the magicians’ answer to the Tokyo Metropolitan Government, in practice a one-person office.',
    description: [
      'The Special District Office manages the special district that the Other Cabinet has designated, which in effect gives it administrative authority over every magic-related matter in Tokyo. Its building stands in Minato, right under the newly built Tokyo Tower.',
      'Its official headcount is exactly one: the Shunin, the player character. The office is run — loosely — by Commissioner Hiwagishiakari Ai, while Doll acts as the Shunin’s bodyguard. Hoshi-chan, a star-shaped mascot designed to the Commissioner’s personal taste, handles promotion.',
    ],
    members: ['shunin', 'hiwagishiakari-ai', 'doll'],
    npcs: [{ name: 'Hoshi-chan', nameJa: 'ホシちゃん', note: 'The office’s promotional mascot; its design reflects the Commissioner’s tastes.' }],
  },
  {
    slug: 'dominion-management-council',
    name: 'Dominion Management Council — Special District Office Branch',
    nameJa: '領地管理会特区庁支部',
    nameZh: '領地管理會特區廳分部',
    ward: 'Minato (Special District Office)',
    kind: 'Support staff',
    color: '#7f8fb8',
    summary:
      'The noisy support crew posted at the Special District Office. They are not officially office staff, but the place would not run without them.',
    description: [
      'These council members handle the day-to-day work around the Shunin: paperwork, maintenance, supplies, analysis and the office merch shop. They are identified by job title rather than by name.',
      'A separate Audit Bureau of the same council sends inspectors who barge in for “special audits” whenever they can invent a reason.',
    ],
    members: [],
    npcs: [
      { name: 'Director', nameJa: '局長', note: 'Cute but terrifying boss who runs her staff with an iron fist and always knows who made which mistake.' },
      { name: 'Administrator', nameJa: '管理官', note: 'Stoic, by-the-book de facto leader who organizes everything inside the office.' },
      { name: 'Clerk', nameJa: '事務係', note: 'Head of paperwork, permanently buried in documents and short on sleep.' },
      { name: 'Maintenance', nameJa: '整備係', note: 'Capable troubleshooter stuck between the strict Clerk and the chaos of General Affairs.' },
      { name: 'General Affairs', nameJa: '雑務係', note: 'Handles odd jobs with a straight face — and somehow causes trouble everywhere. Popular with the interns.' },
      { name: 'Supply Manager', nameJa: '補給係', note: 'Runs the office merch shop and slacks off whenever possible.' },
      { name: 'Technical Manager', nameJa: '技術係', note: 'Always running at full speed, which tends to make problems worse.' },
      { name: 'Analyst', nameJa: '分析係', note: 'Highly capable and hard-working, but self-conscious about their large build and shy around the Shunin.' },
      { name: 'Interns A, B & C', nameJa: 'インターンA・B・C', note: 'One careless, one who worries about everything, one far too optimistic.' },
      { name: 'Inspectors A & B (Audit Bureau)', nameJa: '監査官A・B（領地管理会監査局）', note: 'Show up to audit the branch on flimsy pretexts.' },
    ],
  },
  {
    slug: 'minato-girls',
    name: 'Magical Activities of the Minato Girls',
    nameJa: '港区少女たちのまほ活',
    nameZh: '港區少女們的魔法活動',
    ward: 'Minato',
    kind: 'Magician clan',
    color: '#ee6f9b',
    summary: 'Three Minato Middle School girls who live a secret double life as magicians.',
    description: [
      'The clan formed when Tanaka Erin met Fujiwara Riria and Anna M. Battenberg at middle school and discovered she could use a long-lost form of mythic magic. Since then the three have been pulled into one magician incident after another around Tokyo.',
      'They are the focus of the Minato Arc. In the October 2026 CBT, Minato Arc Chapter 1 was titled “The Sparkling Days of the Minato Magicians”.',
    ],
    members: ['tanaka-erin', 'anna-m-battenberg', 'fujiwara-riria'],
    storyArc: 'Minato Arc',
  },
  {
    slug: 'seiran-fellowship',
    name: 'Seiran Fellowship',
    nameJa: '清蘭同友会',
    nameZh: '清蘭同好會',
    ward: 'Chuo',
    kind: 'Magician clan',
    color: '#3fb0a5',
    summary: 'Two heiresses from Japan’s richest families — and the quiet “friend” their families pay to protect them.',
    description: [
      'Mitsukoe Runa comes from a real-estate dynasty that got rich overnight in the property boom, and Keikou Mayoi from one of Japan’s top ten corporate families. Shiranui Ren follows them around as helper and friend, but is really a bodyguard and hitman sent by both families.',
      'Media coverage of the Tokyo Game Show 2026 build places the clan in Chuo ward.',
    ],
    members: ['mitsukoe-runa', 'keikou-mayoi', 'shiranui-ren'],
  },
  {
    slug: 'akina-institute',
    name: 'Akina Urban Legend Research Institute',
    nameJa: 'アキナ怪談研究所',
    nameZh: '明菜怪談研究所',
    ward: 'Shinjuku',
    kind: 'Magician clan',
    color: '#9a6cf0',
    summary: 'Urban-legend hunters operating under the cover of Okuma High’s film club, “Slash and Flesh”.',
    description: [
      'Led by its self-styled director Akitsu Akina, the institute chases rumors that drift through the city and tries to catch the urban legends behind them, using homemade magical tools of questionable usefulness.',
      'They headline the Shinjuku Arc. In the CBT, Shinjuku Arc Chapter 1 was titled “The Night of Urban Legend Hunters and the Vanished Magician”.',
    ],
    members: ['akitsu-akina', 'kagamihara-haru', 'asakura-mai'],
    storyArc: 'Shinjuku Arc',
  },
  {
    slug: 'rose-of-bunkyo',
    name: 'Rose of Bunkyo',
    nameJa: '文京の薔薇',
    nameZh: '文京的玫瑰',
    ward: 'Bunkyo',
    kind: 'Vigilante group',
    color: '#d9485d',
    summary: 'A vigilante group that keeps the peace on Bunkyo’s hidden side by night.',
    description: [
      'The Rose of Bunkyo is led by University of Tokyo student Takarabe Chikage. Its members have demanding day lives — a university student and an exhausted assistant nurse — and patrol Bunkyo’s magical underside after dark.',
    ],
    members: ['takarabe-chikage', 'hanamori-moa', 'haibara-nono'],
  },
  {
    slug: 'cafe-ichigo',
    name: 'Cafe Ichigo',
    nameJa: '珈琲店イチゴ',
    nameZh: '草莓咖啡館',
    ward: 'TBA',
    kind: 'Café',
    color: '#f2875c',
    summary: 'An animal-themed maid café where ordinary customers and magicians share the same tables.',
    description: [
      'Run by a retired magician who mostly reads the newspaper, Cafe Ichigo relies on its staff to keep the doors open. Its relaxed atmosphere has turned it into a meeting place for regular people and magicians alike.',
    ],
    members: ['natsume-souka', 'sakuba-yuki', 'lea-wurtz'],
  },
  {
    slug: 'yuluko-trio',
    name: 'YuLuKo Trio',
    nameJa: 'ユルコ・トリオ',
    nameZh: '結露煌三人組',
    ward: 'TBA',
    kind: 'Witch trio',
    color: '#5fb2ea',
    summary: 'Three witches from very different backgrounds — the most recently revealed group on the official site.',
    description: [
      'The trio is made up of Yanagihara Luise, Enryu Koyomi and Aizumi Yuzuki; the name appears to combine the first syllables of their given names. Unlike most clans, its members describe their craft as witchcraft.',
    ],
    members: ['yanagihara-luise', 'enryu-koyomi', 'aizumi-yuzuki'],
  },
  {
    slug: 'other-cabinet',
    name: 'Other Cabinet',
    nameJa: '裏内閣',
    nameZh: '裏內閣',
    ward: '—',
    kind: 'Shadow government',
    color: '#8b90a3',
    summary: 'The hidden authority that actually governs Tokyo’s magical world — and the body that designated the special district.',
    description: [
      'The Other Cabinet sits above the Special District Office. Its known representative, the Signalman, wears a constructed persona because, according to the official profile, its true nature is too vast for the world to bear.',
    ],
    members: [],
    npcs: [
      { name: 'Signalman', nameJa: '旗振り', note: 'A bureaucrat of the Other Cabinet whose visible form is only a stand-in for its real self.' },
      { name: 'Death Mask', nameJa: 'デスマスク', note: 'The Signalman’s incarnation and the living embodiment of the concept of the City. Listed on the official site as an enemy.' },
    ],
  },
  {
    slug: 'ashen-dawn',
    name: 'Ashen Dawn',
    nameJa: '灰の夜明け団',
    nameZh: '灰燼黎明會',
    ward: '—',
    kind: 'Secret society',
    color: '#a39588',
    summary: 'A secret society that lost a magic war against Rome, scattered across the world, and now plots its comeback.',
    description: [
      'The Ashen Dawn has branches abroad; its Tokyo branch is led by Vita Neri, whose only known background is an origin in Florence.',
    ],
    members: ['vita-neri'],
  },
  {
    slug: 'mimawarigumi',
    name: 'Mimawarigumi',
    nameJa: '見廻組',
    nameZh: '見迴組',
    ward: 'Kyoto',
    kind: 'Kyoto faction',
    color: '#5b7bc6',
    summary: 'A faction from Kyoto — Tokyo’s old rival — whose known member has come to kill the Shunin.',
    description: [
      'Its only revealed member is Kujo Yuria, a magician from Kyoto. The name borrows from the real Mimawarigumi, a shogunate patrol unit active in Kyoto in the 1860s.',
      'Kyoto is also the city that lost the next World Expo to Tokyo in the game’s backstory.',
    ],
    members: ['kujo-yuria'],
  },
  {
    slug: 'unrevealed',
    name: 'Clan not yet revealed',
    nameJa: '—',
    ward: 'TBA',
    kind: 'CBT-revealed characters',
    color: '#7d88a6',
    summary: 'Characters who were playable in the October 2026 CBT but have no official profile yet.',
    description: [
      'These names come from CBT gameplay footage. Their clans, Japanese names and voice actors have not been announced on the official site, so spellings may still change.',
    ],
    members: ['sigrid-ulvhern', 'nagatani-kanon', 'nowatari-shion'],
  },
];

export const factionBySlug = (slug: string) => FACTIONS.find((f) => f.slug === slug);
