import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "One New Thing — A quiet daily challenge journal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const fraunces = await fetch(
    new URL(
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&display=swap"
    )
  ).then((res) => res.text());

  const fontUrlMatch = fraunces.match(/url\(([^)]+)\)/);
  const fontUrl = fontUrlMatch ? fontUrlMatch[1].replace(/"/g, "") : null;

  const fontData = fontUrl
    ? await fetch(fontUrl).then((res) => res.arrayBuffer())
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F8F5F0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid rgba(26, 26, 31, 0.10)",
            borderRadius: "18px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#6B6B70",
              fontFamily: "system-ui",
            }}
          >
            Daily Challenges
          </div>

          <div
            style={{
              fontSize: "72px",
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: "-2px",
              color: "#1A1A1F",
              fontFamily: fontData ? "Fraunces" : "Georgia, serif",
            }}
          >
            One New Thing
          </div>

          <div
            style={{
              fontSize: "28px",
              fontStyle: "italic",
              lineHeight: 1.4,
              color: "#6B6B70",
              maxWidth: "600px",
              fontFamily: fontData ? "Fraunces" : "Georgia, serif",
            }}
          >
            A quiet daily challenge for people whose weeks have started to rhyme
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            right: "80px",
            display: "flex",
            gap: "8px",
          }}
        >
          <div
            style={{
              height: "6px",
              flex: 1,
              background: "#A8B89B",
              borderRadius: "3px",
            }}
          />
          <div
            style={{
              height: "6px",
              flex: 1,
              background: "#D4A574",
              borderRadius: "3px",
            }}
          />
          <div
            style={{
              height: "6px",
              flex: 1,
              background: "#C97D5D",
              borderRadius: "3px",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "Fraunces",
              data: fontData,
              style: "normal",
              weight: 500,
            },
          ]
        : undefined,
    }
  );
}
