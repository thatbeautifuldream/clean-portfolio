import { CopyEmail } from "@/components/copy-email";
import { ThemeName } from "@/components/theme-name";
import { UpdatedStamp } from "@/components/updated-stamp";
import { lastCommit, lastUpdated } from "@/utils/last-updated";
import { site } from "@/utils/site";

const stats = [
  { value: "20M+", label: "users reached" },
  { value: "4 talks", label: "at React meetups" },
  { value: "5 products", label: "0 to 1" },
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

const eyebrow =
  "border-b border-ink/10 pb-2 text-base text-faint sm:text-[0.9375rem]";
const title = "font-[560]";
const meta = "text-base text-faint sm:text-sm";
// links inside the content carry the emphasis; footer links stay out of the way
const linkStyle =
  "text-ink underline decoration-ink/25 underline-offset-[3px] hover:decoration-ink";
const quietLinkStyle =
  "text-muted underline decoration-muted/25 underline-offset-[3px] hover:text-ink hover:decoration-ink";

export default function Home() {
  return (
    <main className="isolate mx-auto flex max-w-6xl flex-col gap-y-10 px-6 py-14 sm:gap-y-12 lg:px-10 lg:py-16">
      <header className="flex flex-col gap-y-4 sm:flex-row sm:items-end sm:justify-between sm:gap-x-10">
        <div>
          <h1 className="text-base font-[600] tracking-[-0.00813rem] sm:text-[0.9375rem]">
            <ThemeName />
          </h1>
          <p className="mt-1 max-w-[56ch] text-base text-pretty text-muted sm:text-sm">
            {`${site.tagline}.`}
          </p>
        </div>
        <p className="text-base text-muted sm:text-right sm:text-sm">
          {`${site.location.city}, ${site.location.country}`}
          <UpdatedStamp date={lastUpdated} sha={lastCommit} />
        </p>
      </header>

      <section className="flex flex-col gap-y-2 border-y border-ink/10 py-5 sm:flex-row sm:flex-wrap sm:gap-x-8">
        {stats.map((stat) => (
          <p key={stat.label} className="text-base sm:text-sm">
            <span className={title}>{stat.value}</span>{" "}
            <span className="text-muted">{stat.label}</span>
          </p>
        ))}
      </section>

      <div className="grid gap-y-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-[3fr_2fr_2fr] lg:gap-x-12">
        <section className="flex flex-col gap-y-3">
          <h2 className={eyebrow}>Work</h2>
          <ul role="list" className="flex flex-col dim-siblings">
            {work.map((item) => (
              <li
                key={item.company}
                className="flex flex-col gap-y-1 sm:flex-row sm:gap-x-4"
              >
                <p className={`${meta} sm:w-[4.5rem] sm:shrink-0`}>
                  {item.period}
                </p>
                <div className="min-w-0">
                  <p className={`text-base ${title} sm:text-sm`}>
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
          <section className="flex flex-col gap-y-3">
            <h2 className={eyebrow}>Building</h2>
            <ul role="list" className="flex flex-col dim-siblings">
              {building.map((item) => (
                <li key={item.name} className="flex items-baseline gap-x-4">
                  <p
                    className={`min-w-0 flex-1 truncate text-base ${title} sm:text-sm`}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={linkStyle}
                    >
                      {item.name}
                    </a>
                  </p>
                  <p className="shrink-0 text-base text-faint sm:text-sm">
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

          <section className="flex flex-col gap-y-3">
            <h2 className={eyebrow}>Education</h2>
            <dl className="flex flex-col dim-siblings">
              {education.map((item) => (
                <div key={item.school}>
                  <dt className={`text-base ${title} text-pretty sm:text-sm`}>
                    {item.school}
                  </dt>
                  <dd className="text-base text-pretty text-muted sm:text-sm">
                    {item.detail}
                  </dd>
                  <dd className={`mt-1 ${meta}`}>{item.meta}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section className="flex flex-col gap-y-3">
          <h2 className={eyebrow}>Speaking</h2>
          <ul role="list" className="flex flex-col dim-siblings">
            {speaking.map((item) => (
              <li key={item.href}>
                <p className={`text-base ${title} text-pretty sm:text-sm`}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={linkStyle}
                  >
                    {item.title}
                  </a>
                </p>
                <p className={`mt-1 ${meta}`}>{item.meta}</p>
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
        <p className="text-base sm:ml-auto sm:text-sm">
          <CopyEmail />
        </p>
      </footer>
    </main>
  );
}
