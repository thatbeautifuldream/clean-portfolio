import { ImageResponse } from "next/og";
import { site } from "@/utils/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (file: string) =>
  fetch(`https://cdn.jsdelivr.net/fontsource/fonts/${file}.ttf`).then((res) =>
    res.arrayBuffer(),
  );

const [sans, sansMedium, mono] = await Promise.all([
  font("inter@latest/latin-400-normal"),
  font("inter@latest/latin-500-normal"),
  font("geist-mono@latest/latin-500-normal"),
]);

const stats = [
  { value: "20M+", label: "users reached" },
  { value: "4 talks", label: "at React meetups" },
  { value: "5 products", label: "0 to 1" },
  { value: "4 platforms", label: "web, extension, desktop" },
];

export default function Image() {
  return new ImageResponse(
    <div
      tw="flex h-full w-full flex-col justify-between bg-white px-20 py-16"
      style={{ fontFamily: "Inter", color: "#0a0a0a" }}
    >
      <div tw="flex justify-between text-[20px] text-neutral-500">
        <span style={{ fontFamily: "Geist Mono" }}>
          {site.currentRole.title.toUpperCase()} ·{" "}
          {site.currentRole.company.toUpperCase()}
        </span>
        <span style={{ fontFamily: "Geist Mono" }}>BENGALURU, INDIA</span>
      </div>

      <div tw="flex flex-col">
        <div tw="text-[128px] leading-none">{site.shortName}</div>
        <div tw="mt-6 max-w-[900px] text-[34px] leading-tight text-neutral-600">
          {`${site.tagline}.`}
        </div>
      </div>

      <div tw="flex border-t border-neutral-200 pt-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            tw={`flex flex-1 flex-col ${i ? "border-l border-neutral-200 pl-6" : ""}`}
          >
            <div tw="text-[46px] leading-none">{stat.value}</div>
            <div tw="mt-2 text-[20px] text-neutral-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter", data: sans, weight: 400, style: "normal" },
        { name: "Inter", data: sansMedium, weight: 500, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
