/**
 * Page copy and figures, kept apart from the markup.
 *
 * Every number here is one the product actually produces. A landing page that
 * quotes latencies the software does not hit is the fastest way to make the
 * rest of it untrustworthy, so if a figure changes in the app it changes here
 * too — or it comes out.
 */

/**
 * CrabNebula Cloud identifiers.
 *
 * `ORG` is the only thing here that has to be filled in by hand. It is the
 * organization slug, visible in the dashboard URL:
 * `https://web.crabnebula.cloud/<org>/<app>`. The CLI's `whoami` returns an
 * internal ID rather than the slug, so it cannot be discovered from the API.
 *
 * Verify before shipping — a wrong slug is a 404 on the one button that matters:
 *
 *     curl -I https://cdn.crabnebula.app/download/<org>/ghost/latest/platform/nsis-x86_64
 */
const ORG = "ea-webcraft";
const APP = "ghost";

/** Confirmed from `cn release show`: the published Windows asset's platform key. */
const WINDOWS_PLATFORM = "nsis-x86_64";

/**
 * The installer.
 *
 * `latest` always resolves to the newest *published* release, so cutting a
 * release updates this page without touching it. That is the whole reason to
 * serve from CrabNebula rather than from `public/` — the installer is
 * gitignored, so a file-based link would 404 the moment the site is deployed
 * from git.
 */
export const DOWNLOAD = {
  version: "0.1.0",
  filename: "Ghost_0.1.0_x64-setup.exe",
  href: `https://cdn.crabnebula.app/download/${ORG}/${APP}/latest/platform/${WINDOWS_PLATFORM}`,
  size: "4.6 MB",
} as const;

export const SPECS = [
  { value: "<100ms", label: "Hotkey to overlay" },
  { value: "~1.2s", label: "Question to answer" },
  { value: "278", label: "Tests passing" },
  { value: "None", label: "Telemetry" },
] as const;

export const CAPABILITIES = [
  {
    name: "Ask",
    tag: "Ctrl + Space",
    description:
      "Summon the overlay from any application, type, and read a streamed answer without leaving the window you were in. Escape puts it away.",
    detail:
      "Answers are as short as the question deserves. Four response lengths, and the shortest routes to a faster model so a quick question stays quick.",
  },
  {
    name: "Listen",
    tag: "Live transcription",
    description:
      "Captures what your computer is playing — the other people on a call — transcribes it, and answers questions as they are asked, without being prompted.",
    detail:
      "Only the other party's speech triggers an answer, and only when it parses as a question. Acknowledgements and thinking aloud are transcribed but ignored.",
  },
  {
    name: "See",
    tag: "Local OCR",
    description:
      "Reads the text in a window you pin — your editor, a document, a terminal — and answers about what is actually there.",
    detail:
      "Text is extracted on your machine by the OCR engine built into Windows. The screenshot never leaves the device; only the text becomes context, and only when you ask.",
  },
  {
    name: "Stay hidden",
    tag: "Content protection",
    description:
      "The overlay is excluded from screen capture and recording, so sharing your screen shares everything except Ghost.",
    detail:
      "Built on the documented Windows API for exactly this. Ghost includes a self-test that measures whether it is genuinely working on your machine, and reports the limits rather than a reassuring tick.",
  },
] as const;

export const DATA_LOCATIONS = [
  {
    what: "Conversations, settings, usage",
    where: "%APPDATA%\\com.ghost.desktop\\ghost.db",
  },
  {
    what: "API keys",
    where: "Windows Credential Manager",
  },
  {
    what: "Logs",
    where: "%LOCALAPPDATA%\\com.ghost.desktop\\logs",
  },
  {
    what: "Audio recordings",
    where: "Never written to disk — transcribed in memory, then discarded",
  },
  {
    what: "Screenshots",
    where: "Never written to disk — text extracted locally, then discarded",
  },
  {
    what: "What was sent to the model",
    where: "Logged locally so you can read it back. Never transmitted anywhere",
  },
] as const;

/**
 * The marquee under the hero.
 *
 * Ghost's own status vocabulary — the strings the overlay and log actually use.
 * It reads as instrumentation rather than as a list of adjectives, which is the
 * point: a scrolling strip of marketing words would be exactly the thing this
 * page is trying not to be.
 */
export const TICKER = [
  "Ctrl+Space",
  "Listening",
  "Transcribing",
  "Screen",
  "Coding mode",
  "Concise",
  "Content protected",
  "Local first",
  "No telemetry",
  "Kill switch",
  "Redacting secrets",
  "Groq · xAI · Ollama",
] as const;

export const REQUIREMENTS = [
  "Windows 10 version 2004 or later",
  "WebView2 runtime (preinstalled on Windows 11)",
  "~60 MB disk, ~120 MB memory",
  "A provider key, or the offline provider",
] as const;
