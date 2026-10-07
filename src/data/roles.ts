// Combat role labels seen in the October 2026 CBT build (via gameplay footage).
// Official definitions have not been published; `reads` is our reading of the label, flagged as such on the site.

export type Role = 'Attacker' | 'Breaker' | 'Sweeper' | 'Defender' | 'Supporter' | 'Anchor';

export const ROLES: Record<Role, { color: string; reads: string }> = {
  Attacker: {
    color: '#e5604d',
    reads: 'Damage dealer. The most common label in the CBT roster.',
  },
  Breaker: {
    color: '#eb9a3c',
    reads: 'Likely built to drain enemy Break gauges, which opens the window for big damage.',
  },
  Sweeper: {
    color: '#3fb7c9',
    reads: 'Likely focused on hitting multiple enemies or clearing waves.',
  },
  Defender: {
    color: '#5b87e0',
    reads: 'Likely a protective role that soaks or mitigates damage for the team.',
  },
  Supporter: {
    color: '#4fbf7f',
    reads: 'Likely buffs, heals or otherwise enables the active character.',
  },
  Anchor: {
    color: '#a477e6',
    reads: 'Unclear from the label alone; only one CBT character carried it.',
  },
};

export const ROLE_ORDER: Role[] = ['Attacker', 'Breaker', 'Sweeper', 'Defender', 'Supporter', 'Anchor'];
