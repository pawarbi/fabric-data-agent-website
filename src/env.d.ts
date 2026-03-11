/// <reference types="astro/client" />

declare var umami: {
  track: (event: string, data?: Record<string, string | undefined>) => void;
};
