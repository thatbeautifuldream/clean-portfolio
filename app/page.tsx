import { PrintButton } from "@/components/print-button";
import { site } from "@/utils/site";

const contact = [
  { label: "+91 96313 33128", href: "https://wa.me/919631333128" },
  { label: site.email, href: `mailto:${site.email}` },
  { label: "milindmishra.com", href: "https://milindmishra.com" },
  ...site.profiles.map((profile) => ({
    label: profile.href.replace(/^https:\/\/(www\.)?/, ""),
    href: profile.href,
  })),
];

const skills = [
  {
    group: "Languages",
    items: "TypeScript, JavaScript, Node.js, HTML, CSS",
  },
  {
    group: "Frontend",
    items:
      "React, Next.js, TanStack Query, Zustand, Tailwind CSS, Radix UI, Motion, Three.js, Vite, Turborepo",
  },
  {
    group: "Cross-platform",
    items:
      "React Native, Expo, Expo Router, Reanimated, Electron, WXT, Chrome Extensions (MV3)",
  },
  {
    group: "Backend and AI",
    items:
      "Express, Zod, Redis, Firebase, BigQuery, Stripe, Model Context Protocol, Composio, Anthropic, OpenAI",
  },
];

const experience = [
  {
    company: "Merlin AI by Foyer",
    href: "https://www.getmerlin.in/chat",
    location: "Bengaluru, India",
    positions: [
      {
        role: "Mobile Engineer",
        period: "Oct 2026 – Present",
        points: [
          "Lead engineering initiatives for Merlin's iOS and Android app, owning the Expo SDK 57 and React Native product from v7.0.0 onward.",
          "Built core AI workflows including streaming chat, Projects, Vault, chat references, rich media and Crafts, with native SwiftUI and Jetpack Compose surfaces through Expo UI.",
          "Delivered mobile monetization end to end with RevenueCat paywalls, credit top-ups, subscription management and legacy-plan handling.",
          "Raised production quality with a typed design system, 28-language localization, phone and tablet layouts, Firebase Crashlytics, Performance and App Check, plus automated TestFlight, Firebase and Play release pipelines.",
          "Shipped cross-stack features across the mobile app and backend services, including native sponsored content and lifetime-plan support.",
        ],
      },
      {
        role: "Product Engineer",
        period: "Feb 2025 – Present",
        points: [
          "Ship product experiences across Merlin's web platform, desktop agent, Chrome side-panel agent and backend services, with 760+ merged PRs across 12 Foyer repositories.",
          "Built Merlin Agent, an Electron and React desktop coding agent, from zero to v1.0 in five weeks with streamed reasoning and tool calls, approval gates for privileged actions, MCP integrations and voice workflows.",
          "Lead the Merlin Chrome side-panel agent through v8, delivering a Shadow DOM overlay, pilot-mode approvals, connected tools and in-page YouTube and blog summarization.",
          "Delivered core web experiences including ChatGPT imports, Projects and sharing, command-palette chat history, auto-routing model selection, and image and video generation flows.",
          "Own monetization across product surfaces and backend services, including Stripe guest checkout, regional and coupon pricing, credit top-ups, team seats and subscription-change flows.",
          "Led the design-system revamp, moved chat rendering to Streamdown, and helped migrate the marketing platform to Next.js 15 and React 19.",
          "Built Thine's product and marketing experiences, including high-performance image-sequence storytelling, invite and waitlist flows, analytics and shareable quiz results.",
          "Reviewed 250+ teammate pull requests and codified engineering conventions that improved consistency, release safety and agent-assisted development.",
        ],
      },
    ],
  },
  {
    company: "SARAL",
    href: "https://www.getsaral.com/",
    location: "Bengaluru, India",
    positions: [
      {
        role: "Software Engineer",
        period: "Dec 2024 – Feb 2025",
        points: [
          "Revamped internal analytics dashboards with React, TypeScript, and reusable UI patterns, giving growth and operations teams clearer visibility into customer workflows and campaign metrics.",
          "Built creator content submission and approval workflows, reducing manual coordination across operations, creators, and internal review teams during influencer campaigns.",
        ],
      },
    ],
  },
  {
    company: "Proof-of-Skill Protocol",
    href: "https://www.proofofskill.org/",
    location: "Bengaluru, India",
    positions: [
      {
        role: "Founding Product Engineer",
        period: "Jun 2024 – Dec 2024",
        points: [
          "Built the frontend for a 3-sided assessment marketplace across validators, candidates, and recruiters, turning ambiguous 0-to-1 product requirements into launch-ready workflows.",
          "Designed consensus-driven validation, assessment, and review experiences with clear UX states, scalable interaction patterns, and trust-focused decision flows.",
          "Built real-time recording, proctoring, API integrations, and candidate integrity workflows to support reliable remote skill assessment and evaluation.",
        ],
      },
    ],
  },
  {
    company: "StartupHire",
    href: "https://www.linkedin.com/company/startuphire/",
    location: "Remote",
    positions: [
      {
        role: "Frontend Engineer, Lead",
        period: "Aug 2023 – Jan 2024",
        points: [
          "Led frontend delivery for a recruiting workflow SaaS platform, improving candidate pipeline management, hiring operations, and recruiter productivity.",
          "Integrated multiple job boards and application sources into a unified recruiter dashboard, centralizing candidate intake, workflows, and pipeline visibility.",
          "Shipped recruiting automation and GenAI-powered product features from planning to release, supporting recruiter screening, outreach, and pipeline management workflows.",
        ],
      },
    ],
  },
  {
    company: "Locus Connect · NYCU",
    href: "https://www.linkedin.com/company/locus-connect/",
    location: "Hsinchu, Taiwan",
    positions: [
      {
        role: "Frontend Engineer",
        period: "Jul 2022 – Jul 2023",
        points: [
          "Developed real-time 3D indoor maps with React, Three.js, and GSAP, rendering live IoT telemetry through state management and rendering optimizations for a 3D indoor positioning platform.",
          "Improved indoor positioning accuracy from 20 cm to under 10 cm through HDOP optimization, telemetry analysis, and iterative calibration.",
          "Managed production infrastructure with Docker, NGINX, load balancers, and networking configurations to keep real-time visualization environments stable.",
        ],
      },
    ],
  },
];

const education = [
  {
    school: "National Yang Ming Chiao Tung University",
    detail: "Research program, computer software engineering",
    period: "Jul 2023",
    location: "Hsinchu, Taiwan",
  },
  {
    school: "Visvesvaraya Technological University",
    detail: "Bachelor of Engineering, electronics and communication",
    period: "Sep 2022",
    location: "Karnataka, India",
  },
];

const eyebrow =
  "border-b border-ink/10 pb-2 text-base text-faint sm:text-[0.9375rem] print:text-[0.8125rem]";
const title = "font-[560]";
const body = "text-base text-pretty sm:text-sm print:text-[0.8125rem]";
const meta = "text-base text-faint sm:text-sm print:text-[0.8125rem]";
const linkStyle =
  "text-ink underline decoration-ink/25 underline-offset-[3px] hover:decoration-ink";
const quietLinkStyle =
  "text-muted underline decoration-muted/25 underline-offset-[3px] hover:text-ink hover:decoration-ink";

export default function Resume() {
  return (
    <main className="stagger isolate mx-auto flex max-w-3xl flex-col gap-y-10 px-6 py-14 sm:gap-y-12 lg:px-10 lg:py-16 print:max-w-none print:gap-y-5 print:p-0">
      <header className="flex flex-col gap-y-3 print:gap-y-2">
        <div className="flex items-start justify-between gap-x-6">
          <div className="min-w-0">
            <h1 className="text-2xl font-[560] tracking-tight text-balance print:text-xl">
              {site.name}
            </h1>
            <p className="mt-1 text-base text-muted sm:text-sm print:text-[0.8125rem]">
              {`${site.currentRole.title} · ${site.location.city}, ${site.location.country}`}
            </p>
          </div>
          <p className="shrink-0 text-base sm:text-sm print:hidden">
            <PrintButton className="cursor-pointer text-faint hover:text-ink" />
          </p>
        </div>
        <ul
          role="list"
          className="flex flex-wrap gap-x-5 gap-y-1 print:gap-x-4"
        >
          {contact.map((item) => (
            <li key={item.href} className={body}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={quietLinkStyle}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section className="flex flex-col gap-y-3 print:gap-y-2">
        <h2 className={eyebrow}>Experience</h2>
        <ol role="list" className="flex flex-col gap-y-8 print:gap-y-3.5">
          {experience.map((job) => {
            const several = job.positions.length > 1;

            return (
              <li
                key={job.company}
                className={`flex flex-col not-first:break-inside-avoid ${several ? "gap-y-5 print:gap-y-3" : ""}`}
              >
                <div className="flex flex-col break-after-avoid sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6">
                  <p className={`${body} ${title} min-w-0`}>
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noreferrer"
                      className={linkStyle}
                    >
                      {job.company}
                    </a>
                  </p>
                  <p className={`${meta} shrink-0`}>{job.location}</p>
                </div>
                {job.positions.map((position) => (
                  <div
                    key={position.role}
                    className="flex flex-col gap-y-2 print:gap-y-1"
                  >
                    <div className="flex flex-col break-after-avoid sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6">
                      <p
                        className={`${body} min-w-0 ${several ? title : "text-faint"}`}
                      >
                        {position.role}
                      </p>
                      <p className={`${meta} shrink-0 tabular-nums`}>
                        {position.period}
                      </p>
                    </div>
                    <ul className="flex list-disc flex-col gap-y-1.5 pl-4 marker:text-faint print:gap-y-0.5">
                      {position.points.map((point) => (
                        <li
                          key={point}
                          className={`${body} break-inside-avoid text-muted`}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="flex flex-col gap-y-3 print:gap-y-2">
        <h2 className={eyebrow}>Skills</h2>
        <table className="w-full">
          <thead className="sr-only">
            <tr>
              <th scope="col">Area</th>
              <th scope="col">Tools</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.group}>
                <th
                  scope="row"
                  className={`${body} ${title} py-1 pr-6 text-left align-top whitespace-nowrap print:py-0.5`}
                >
                  {skill.group}
                </th>
                <td className={`${body} py-1 text-muted print:py-0.5`}>
                  {skill.items}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="flex flex-col gap-y-3 break-inside-avoid print:gap-y-2">
        <h2 className={eyebrow}>Education</h2>
        <ul role="list" className="flex flex-col gap-y-4 print:gap-y-2">
          {education.map((item) => (
            <li key={item.school}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6">
                <p className={`${body} ${title} min-w-0`}>{item.school}</p>
                <p className={`${meta} shrink-0`}>{item.location}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6">
                <p className={`${body} min-w-0 text-muted`}>{item.detail}</p>
                <p className={`${meta} shrink-0 tabular-nums`}>{item.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
