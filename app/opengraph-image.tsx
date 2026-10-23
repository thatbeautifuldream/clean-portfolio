import { ImageResponse } from "next/og";
import { site } from "@/utils/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const sans = await fetch(
  "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf",
).then((res) => res.arrayBuffer());

export default function Image() {
  return new ImageResponse(
    <div
      tw="flex h-full w-full flex-col justify-between bg-white px-20 py-16"
      style={{ fontFamily: "Inter", color: "#111111" }}
    >
      <div tw="flex justify-between text-[22px] text-neutral-500">
        <span>
          {site.currentRole.title} · {site.currentRole.company}
        </span>
        <span>
          {site.location.city}, {site.location.country}
        </span>
      </div>
      <div tw="flex text-[92px] leading-none">{site.name}</div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Inter", data: sans, weight: 400, style: "normal" }],
    },
  );
}
