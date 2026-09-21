import { ArrowTurnBackwardIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { site } from "@/utils/site";

export const metadata: Metadata = {
  title: `Résumé · ${site.shortName}`,
  description: site.description,
  alternates: { canonical: "/resume" },
};

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
    role: "Product Engineer",
    domain: "AI SaaS",
    period: "Feb 2025 – Present",
    location: "Bengaluru, India",
    points: [
      "Shipped the Merlin AI chat platform across 130+ tagged releases, delivering ChatGPT chat imports, projects and sharing, a chat history command palette, and an auto-routing model selector.",
      "Took ownership of the Merlin iOS and Android app on Expo SDK 57 and React Native, shipping streaming chat with branching threads, voice dictation, image and video generation, and native SwiftUI and Jetpack Compose menus via Expo UI.",
      "Built Merlin Agent, an Electron and React desktop coding agent, from zero to v1.0 in 5 weeks with streaming chain-of-thought tool calls, an approval gate for privileged actions, and Composio MCP integrations.",
      "Took ownership of the Merlin Chrome side-panel agent on WXT and React through v8, shipping a shadow-DOM agent overlay, pilot-mode approval gates, Composio MCP tools, and in-page YouTube and blog summarizers.",
      "Owned monetization across React surfaces and Node API endpoints, delivering Stripe guest checkout, coupon-tier and regional pricing, top-ups, team seats, and Churnkey plan-change flows.",
      "Led a design-system revamp, migrated the chat renderer to Streamdown and the marketing site to Next.js 15 and React 19, and reviewed 250+ teammate pull requests while codifying frontend conventions.",
    ],
  },
  {
    company: "SARAL",
    href: "https://www.getsaral.com/",
    role: "Software Engineer",
    domain: "Influencer management",
    period: "Dec 2024 – Feb 2025",
    location: "Bengaluru, India",
    points: [
      "Revamped internal analytics dashboards with React, TypeScript, and reusable UI patterns, giving growth and operations teams clearer visibility into customer workflows and campaign metrics.",
      "Built creator content submission and approval workflows, reducing manual coordination across operations, creators, and internal review teams during influencer campaigns.",
    ],
  },
  {
    company: "Proof-of-Skill Protocol",
    href: "https://www.proofofskill.org/",
    role: "Founding Product Engineer",
    domain: "Candidate assessment and recruitment software",
    period: "Jun 2024 – Dec 2024",
    location: "Bengaluru, India",
    points: [
      "Built the frontend for a 3-sided assessment marketplace across validators, candidates, and recruiters, turning ambiguous 0-to-1 product requirements into launch-ready workflows.",
      "Designed consensus-driven validation, assessment, and review experiences with clear UX states, scalable interaction patterns, and trust-focused decision flows.",
      "Built real-time recording, proctoring, API integrations, and candidate integrity workflows to support reliable remote skill assessment and evaluation.",
    ],
  },
  {
    company: "StartupHire",
    href: "https://www.linkedin.com/company/startuphire/",
    role: "Frontend Engineer, Lead",
    domain: "AI recruitment software",
    period: "Aug 2023 – Jan 2024",
    location: "Remote",
    points: [
      "Led frontend delivery for a recruiting workflow SaaS platform, improving candidate pipeline management, hiring operations, and recruiter productivity.",
      "Integrated multiple job boards and application sources into a unified recruiter dashboard, centralizing candidate intake, workflows, and pipeline visibility.",
      "Shipped recruiting automation and GenAI-powered product features from planning to release, supporting recruiter screening, outreach, and pipeline management workflows.",
    ],
  },
  {
    company: "Locus Connect · NYCU",
    href: "https://www.linkedin.com/company/locus-connect/",
    role: "Frontend Engineer",
    domain: "Real-time location SaaS",
    period: "Jul 2022 – Jul 2023",
    location: "Hsinchu, Taiwan",
    points: [
      "Developed real-time 3D indoor maps with React, Three.js, and GSAP, rendering live IoT telemetry through state management and rendering optimizations for a 3D indoor positioning platform.",
      "Improved indoor positioning accuracy from 20 cm to under 10 cm through HDOP optimization, telemetry analysis, and iterative calibration.",
      "Managed production infrastructure with Docker, NGINX, load balancers, and networking configurations to keep real-time visualization environments stable.",
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
const railLinkStyle = "text-faint hover:text-ink";

export default function Resume() {
  return (
    <main className="stagger isolate mx-auto flex max-w-3xl flex-col gap-y-10 px-6 py-14 sm:gap-y-12 lg:px-10 lg:py-16 print:max-w-none print:gap-y-5 print:p-0">
      <nav className="flex items-center justify-between gap-x-6 xl:fixed xl:top-16 xl:left-20 xl:flex-col xl:items-start xl:gap-y-10 print:hidden">
        <p className="text-base sm:text-sm">
          <Link
            href="/"
            className={`inline-flex items-center gap-x-1.5 ${railLinkStyle}`}
          >
            <HugeiconsIcon
              icon={ArrowTurnBackwardIcon}
              strokeWidth={1.5}
              className="size-5 shrink-0 sm:size-4"
            />
            Index
          </Link>
        </p>
        <p className="text-base sm:text-sm">
          <PrintButton className={`cursor-pointer ${railLinkStyle}`} />
        </p>
      </nav>

      <header className="flex flex-col gap-y-3 print:gap-y-2">
        <div>
          <h1 className="text-2xl font-[560] tracking-tight text-balance print:text-xl">
            {site.name}
          </h1>
          <p className="mt-1 text-base text-muted sm:text-sm print:text-[0.8125rem]">
            {`${site.currentRole.title} · ${site.location.city}, ${site.location.country}`}
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
          {experience.map((job) => (
            <li key={job.company} className="not-first:break-inside-avoid">
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
                  <span className="font-normal text-faint">
                    {" · "}
                    {job.domain}
                  </span>
                </p>
                <p className={`${meta} shrink-0`}>{job.location}</p>
              </div>
              <div className="flex flex-col break-after-avoid sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6">
                <p className={`${meta} min-w-0`}>{job.role}</p>
                <p className={`${meta} shrink-0 tabular-nums`}>{job.period}</p>
              </div>
              <ul className="mt-2 flex list-disc flex-col gap-y-1.5 pl-4 marker:text-faint print:mt-1 print:gap-y-0.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className={`${body} break-inside-avoid text-muted`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-y-3 print:gap-y-2">
        <h2 className={eyebrow}>Skills</h2>
        <dl className="flex flex-col gap-y-2 print:gap-y-1">
          {skills.map((skill) => (
            <div
              key={skill.group}
              className="flex flex-col sm:flex-row sm:gap-x-2"
            >
              <dt className={`${body} ${title} shrink-0`}>{skill.group}</dt>
              <dd className={`${body} min-w-0 text-muted`}>{skill.items}</dd>
            </div>
          ))}
        </dl>
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
