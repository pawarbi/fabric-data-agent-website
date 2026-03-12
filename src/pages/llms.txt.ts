import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://fabricdataagent.com';

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
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
    '# Fabric Data Agent',
    '',
    '> A community-driven resource hub for Microsoft Fabric Data Agents. Curated articles, videos, tools, events, learning paths, and LinkedIn posts - all in one place.',
    '',
    'This site aggregates community-created content about Microsoft Fabric Data Agents. It is open source, community-maintained, and welcomes contributions from anyone.',
    '',
    `## Site Links`,
    `- [Home](${SITE}/)`,
    `- [Articles](${SITE}/articles/)`,
    `- [Videos](${SITE}/videos/)`,
    `- [Resources](${SITE}/resources/)`,
    `- [Events](${SITE}/events/)`,
    `- [Tools](${SITE}/tools/)`,
    `- [LinkedIn Posts](${SITE}/linkedin/)`,
    `- [Learning Paths](${SITE}/learn/)`,
    `- [Contribute](${SITE}/contribute/)`,
    `- [About](${SITE}/about/)`,
    `- [Full Content for LLMs](${SITE}/llms-full.txt)`,
    '',
  ];

  if (articles.length > 0) {
    lines.push('## Articles');
    for (const a of articles) {
      lines.push(`- [${a.data.title}](${a.data.url}): ${a.data.summary}`);
    }
    lines.push('');
  }

  if (videos.length > 0) {
    lines.push('## Videos');
    for (const v of videos) {
      lines.push(`- [${v.data.title}](https://www.youtube.com/watch?v=${v.data.youtubeId}): ${v.data.description}`);
    }
    lines.push('');
  }

  if (resources.length > 0) {
    lines.push('## Resources');
    for (const r of resources) {
      lines.push(`- [${r.data.title}](${r.data.url}): ${r.data.description}`);
    }
    lines.push('');
  }

  if (events.length > 0) {
    lines.push('## Events');
    for (const e of events) {
      lines.push(`- [${e.data.title}](${e.data.url}): ${e.data.description} (${formatDate(e.data.date)}, ${e.data.location})`);
    }
    lines.push('');
  }

  if (tools.length > 0) {
    lines.push('## Tools');
    for (const t of tools) {
      lines.push(`- [${t.data.title}](${t.data.url}): ${t.data.description}`);
    }
    lines.push('');
  }

  if (linkedinPosts.length > 0) {
    lines.push('## LinkedIn Posts');
    for (const p of linkedinPosts) {
      lines.push(`- [${p.data.title}](${p.data.linkedinUrl}): ${p.data.description}`);
    }
    lines.push('');
  }

  if (learn.length > 0) {
    lines.push('## Learning Paths');
    for (const l of learn) {
      lines.push(`- [${l.data.title}](${SITE}/learn/${l.id}/): ${l.data.description} (${l.data.difficulty})`);
    }
    lines.push('');
  }

  lines.push('## Contributing');
  lines.push(`Anyone can contribute content via [GitHub issue forms](${SITE}/contribute/). No coding required.`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
