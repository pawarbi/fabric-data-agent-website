import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://fabricdataagent.com';

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function formatTags(tags: string[]): string {
  return tags.length > 0 ? `Tags: ${tags.join(', ')}` : '';
}

export const GET: APIRoute = async () => {
  const [articles, videos, resources, events, tools, linkedinPosts, learn] = await Promise.all([
    getCollection('articles'),
    getCollection('videos'),
    getCollection('resources'),
    getCollection('events'),
    getCollection('tools'),
    getCollection('linkedin'),
    getCollection('learn'),
  ]);

  const lines: string[] = [
    '# Fabric Data Agent - Full Site Content',
    '',
    '> Complete content from fabricdataagent.com - a community-driven resource hub for Microsoft Fabric Data Agents.',
    '',
    'This file contains all content from the Fabric Data Agent community site in a format optimized for LLM consumption.',
    `For a concise summary, see [llms.txt](${SITE}/llms.txt).`,
    '',
    `Total content: ${articles.length} articles, ${videos.length} videos, ${resources.length} resources, ${events.length} events, ${tools.length} tools, ${linkedinPosts.length} LinkedIn posts, ${learn.length} learning paths.`,
    '',
  ];

  // Articles
  if (articles.length > 0) {
    lines.push('---', '', '## Articles', '');
    for (const a of articles) {
      lines.push(`### ${a.data.title}`);
      lines.push(`- URL: ${a.data.url}`);
      lines.push(`- Author: ${a.data.author}`);
      lines.push(`- Published: ${formatDate(a.data.publishDate)}`);
      lines.push(`- Summary: ${a.data.summary}`);
      const tags = formatTags(a.data.tags);
      if (tags) lines.push(`- ${tags}`);
      lines.push(`- Contributor: ${a.data.contributor}`);
      lines.push('');
    }
  }

  // Videos
  if (videos.length > 0) {
    lines.push('---', '', '## Videos', '');
    for (const v of videos) {
      lines.push(`### ${v.data.title}`);
      lines.push(`- YouTube: https://www.youtube.com/watch?v=${v.data.youtubeId}`);
      lines.push(`- Speaker: ${v.data.speaker}`);
      lines.push(`- Published: ${formatDate(v.data.publishDate)}`);
      lines.push(`- Description: ${v.data.description}`);
      const tags = formatTags(v.data.tags);
      if (tags) lines.push(`- ${tags}`);
      lines.push(`- Contributor: ${v.data.contributor}`);
      lines.push('');
    }
  }

  // Resources
  if (resources.length > 0) {
    lines.push('---', '', '## Resources', '');
    for (const r of resources) {
      lines.push(`### ${r.data.title}`);
      lines.push(`- URL: ${r.data.url}`);
      lines.push(`- Category: ${r.data.category}`);
      lines.push(`- Description: ${r.data.description}`);
      const tags = formatTags(r.data.tags);
      if (tags) lines.push(`- ${tags}`);
      lines.push(`- Contributor: ${r.data.contributor}`);
      lines.push('');
    }
  }

  // Events
  if (events.length > 0) {
    lines.push('---', '', '## Events', '');
    for (const e of events) {
      lines.push(`### ${e.data.title}`);
      lines.push(`- URL: ${e.data.url}`);
      lines.push(`- Date: ${formatDate(e.data.date)}${e.data.endDate ? ` to ${formatDate(e.data.endDate)}` : ''}`);
      lines.push(`- Location: ${e.data.location}`);
      lines.push(`- Type: ${e.data.type}`);
      lines.push(`- Description: ${e.data.description}`);
      const tags = formatTags(e.data.tags);
      if (tags) lines.push(`- ${tags}`);
      lines.push(`- Contributor: ${e.data.contributor}`);
      lines.push('');
    }
  }

  // Tools
  if (tools.length > 0) {
    lines.push('---', '', '## Tools', '');
    for (const t of tools) {
      lines.push(`### ${t.data.title}`);
      lines.push(`- URL: ${t.data.url}`);
      lines.push(`- Category: ${t.data.category}`);
      lines.push(`- Description: ${t.data.description}`);
      const tags = formatTags(t.data.tags);
      if (tags) lines.push(`- ${tags}`);
      lines.push(`- Contributor: ${t.data.contributor}`);
      lines.push('');
    }
  }

  // LinkedIn Posts
  if (linkedinPosts.length > 0) {
    lines.push('---', '', '## LinkedIn Posts', '');
    for (const p of linkedinPosts) {
      lines.push(`### ${p.data.title}`);
      lines.push(`- LinkedIn URL: ${p.data.linkedinUrl}`);
      lines.push(`- Author: ${p.data.author}`);
      lines.push(`- Submitted: ${formatDate(p.data.submittedDate)}`);
      lines.push(`- Description: ${p.data.description}`);
      const tags = formatTags(p.data.tags);
      if (tags) lines.push(`- ${tags}`);
      lines.push(`- Contributor: ${p.data.contributor}`);
      lines.push('');
    }
  }

  // Learning Paths
  if (learn.length > 0) {
    lines.push('---', '', '## Learning Paths', '');
    for (const l of learn) {
      lines.push(`### ${l.data.title}`);
      lines.push(`- Page: ${SITE}/learn/${l.id}/`);
      lines.push(`- Difficulty: ${l.data.difficulty}`);
      if (l.data.estimatedTime) lines.push(`- Estimated Time: ${l.data.estimatedTime}`);
      lines.push(`- Description: ${l.data.description}`);
      const tags = formatTags(l.data.tags);
      if (tags) lines.push(`- ${tags}`);
      lines.push(`- Contributor: ${l.data.contributor}`);
      lines.push('');
      if (l.data.items && l.data.items.length > 0) {
        lines.push('#### Learning Items');
        for (const item of l.data.items) {
          lines.push(`- **${item.title}** (${item.type}): ${item.description} - ${item.url}`);
        }
        lines.push('');
      }
    }
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
