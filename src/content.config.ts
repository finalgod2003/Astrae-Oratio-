import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const source = z.object({ label: z.string(), url: z.string() });

const characters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/characters' }),
  schema: z.object({
    name: z.string(),
    nameJa: z.string().optional(),
    nameZh: z.string().optional(),
    nameKo: z.string().optional(),
    faction: z.string(),
    cv: z.string().optional(),
    cvJa: z.string().optional(),
    /** Role label seen in the October 2026 CBT build. */
    role: z.enum(['Attacker', 'Breaker', 'Sweeper', 'Defender', 'Supporter', 'Anchor']).optional(),
    cbtPlayable: z.boolean().default(false),
    /** official = has an official profile; cbt = only known from CBT footage. */
    status: z.enum(['official', 'cbt']).default('official'),
    /** Key used by the official character page (?character=<key>). */
    officialKey: z.string().optional(),
    summary: z.string(),
    occupation: z.string().optional(),
    magic: z.string().optional(),
    pv: z.string().optional(),
    order: z.number().default(100),
    updated: z.coerce.date(),
    sources: z.array(source).default([]),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    video: z.string().optional(),
    sources: z.array(source).default([]),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    description: z.string(),
    order: z.number().default(100),
    updated: z.coerce.date(),
    basis: z.string(),
    sources: z.array(source).default([]),
  }),
});

export const collections = { characters, news, guides };
