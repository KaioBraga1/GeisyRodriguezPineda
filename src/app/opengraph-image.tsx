import { ImageResponse } from "next/og";

export const alt = "Dra. Geisy Rodriguez Pineda — Medicina de Família e Comunidade";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(120% 120% at 80% -10%, #3a86a3 0%, #1c6a87 45%, #17495e 100%)",
          color: "#faf9f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#f2a07a",
          }}
        >
          <div style={{ width: 48, height: 2, background: "#d75a31" }} />
          Medicina de Família · Atendimento em Saúde Mental
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 56,
              lineHeight: 1.1,
              maxWidth: 960,
              fontWeight: 500,
            }}
          >
            <span>Cada pessoa tem uma história.&nbsp;</span>
            <span style={{ color: "#f2a07a", fontStyle: "italic" }}>
              Cada cuidado deve ser único.
            </span>
          </div>
          <div style={{ fontSize: 30, color: "rgba(250,249,246,0.7)" }}>
            Dra. Geisy Rodriguez Pineda
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(250,249,246,0.55)",
            borderTop: "1px solid rgba(250,249,246,0.15)",
            paddingTop: 24,
          }}
        >
          <span>CRM-SP 240872 · RQE 138750</span>
          <span>Atendimento online · PT · ES</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
