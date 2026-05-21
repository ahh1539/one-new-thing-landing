import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "One New Thing, Daily Challenge App for iOS";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const frauncesBold = await readFile(
    join(process.cwd(), "public/fonts/fraunces-700.ttf")
  );
  const interRegular = await readFile(
    join(process.cwd(), "public/fonts/inter-400.ttf")
  );
  const interMedium = await readFile(
    join(process.cwd(), "public/fonts/inter-500.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F8F5F0",
          padding: 80,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            fontSize: 14,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#6B6B70",
            fontFamily: "Inter, sans-serif",
          }}
        >
          No. 001, Daily Challenges
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: -3,
                color: "#1A1A1F",
                fontFamily: "Fraunces, Georgia, serif",
              }}
            >
              One New Thing
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 400,
                lineHeight: 1.35,
                color: "#6B6B70",
                maxWidth: 680,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Three curated challenges every morning, easy, medium, hard. Break
              routine, build micro-habits, discover something new every day.
            </div>
          </div>

          {/* Three bars */}
          <div style={{ display: "flex", gap: 6, width: 280 }}>
            <div
              style={{
                flex: 1,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#A8B89B",
              }}
            />
            <div
              style={{
                flex: 1,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#D4A574",
              }}
            />
            <div
              style={{
                flex: 1,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#C97D5D",
              }}
            />
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Bottom label */}
        <div
          style={{
            display: "flex",
            fontSize: 14,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#A0A0A8",
            fontFamily: "Inter, sans-serif",
          }}
        >
          www.one-new-thing.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: frauncesBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: interMedium,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
