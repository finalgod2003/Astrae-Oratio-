// Glossary of Astrae Oratio terms. Japanese names follow the official Japanese site where available.
// `basis`: 'official' = official site/notices, 'cbt' = seen in the Oct 2026 CBT (subject to change), 'media' = press coverage.

export type Term = {
  term: string;
  ja?: string;
  aka?: string;
  basis: 'official' | 'cbt' | 'media';
  def: string;
  link?: string;
};

export type TermGroup = { id: string; title: string; intro: string; terms: Term[] };

export const GLOSSARY: TermGroup[] = [
  {
    id: 'world',
    title: 'World & lore',
    intro: 'Core concepts from the official World page.',
    terms: [
      {
        term: 'Astrae Oratio',
        ja: 'アストラエ・オラティオ',
        aka: 'Asora (アスオラ / 아스오라)',
        basis: 'official',
        def: 'The game’s title. It evokes the Latin words for “stars” and “speech” or “prayer”, which matches the lore idea that wishes spoken to the stars became magic. Fans and the official accounts shorten it to “Asora”.',
      },
      {
        term: 'Tokyo ’89',
        ja: '’89年 東京',
        basis: 'official',
        def: 'The setting. Officially the year is 1889 (Reisei 9), but technology, culture and civilization run roughly a century ahead of real history, so the city looks and feels like late-1980s Tokyo. Tokyo Tower is about to be completed, and Odaiba is being reclaimed in a hurry because Tokyo beat Kyoto to host the World Expo after Paris.',
        link: '/world/#tokyo-89',
      },
      {
        term: 'Reisei',
        ja: '令成',
        basis: 'official',
        def: 'The in-world Japanese era name. The story is set in Reisei 9, the year the Fifth Era of magic comes to an end.',
        link: '/world/#eras',
      },
      {
        term: 'Shindenki',
        ja: '新伝奇',
        basis: 'official',
        def: 'A Japanese genre label (literally “new legend”) for urban fantasy that mixes myth, folklore and the occult with modern everyday life. The official genre tag is “Shindenki Magic RPG”.',
      },
      {
        term: 'Magician',
        ja: '魔法使い',
        basis: 'official',
        def: 'Someone who makes the wishes people placed in the stars come true by their own hand. Modern magic reflects the way of life of the land the magician lives in. Most magicians keep their identity hidden from ordinary people.',
        link: '/world/#magicians',
      },
      {
        term: 'Magic',
        ja: '魔法',
        basis: 'official',
        def: 'In the lore, magic is human dreams — wishes, prayers and longings people have whispered to the stars throughout history. Those dreams “became stars”.',
        link: '/world/#magic',
      },
      {
        term: 'Hecate',
        ja: 'ヘカテー',
        basis: 'official',
        def: 'The goddess revered as the first magician. Her torch stands for the key between reality and unreality; her dagger stands for the magician’s will. Both symbols survive in modern magic as the Kleis and the Artifact.',
        link: '/world/#hecate',
      },
      {
        term: 'Kleis',
        ja: 'クレイス（κλείς）',
        aka: 'Ignition key',
        basis: 'official',
        def: 'Ancient Greek for “key”. Every magician carries one and uses it like a car key to cross into the hidden side of reality, where magic works. Owning a Kleis is treated as proof of being a magician.',
        link: '/world/#kleis',
      },
      {
        term: 'Artifact',
        ja: 'アーティファクト',
        basis: 'official',
        def: 'A magic weapon that gives form to a magician’s will — Hecate’s dagger. Artifacts range from historic relics to modern inventions and let a magician use magic far stronger than usual.',
        link: '/world/#artifact',
      },
      {
        term: 'Dominion',
        ja: '領地',
        basis: 'official',
        def: 'A magician’s territory. Since the Fifth Era, magicians have used administrative districts as their framework, so Tokyo’s wards double as magician dominions and fights between magicians are treated as administrative disputes.',
        link: '/world/#dominion',
      },
      {
        term: 'Trial of Domination',
        ja: '決闘裁判',
        basis: 'official',
        def: 'A trial by duel used to settle disputes between magicians. It has been the core of magician justice since the Fourth Era.',
        link: '/world/#trial',
      },
      {
        term: 'Eras',
        ja: '時代',
        basis: 'official',
        def: 'Magic history is divided into numbered Eras. The fall of the magician-king of Babylon ended the Second Era; the Fifth Era ends in Reisei 9, the year the story begins.',
        link: '/world/#eras',
      },
      {
        term: 'Tower',
        ja: 'タワー',
        basis: 'official',
        def: 'A recurring motif in magic history, from Babel to the Eiffel Tower. As the Fifth Era ends, a new tower — Tokyo Tower — is nearing completion.',
        link: '/world/#tower',
      },
    ],
  },
  {
    id: 'organizations',
    title: 'People & organizations',
    intro: 'Who runs magical Tokyo. Full member lists are on the factions page.',
    terms: [
      {
        term: 'Shunin',
        ja: '主任',
        basis: 'official',
        def: 'The protagonist’s job title and the name the game uses for the player. An ordinary low-ranking Tokyo civil servant with no magic, transferred to the Special District Office.',
        link: '/characters/shunin/',
      },
      {
        term: 'Special District Office',
        ja: '特区庁',
        aka: 'Other Decree Special District Office (裏令指定特例区域管理庁)',
        basis: 'official',
        def: 'The agency that administers all magic-related matters in Tokyo, located in Minato beneath Tokyo Tower. Its only official employee is the Shunin.',
        link: '/factions/#special-district-office',
      },
      {
        term: 'Commissioner',
        basis: 'official',
        def: 'Title of Hiwagishiakari Ai, head of the Special District Office and the Shunin’s boss.',
        link: '/characters/hiwagishiakari-ai/',
      },
      {
        term: 'Other Cabinet',
        ja: '裏内閣',
        basis: 'official',
        def: 'The hidden government that holds real power over Tokyo’s magical world. It designated the special district the Special District Office manages.',
        link: '/factions/#other-cabinet',
      },
      {
        term: 'Dominion Management Council',
        ja: '領地管理会',
        basis: 'official',
        def: 'An organization whose branch staff support the Special District Office. Its Audit Bureau sends inspectors to audit the branch.',
        link: '/factions/#dominion-management-council',
      },
      {
        term: 'Clan',
        basis: 'official',
        def: 'The grouping the official site uses for magician groups such as the Seiran Fellowship or the Rose of Bunkyo. Most clans are tied to a Tokyo ward.',
        link: '/factions/',
      },
    ],
  },
  {
    id: 'systems',
    title: 'Game systems',
    intro: 'Terms from the CBT build and official CBT guidebook. Names and rules can change before launch.',
    terms: [
      {
        term: 'Dominion Skill',
        ja: '領地宣言',
        aka: 'Declaration of Dominion',
        basis: 'cbt',
        def: 'A combat ability that becomes available once its activation conditions are met. Tapping it fires it instantly, resets all of the caster’s cooldowns and applies extra buffs. TGS coverage also reported that it recovers AP.',
        link: '/guides/combat/#dominion-skill',
      },
      {
        term: 'AP',
        basis: 'media',
        def: 'Action points shown at the bottom of the battle screen. Spending AP lets you chain several actions in one turn.',
        link: '/guides/combat/#ap',
      },
      {
        term: 'Break',
        basis: 'media',
        def: 'Enemies have a Break gauge. Attacks that hit their weaknesses drain it quickly; breaking an enemy opens a window for heavy damage.',
        link: '/guides/combat/#break',
      },
      {
        term: 'Parry',
        basis: 'media',
        def: 'Powerful enemy attacks can be countered by pressing a button with precise timing, read from the enemy’s animation rather than a timing bar.',
        link: '/guides/combat/#parry',
      },
      {
        term: 'Tag',
        basis: 'media',
        def: 'Swapping which party member is active on the field. Depending on the character or role, swapping can trigger tag effects.',
        link: '/guides/combat/#tag',
      },
      {
        term: 'Role',
        basis: 'cbt',
        def: 'Each CBT character carried a role label: Attacker, Breaker, Sweeper, Defender, Supporter or Anchor.',
        link: '/guides/combat/#roles',
      },
      {
        term: 'Oratio Gacha',
        basis: 'cbt',
        def: 'The character gacha in the CBT. It uses Gacha Coins.',
        link: '/guides/gacha/',
      },
      {
        term: 'Vignette',
        basis: 'cbt',
        def: 'An equipment card that gives effects to the whole party. Vignettes have rarities (an SSR Vignette appears in the official guidebook).',
        link: '/guides/gacha/#vignette-gacha',
      },
      {
        term: 'Vignette Gacha',
        basis: 'cbt',
        def: 'The gacha for Vignettes. It uses Starlight Films.',
        link: '/guides/gacha/#vignette-gacha',
      },
      {
        term: 'Free Time',
        basis: 'cbt',
        def: 'A mode where you visit Tokyo’s 23 wards and nearby suburbs to meet magicians and raise their bond level. Each visit costs Free Time Points and moves the clock from day to night or night to day.',
        link: '/guides/progression/#free-time',
      },
      {
        term: 'Score Trial',
        basis: 'cbt',
        def: 'Boss content fought under different conditions. Seasonal Score Trials are the main source of Starlight Films.',
        link: '/guides/progression/#score-trial',
      },
      {
        term: 'Simulation Room',
        basis: 'cbt',
        def: 'A dungeon for farming growth materials, entered with Simulation Room Tickets.',
        link: '/guides/progression/#simulation-room',
      },
      {
        term: 'Training',
        basis: 'cbt',
        def: 'Tutorial content. Basic Training covers combat fundamentals; Advanced Training explains how to use specific characters.',
        link: '/guides/progression/#training',
      },
      {
        term: 'Great Shrine',
        ja: '大神殿',
        aka: 'Grand Temple',
        basis: 'cbt',
        def: 'Where you restore Doll. Leveling up the Great Shrine gradually repairs Doll until she joins you. (CBT notices used both “Great Shrine” and “Grand Temple”.)',
        link: '/characters/doll/',
      },
      {
        term: 'Scenario Pack',
        basis: 'cbt',
        def: 'A bundle of story episodes, such as Minato Arc Chapter 1. Clearing one paid out Meteorites and Starlight Films in the CBT.',
        link: '/guides/progression/#story',
      },
      {
        term: 'Artifact Liberation',
        basis: 'media',
        def: 'Named by the developers at TGS 2026 as a way to turn a battle around. Details have not been published yet.',
        link: '/guides/combat/#artifact-liberation',
      },
    ],
  },
  {
    id: 'items',
    title: 'Items & currencies (CBT)',
    intro: 'Item names from the official CBT event notices. Exact uses at launch are not confirmed.',
    terms: [
      { term: 'Gacha Coin', basis: 'cbt', def: 'Used for the Oratio Gacha (character gacha).', link: '/guides/gacha/' },
      {
        term: 'Starlight Film',
        basis: 'cbt',
        def: 'Used for the Vignette Gacha. Mainly earned from seasonal Score Trials; CBT story chapters also gave 60 each.',
        link: '/guides/gacha/#vignette-gacha',
      },
      {
        term: 'Meteorite',
        basis: 'cbt',
        def: 'A currency the CBT handed out for clearing Scenario Packs (1,000 per chapter). Its exact use has not been officially explained.',
        link: '/guides/gacha/#currencies',
      },
      { term: 'Oracle Device Daisy Wheel', basis: 'cbt', def: 'Used to repair Doll at the Great Shrine.', link: '/characters/doll/' },
      { term: 'SP Restorative', basis: 'cbt', def: 'Restores SP, which appears to work as the stamina for battles.', link: '/guides/progression/#materials' },
      { term: 'Simulation Room Ticket', basis: 'cbt', def: 'Entry ticket for the Simulation Room.', link: '/guides/progression/#simulation-room' },
      { term: 'Magician EXP', basis: 'cbt', def: 'Experience for leveling up magicians.', link: '/guides/progression/#materials' },
      { term: 'Hecate’s Ember', basis: 'cbt', def: 'A growth material handed out in the CBT; its exact use is not confirmed.', link: '/guides/progression/#materials' },
      { term: 'Magic Silver Coin', basis: 'cbt', def: 'Appears to be the general-purpose soft currency.', link: '/guides/progression/#materials' },
      { term: 'Free Time Points', basis: 'cbt', def: 'Spent each time you visit a magician during Free Time.', link: '/guides/progression/#free-time' },
    ],
  },
];
