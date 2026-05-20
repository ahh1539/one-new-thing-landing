import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            gap: 3,
            width: 20,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 4,
              borderRadius: 2,
              backgroundColor: "#A8B89B",
            }}
          />
          <div
            style={{
              width: "100%",
              height: 4,
              borderRadius: 2,
              backgroundColor: "#D4A574",
            }}
          />
          <div
            style={{
              width: "100%",
              height: 4,
              borderRadius: 2,
              backgroundColor: "#C97D5D",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
