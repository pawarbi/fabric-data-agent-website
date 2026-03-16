import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/articles' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    author: z.string(),
    publishDate: z.coerce.date(),
    submittedDate: z.coerce.date().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    contributor: z.string().default('Community Member'),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/resources' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    author: z.string().optional(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    contributor: z.string().default('Community Member'),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/videos' }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    speaker: z.string(),
    publishDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    contributor: z.string().default('Community Member'),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/events' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    type: z.enum(['conference', 'session', 'meetup', 'webinar', 'workshop']),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    contributor: z.string().default('Community Member'),
  }),
});

const linkedin = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/linkedin' }),
  schema: z.object({
    title: z.string(),
    linkedinUrl: z.string().url(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    contributor: z.string().default('Community Member'),
    submittedDate: z.coerce.date(),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/tools' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    author: z.string().optional(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    contributor: z.string().default('Community Member'),
  }),
});

const learn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/learn" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    estimatedTime: z.string().optional(),
    tags: z.array(z.string()).default([]),
    contributor: z.string().default('Community Member'),
    items: z.array(z.object({
      title: z.string(),
      type: z.enum(['article', 'video', 'resource', 'tool', 'external']),
      url: z.string(),
      description: z.string(),
    })),
  }),
});

export const collections = {
  articles,
  resources,
  videos,
  events,
  tools,
  linkedin,
  learn,
};
