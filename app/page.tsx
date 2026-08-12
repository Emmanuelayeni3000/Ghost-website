import { Mark } from "./components/mark";
import { OverlayMock } from "./components/overlay-mock";
import {
  CAPABILITIES,
  DATA_LOCATIONS,
  DOWNLOAD,
  REQUIREMENTS,
  SPECS,
  TICKER,
} from "./content";

/**
 * The landing page.
 *
 * Loud where it can be, quiet where it matters. The type is display-sized and
 * the backdrop moves, but the structure underneath is still a datasheet:
 * hairline rules, monospace labels, figures presented as readouts. Ghost is an
 * instrument, and the page should not make claims in a register the product
 * itself never uses.
 */
export default function Page() {
  return (
    <>
      {/* Backdrop, behind everything and inert. */}
      <div className="grid-backdrop" aria-hidden />
      <div className="bloom top-[-18%] left-[-10%] h-[46rem] w-[46rem]" aria-hidden />

      <Header />

      <main className="flex-1">
        <Hero />
        <Ticker />
        <SpecStrip />
        <Capabilities />
        <Privacy />
        <Install />
      </main>

      <Footer />
    </>
  );
}

/**
 * The page's horizontal rhythm.
 *
 * Wide and gutter-driven. A narrow centred column reads as a blog post; this is
 * a product page for something that lives full-screen, and the content should
 * use the display it is being read on.
 */
const SHELL = "mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-12";

// -----------------------------------------------------------------------------

function Header() {
  return (
    <header className="rule sticky top-0 z-20 border-b bg-[color-mix(in_oklab,var(--color-void)_82%,transparent)] backdrop-blur-xl">
      <div className={`${SHELL} flex items-center gap-3 py-3.5`}>
        <Mark size={17} className="text-ink" />
        <span className="text-[14px] font-semibold tracking-tight">Ghost</span>
        <span className="label ml-1 hidden sm:block">v{DOWNLOAD.version}</span>

        <div className="flex-1" />

        {/* <a href="#install" className="text-ink-muted hover:text-ink text-[13px] transition-colors">
          Install
        </a> */}
        <a
          href={DOWNLOAD.href}
          className="bg-ink text-void rounded-full px-4 py-1.5 text-[13px] font-medium transition-transform hover:scale-[1.03]"
        >
          Download
        </a>
      </div>
    </header>
  );
}

// -----------------------------------------------------------------------------

function Hero() {
  return (
    <section className={`${SHELL} pt-16 pb-14 lg:pt-24 lg:pb-20`}>
      <p className="label flex items-center gap-2">
        <span className="bg-live inline-block size-1.5 rounded-full" />
        Windows · Local-first · Zero telemetry
      </p>

      {/* Deliberately oversized and left-hung: the headline is the artwork. */}
      <h1 className="display mt-7 text-[clamp(2.75rem,10.5vw,9rem)]">
        Press <span className="text-accent">Ctrl+Space</span>.
        <br />
        Get the answer.
        <br />
        <span className="text-ink-faint">Nobody sees it.</span>
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-16">
        <div>
          <p className="text-ink-muted max-w-md text-[15.5px] leading-relaxed">
            Ghost sits over whatever you are doing. It hears the conversation, reads the window
            you point it at, and answers in a translucent overlay that screen sharing does not
            capture — without switching windows or pasting anything.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={DOWNLOAD.href}
              className="bg-accent text-void rounded-full px-6 py-3 text-[14.5px] font-semibold transition-transform hover:scale-[1.03]"
            >
              Download for Windows
            </a>
            <span className="text-ink-faint font-mono text-[11.5px] leading-relaxed">
              {DOWNLOAD.filename}
              <br />
              {DOWNLOAD.size} · MIT licensed
            </span>
          </div>

          <p className="text-ink-faint mt-6 max-w-sm text-[12.5px] leading-relaxed">
            Runs with no API key at all using the built-in offline provider. Add a free{" "}
            <a
              href="https://console.groq.com/keys"
              className="text-ink-muted hover:text-ink underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              Groq key
            </a>{" "}
            for real answers.
          </p>
        </div>

        <div className="lifted rounded-xl">
          <OverlayMock />
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------

/** The product's own status vocabulary, scrolling. */
function Ticker() {
  // Duplicated so the marquee loops seamlessly without measuring in JS.
  const items = [...TICKER, ...TICKER];

  return (
    <section className="rule overflow-hidden border-y py-3" aria-hidden>
      <div className="ticker">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-ink-faint flex shrink-0 items-center gap-8 pr-8 font-mono text-[11px] tracking-[0.18em] uppercase"
          >
            {item}
            <span className="bg-accent/50 inline-block size-1 rounded-full" />
          </span>
        ))}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------

/** Figures as instrument readouts, at display size. */
function SpecStrip() {
  return (
    <section className={`${SHELL} grid grid-cols-2 gap-y-10 py-16 sm:grid-cols-4 lg:py-20`}>
      {SPECS.map((spec) => (
        <div key={spec.label}>
          <div className="display text-[clamp(2rem,4.5vw,3.5rem)]">{spec.value}</div>
          <div className="label mt-2">{spec.label}</div>
        </div>
      ))}
    </section>
  );
}

// -----------------------------------------------------------------------------

function Capabilities() {
  return (
    <section className="rule border-t">
      <div className={`${SHELL} py-20 lg:py-28`}>
        <SectionHeading index="01" title="What it does" />

        <div className="rule mt-14 divide-y border-t">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.name}
              className="group grid gap-4 py-9 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-16"
            >
              <div>
                <h3 className="display group-hover:text-accent text-[clamp(1.6rem,3.2vw,2.4rem)] transition-colors">
                  {capability.name}
                </h3>
                <p className="label mt-2">{capability.tag}</p>
              </div>
              <div className="max-w-2xl">
                <p className="text-ink-muted text-[15px] leading-relaxed">
                  {capability.description}
                </p>
                <p className="text-ink-faint mt-3 text-[13px] leading-relaxed">
                  {capability.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------

function Privacy() {
  return (
    <section className="rule border-t">
      <div className={`${SHELL} py-20 lg:py-28`}>
        <SectionHeading index="02" title="Where your data goes" />

        <p className="text-ink-muted mt-8 max-w-3xl text-[17px] leading-relaxed">
          There is no Ghost server. Nothing is collected, and there is no analytics setting to
          opt out of, because the feature does not exist. Every capture source is off until you
          turn it on, and the status bar shows what is actually running — not what is configured.
        </p>

        <dl className="rule mt-14 divide-y border-t">
          {DATA_LOCATIONS.map((row) => (
            <div
              key={row.what}
              className="grid gap-1.5 py-5 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-16"
            >
              <dt className="text-[15px]">{row.what}</dt>
              <dd className="text-ink-muted font-mono text-[13px] break-words">{row.where}</dd>
            </div>
          ))}
        </dl>

        <div className="rule bg-surface/60 mt-14 rounded-xl border p-6 lg:p-8">
          <p className="label">On the invisible overlay</p>
          <p className="text-ink-muted mt-3 max-w-3xl text-[14.5px] leading-relaxed">
            Ghost asks Windows to exclude its own window from screen capture, using the same
            documented API that banking and DRM applications use. It works with Zoom, Teams, Meet
            and Slack. It is not a security bypass — it hides nothing but its own window, and
            Microsoft is explicit that it offers no guarantee. A camera pointed at your screen
            still sees everything. Ghost ships a self-test so you can measure it on your own
            machine rather than take that on trust.
          </p>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------

function Install() {
  const steps = [
    {
      step: "Download and run the installer.",
      note: `${DOWNLOAD.filename}. Installs for the current user, so it never asks for administrator rights.`,
    },
    {
      step: "Press Ctrl+Space from anywhere.",
      note: "Ghost starts in the tray with no window. The hotkey summons it; Escape puts it away.",
    },
    {
      step: "Add a provider key, or don't.",
      note: "The offline provider answers without any key, so you can try the whole interaction first. Settings → AI Models connects Groq, xAI, Ollama, or anything OpenAI-compatible.",
    },
    {
      step: "Turn on what it may use.",
      note: "Settings → Privacy. System audio to hear a call, screen reading to read a window. Both are off until you enable them.",
    },
  ];

  return (
    <section id="install" className="rule scroll-mt-16 border-t">
      <div className={`${SHELL} py-20 lg:py-28`}>
        <SectionHeading index="03" title="Install" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <ol className="rule divide-y border-t">
            {steps.map((item, index) => (
              <li key={item.step} className="grid gap-3 py-7 sm:grid-cols-[3rem_minmax(0,1fr)]">
                <span className="label pt-1.5">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[16px] font-medium tracking-tight">{item.step}</p>
                  <p className="text-ink-faint mt-1.5 max-w-2xl text-[13px] leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <aside>
            <p className="label">Requirements</p>
            <ul className="rule mt-4 divide-y border-t">
              {REQUIREMENTS.map((requirement) => (
                <li key={requirement} className="text-ink-muted py-3 text-[13.5px]">
                  {requirement}
                </li>
              ))}
            </ul>

            <div className="border-warn/30 bg-warn/[0.06] mt-10 rounded-xl border p-5">
              <p className="text-warn font-mono text-[10.5px] tracking-[0.16em] uppercase">
                First run
              </p>
              <p className="text-ink-muted mt-2.5 text-[13px] leading-relaxed">
                Windows will say the publisher is unknown, because this build is not code signed
                yet. Choose <span className="text-ink">More info</span> →{" "}
                <span className="text-ink">Run anyway</span>. That prompt is SmartScreen checking
                reputation, not a security finding.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5">
      <span className="label">{index}</span>
      <h2 className="display text-[clamp(1.9rem,5vw,4rem)]">{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="rule border-t">
      <div
        className={`${SHELL} text-ink-faint flex flex-wrap items-center gap-x-8 gap-y-3 py-10 text-[12.5px]`}
      >
        <span className="text-ink flex items-center gap-2">
          <Mark size={14} />
          Ghost v{DOWNLOAD.version}
        </span>
        <span>MIT licensed</span>
        <span>No telemetry</span>
        <div className="flex-1" />
        <span className="font-mono text-[11.5px]">Tauri · Rust · React</span>
      </div>
    </footer>
  );
}
