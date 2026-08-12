import { Mark } from "./mark";

/**
 * A faithful still of the running overlay.
 *
 * Rebuilt in markup rather than shipped as a screenshot: it stays sharp at
 * every density, it is selectable and readable by a screen reader, and it
 * cannot drift out of date silently the way a PNG taken once does — if the
 * product's chrome changes, this looks wrong immediately.
 *
 * The content is a real interaction: a question heard from the call, an answer
 * streaming back.
 */
export function OverlayMock() {
  return (
    <figure className="w-full">
      <div className="rule bg-surface overflow-hidden rounded-xl border shadow-2xl shadow-black/60">
        {/* Header */}
        <div className="rule flex items-center gap-2 border-b px-4 py-2">
          <Mark size={13} className="text-accent" />
          <span className="text-ink-faint font-mono text-[10.5px] tracking-[0.14em]">GHOST</span>
          <div className="flex-1" />
          <span className="text-accent font-mono text-[10.5px]">Pinned</span>
          <span className="text-live font-mono text-[10.5px]">Listening</span>
          <span className="text-ink-faint font-mono text-[10.5px]">Screen</span>
        </div>

        {/* Prompt */}
        <div className="flex items-start gap-2.5 px-4 py-3">
          <span className="text-accent mt-px font-mono text-[13px] leading-none">▸</span>
          <span className="text-ink-faint text-[13.5px]">Ask Ghost…</span>
        </div>

        {/* Transcript */}
        <div className="rule border-t px-4 py-2.5">
          <div className="text-ink-faint mb-1.5 flex items-center gap-2 font-mono text-[10px] tracking-[0.14em]">
            <span className="bg-live inline-block size-1.5 rounded-full" />
            LISTENING
          </div>
          <p className="flex gap-2 text-[12.5px] leading-snug">
            <span className="text-accent w-9 shrink-0 text-right font-medium text-[10px] leading-[1.55]">
              Them
            </span>
            <span className="text-ink">
              What&rsquo;s the time complexity of that approach?
              <span className="text-accent ml-1 text-[10px]">●</span>
            </span>
          </p>
        </div>

        {/* Answer */}
        <div className="rule border-t px-4 py-3">
          <div className="text-ink-muted mb-2 flex gap-2 text-[12.5px]">
            <span className="text-ink-faint shrink-0">›</span>
            <span>What&rsquo;s the time complexity of that approach?</span>
          </div>

          <div className="space-y-2 text-[13.5px] leading-relaxed">
            <p>
              <strong className="font-semibold">O(n log n)</strong> — the sort dominates. The
              scan after it is linear, so it does not change the bound.
            </p>
            <p className="text-ink-muted">
              If the input is already sorted, or you can afford a hash set, you can get this to
              O(n)<span className="caret" />
            </p>
          </div>

          <div className="text-ink-faint mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10.5px]">
            <span className="bg-live inline-block size-1.5 rounded-full" />
            <span>openai/gpt-oss-120b</span>
            <span aria-hidden>·</span>
            <span>question + transcript + screen</span>
            <span aria-hidden>·</span>
            <span>412ms to first token</span>
          </div>
        </div>

        {/* Status bar */}
        <div className="rule text-ink-faint flex items-center gap-2 border-t px-3 py-1.5 font-mono text-[10.5px]">
          <span>Coding</span>
          <span aria-hidden>·</span>
          <span>Concise</span>
          <div className="flex-1" />
          <span className="flex items-center gap-1">
            <span className="bg-ink-faint/50 inline-block size-1.5 rounded-full" />
            MIC
          </span>
          <span className="text-live flex items-center gap-1">
            <span className="bg-live inline-block size-1.5 rounded-full" />
            SCREEN
          </span>
          <span className="text-live flex items-center gap-1">
            <span className="bg-live inline-block size-1.5 rounded-full" />
            CLOUD
          </span>
        </div>
      </div>

      <figcaption className="text-ink-faint mt-3 font-mono text-[10.5px] tracking-[0.1em] uppercase">
        The overlay, actual size
      </figcaption>
    </figure>
  );
}
