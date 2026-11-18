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
          background:
            "radial-gradient(120% 120% at 50% 0%, #3a86a3 0%, #17495e 100%)",
          color: "#f2a07a",
          fontSize: 118,
          fontFamily: "Georgia, serif",
          fontWeight: 500,
        }}
      >
        G
      </div>
    ),
    { ...size },
  );
}
