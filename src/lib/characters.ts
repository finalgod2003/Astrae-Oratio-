import { getCollection, type CollectionEntry } from 'astro:content';
import { FACTIONS } from '../data/factions';

export type Character = CollectionEntry<'characters'>;

const factionIndex = new Map(FACTIONS.map((f, i) => [f.slug, i]));

/** All characters, ordered by faction (as listed in FACTIONS) and then by `order`. */
export async function getCharacters(): Promise<Character[]> {
  const all = await getCollection('characters');
  return all.sort(
    (a, b) =>
      (factionIndex.get(a.data.faction) ?? 99) - (factionIndex.get(b.data.faction) ?? 99) ||
      a.data.order - b.data.order ||
      a.data.name.localeCompare(b.data.name),
  );
}

export const cbtRoster = (all: Character[]) => all.filter((c) => c.data.cbtPlayable);

export const officialProfileUrl = (key?: string) =>
  key ? `https://astraeoratio.plaync.com/en-us/character?tab=view&character=${key}` : undefined;
