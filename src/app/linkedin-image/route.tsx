import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const frauncesBold = await readFile(
    join(process.cwd(), "public/fonts/fraunces-700.ttf")
  );
  const frauncesSemi = await readFile(
    join(process.cwd(), "public/fonts/fraunces-600.ttf")
  );
  const interRegular = await readFile(
    join(process.cwd(), "public/fonts/inter-400.ttf")
  );
  const interMedium = await readFile(
    join(process.cwd(), "public/fonts/inter-500.ttf")
  );
  const interSemi = await readFile(
    join(process.cwd(), "public/fonts/inter-600.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#1A1A1F",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            backgroundColor: "rgba(168, 184, 155, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            backgroundColor: "rgba(212, 165, 116, 0.06)",
          }}
        />

        {/* Left content panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 56px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#A8B89B",
              }}
            />
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: 2.5,
                color: "#A0A0A8",
                fontFamily: "Inter, sans-serif",
              }}
            >
              iOS App Launch
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#F8F5F0",
              fontFamily: "Fraunces, Georgia, serif",
              marginBottom: 20,
            }}
          >
            One New Thing
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.45,
              color: "#A0A0A8",
              maxWidth: 440,
              fontFamily: "Inter, sans-serif",
              marginBottom: 36,
            }}
          >
            A quiet daily challenge app. Three fresh challenges every morning, easy, medium, hard. Break routine, discover something new.
          </div>

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                padding: "0 28px",
                borderRadius: 12,
                backgroundColor: "#F8F5F0",
                color: "#1A1A1F",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get the app
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#A0A0A8",
                fontFamily: "Inter, sans-serif",
              }}
            >
              www.one-new-thing.com
            </div>
          </div>

          {/* Three bars */}
          <div
            style={{
              display: "flex",
              gap: 6,
              width: 200,
              marginTop: 40,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#A8B89B",
              }}
            />
            <div
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#D4A574",
              }}
            />
            <div
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#C97D5D",
              }}
            />
          </div>
        </div>

        {/* Right side, abstract phone/challenge cards visual */}
        <div
          style={{
            width: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            paddingRight: 56,
          }}
        >
          {/* Phone frame */}
          <div
            style={{
              width: 260,
              height: 520,
              borderRadius: 36,
              backgroundColor: "#252530",
              border: "2px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              padding: 20,
              position: "relative",
              boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Notch */}
            <div
              style={{
                alignSelf: "center",
                width: 80,
                height: 20,
                borderRadius: 10,
                backgroundColor: "#1A1A1F",
                marginBottom: 16,
              }}
            />

            {/* Screen content */}
            <div
              style={{
                flex: 1,
                borderRadius: 24,
                backgroundColor: "#F8F5F0",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {/* Date header */}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "#6B6B70",
                  fontFamily: "Inter, sans-serif",
                  marginBottom: 4,
                }}
              >
                Monday, May 19
              </div>

              {/* Challenge cards */}
              <div
                style={{
                  flex: 1,
                  borderRadius: 16,
                  backgroundColor: "#A8B89B",
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Easy
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "#FFFFFF",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Take a different route to work
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  borderRadius: 16,
                  backgroundColor: "#D4A574",
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Medium
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "#FFFFFF",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Cook a dish you've never made before
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  borderRadius: 16,
                  backgroundColor: "#C97D5D",
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Hard
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: "#FFFFFF",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Start a conversation with a stranger
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 627,
      fonts: [
        {
          name: "Fraunces",
          data: frauncesBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Fraunces",
          data: frauncesSemi,
          style: "normal",
          weight: 600,
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
        {
          name: "Inter",
          data: interSemi,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
