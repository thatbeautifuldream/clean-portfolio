import { CopyEmail } from "@/components/copy-email";
import { ThemeName } from "@/components/theme-name";
import { UpdatedStamp } from "@/components/updated-stamp";
import { lastCommit, lastUpdated } from "@/utils/last-updated";
import { site } from "@/utils/site";

const stats = [
  { value: "20M+", label: "users reached" },
  { value: "4 talks", label: "at React meetups" },
  { value: "5 products", label: "0 → 1" },
  { value: "4 platforms", label: "web, extension, desktop, mobile" },
];

const work = [
  {
    company: "Merlin AI by Foyer",
    role: "Product Engineer",
    period: "2025 —",
    note: "130+ releases. Mostly the web app, then the Chrome extension rewrite that is probably my best work, the Electron agent shipped in 2 weeks, the React Native app I am on now, and Stripe monetization.",
  },
  {
    company: "SARAL",
    role: "Software Engineer",
    period: "2024 – 25",
    note: "Analytics dashboards and creator approval workflows for influencer campaigns.",
  },
  {
    company: "Proof-of-Skill Protocol",
    role: "Founding Product Engineer",
    period: "2024",
    note: "Frontend for a 3-sided assessment marketplace, 0 to 1 through launch.",
  },
  {
    company: "StartupHire",
    role: "Frontend Engineer, Lead",
    period: "2023 – 24",
    note: "Led frontend for AI recruitment software, unifying multiple job boards into one pipeline.",
  },
  {
    company: "Locus Connect · NYCU",
    role: "Frontend Engineer",
    period: "2022 – 23",
    note: "Real-time 3D indoor maps in Three.js, improving accuracy from 20 cm to under 10 cm.",
  },
];

const building = [
  {
    name: "imgzly",
    metric: "100% on-device",
    href: "https://imgzly.com",
  },
  {
    name: "jsonvisualiser",
    metric: "43% return rate",
    href: "https://jsonvisualiser.com",
  },
  {
    name: "markdownvisualizer",
    metric: "instant preview",
    href: "https://markdownvisualizer.com",
  },
  {
    name: "attnui",
    metric: "3 components",
    href: "https://attnui.com",
  },
];

const speaking = [
  {
    title: "Component distribution with shadcn Registry",
    meta: "React Bangalore · 2026",
    href: "https://meetup.com/reactjs-bangalore/events/312620988",
  },
  {
    title: "Mastering ViewTransition in React",
    meta: "React Play Bengaluru · 2025",
    href: "https://meetup.com/reactplay-bengaluru/events/311437528",
  },
  {
    title: "Real-time apps with reactive databases",
    meta: "React Play Bengaluru · 2025",
    href: "https://meetup.com/reactplay-bengaluru/events/307690438",
  },
  {
    title: "AI for React developers",
    meta: "React Bangalore · 2025",
    href: "https://meetup.com/reactjs-bangalore/events/306320480",
  },
];

const education = [
  {
    school: "National Yang Ming Chiao Tung University",
    detail: "Research program, computer software engineering",
    meta: "Hsinchu, Taiwan · 2023",
  },
  {
    school: "Visvesvaraya Technological University",
    detail: "B.E. electronics and communication",
    meta: "Karnataka, India · 2022",
  },
];

const links = [
  { label: "Email", href: `mailto:${site.email}` },
  ...site.profiles,
  { label: "Résumé", href: site.resume },
];

const eyebrow = "font-mono text-xs tracking-wide uppercase text-faint";
// links inside the content carry the emphasis; footer links stay out of the way
const linkStyle =
  "text-ink underline decoration-ink/25 underline-offset-[3px] hover:decoration-ink";
const quietLinkStyle =
  "text-muted underline decoration-muted/25 underline-offset-[3px] hover:text-ink hover:decoration-ink";

export default function Home() {
  return (
    <main className="isolate mx-auto flex max-w-6xl flex-col justify-center gap-y-12 px-6 py-14 sm:gap-y-14 lg:h-full lg:gap-y-8 lg:px-10 lg:py-10">
      <header className="flex flex-col gap-y-4 sm:flex-row sm:items-end sm:justify-between sm:gap-x-10">
        <div>
          <h1 className="font-display max-w-[24ch] text-5xl tracking-tight text-balance sm:text-6xl">
            <ThemeName />
          </h1>
          <p className="mt-3 max-w-[56ch] text-base text-pretty text-muted sm:text-sm">
            {`${site.tagline}.`}
          </p>
        </div>
        <p className="text-base text-muted sm:text-right sm:text-sm">
          {`${site.location.city}, ${site.location.country}`}
          <UpdatedStamp date={lastUpdated} sha={lastCommit} />
        </p>
      </header>

      <section className="grid grid-cols-2 border-y border-ink/10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-ink/10 py-7 lg:py-6 nth-[n+3]:border-t nth-[n+3]:pt-7 odd:pr-5 even:border-l even:pl-5 lg:border-t-0 lg:px-6 lg:first:pl-0 lg:last:pr-0 lg:nth-[n+3]:border-t-0 lg:odd:pr-6 lg:even:pl-6 lg:not-nth-[4n+1]:border-l"
          >
            <p className="font-display text-4xl tabular-nums tracking-tight sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-base text-muted sm:text-sm lg:truncate">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <div className="grid gap-y-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-[3fr_2fr_2fr] lg:gap-x-12">
        <section className="flex flex-col gap-y-4">
          <h2 className={eyebrow}>Work</h2>
          <ul role="list" className="flex flex-col dim-siblings">
            {work.map((item) => (
              <li key={item.company} className="flex gap-x-4">
                <p className="w-[4.5rem] shrink-0 pt-0.5 font-mono text-xs tabular-nums text-faint">
                  {item.period}
                </p>
                <div className="min-w-0">
                  <p className="text-base font-medium">
                    {item.company}
                    <span className="font-normal text-faint">
                      {" · "}
                      {item.role}
                    </span>
                  </p>
                  <p className="mt-1 text-base text-pretty text-muted sm:text-sm">
                    {item.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-y-8">
          <section className="flex flex-col gap-y-4">
            <h2 className={eyebrow}>Building</h2>
            <ul role="list" className="flex flex-col dim-siblings">
              {building.map((item) => (
                <li key={item.name} className="flex items-baseline gap-x-4">
                  <p className="min-w-0 flex-1 truncate text-base font-medium">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={linkStyle}
                    >
                      {item.name}
                    </a>
                  </p>
                  <p className="shrink-0 text-base tabular-nums text-faint sm:text-sm">
                    {item.metric}
                  </p>
                </li>
              ))}
            </ul>
            <p className="max-w-[56ch] text-base text-pretty text-muted sm:text-sm">
              Plus 3 pull requests merged into{" "}
              <a
                href="https://github.com/vercel/streamdown/pull/99"
                target="_blank"
                rel="noreferrer"
                className={linkStyle}
              >
                vercel/streamdown
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/vercel/ai-elements/pull/112"
                target="_blank"
                rel="noreferrer"
                className={linkStyle}
              >
                ai-elements
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-y-4">
            <h2 className={eyebrow}>Education</h2>
            <dl className="flex flex-col dim-siblings">
              {education.map((item) => (
                <div key={item.school}>
                  <dt className="text-base font-medium text-pretty">
                    {item.school}
                  </dt>
                  <dd className="text-base text-pretty text-muted sm:text-sm">
                    {item.detail}
                  </dd>
                  <dd className="mt-1 font-mono text-xs text-faint">
                    {item.meta}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section className="flex flex-col gap-y-4">
          <h2 className={eyebrow}>Speaking</h2>
          <ul role="list" className="flex flex-col dim-siblings">
            {speaking.map((item) => (
              <li key={item.href}>
                <p className="text-base font-medium text-pretty">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={linkStyle}
                  >
                    {item.title}
                  </a>
                </p>
                <p className="mt-1 font-mono text-xs text-faint">{item.meta}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-6">
        <ul role="list" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label} className="text-base font-normal sm:text-sm">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={quietLinkStyle}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs sm:ml-auto">
          <CopyEmail />
        </p>
      </footer>
    </main>
  );
}
