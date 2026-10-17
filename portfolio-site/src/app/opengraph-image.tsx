import { ImageResponse } from "next/og";
import { siteSettings } from "@/data/site";

export const alt = `${siteSettings.name} — ${siteSettings.headline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #050810 0%, #0b1020 60%, #15102a 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle decorative grid/nebula dots */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          }}
        />

        {/* Top Header Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#10b981",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#93c5fd",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {siteSettings.badgePill} • Punjab Engineering College
          </span>
        </div>

        {/* Center Title & Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #ffffff 40%, #93c5fd 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {siteSettings.name}
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#67e8f9",
              margin: 0,
              fontFamily: "monospace",
            }}
          >
            {siteSettings.headline}
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.5,
            }}
          >
            {siteSettings.biography.short}
          </p>
        </div>

        {/* Bottom Footer Telemetry */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#64748b", fontFamily: "monospace" }}>
            {siteSettings.location.city}, {siteSettings.location.country} • {siteSettings.location.coordinates.lat},{" "}
            {siteSettings.location.coordinates.lng}
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#60a5fa",
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            vaibhavchhabra.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
