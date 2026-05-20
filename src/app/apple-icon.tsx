import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F8F5F0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            width: 100,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 18,
              borderRadius: 9,
              backgroundColor: "#A8B89B",
            }}
          />
          <div
            style={{
              width: "100%",
              height: 18,
              borderRadius: 9,
              backgroundColor: "#D4A574",
            }}
          />
          <div
            style={{
              width: "100%",
              height: 18,
              borderRadius: 9,
              backgroundColor: "#C97D5D",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
