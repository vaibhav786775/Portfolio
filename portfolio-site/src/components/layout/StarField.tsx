"use client";

import { useEffect, useRef, useState } from "react";
import { siteSettings } from "@/data/site";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
  layer: number; // 0 = deep, 1 = mid, 2 = near
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

const STAR_PALETTES = [
  "rgba(224, 242, 254, ", // ice cyan-white
  "rgba(199, 210, 254, ", // soft lavender
  "rgba(147, 197, 253, ", // electric sky
  "rgba(255, 255, 255, ", // crisp white
];

/**
 * Premium canvas starfield with 3 distinct depth layers,
 * slow natural parallax drift, distant atmospheric celestial bodies,
 * orbital arcs, and occasional shooting stars.
 *
 * Strictly respects prefers-reduced-motion and document visibility.
 */
export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const shootingStarRef = useRef<ShootingStar>({
    x: 0,
    y: 0,
    length: 80,
    speed: 7,
    angle: Math.PI / 4,
    opacity: 0,
    active: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const initStars = (width: number, height: number) => {
      const density = siteSettings.animationPreferences.starfieldParticleDensity || 6000;
      const count = Math.min(240, Math.floor((width * height) / density));

      starsRef.current = Array.from({ length: count }, () => {
        const roll = Math.random();
        const layer = roll < 0.45 ? 0 : roll < 0.8 ? 1 : 2;
        const color = STAR_PALETTES[Math.floor(Math.random() * STAR_PALETTES.length)];

        let radius: number;
        let baseOpacity: number;
        let vx: number;
        let vy: number;
        let twinkleSpeed: number;

        if (layer === 0) {
          radius = Math.random() * 0.45 + 0.35;
          baseOpacity = Math.random() * 0.25 + 0.15;
          vx = 0.015 + Math.random() * 0.01;
          vy = -(0.006 + Math.random() * 0.006);
          twinkleSpeed = 0.008 + Math.random() * 0.008;
        } else if (layer === 1) {
          radius = Math.random() * 0.6 + 0.75;
          baseOpacity = Math.random() * 0.35 + 0.3;
          vx = 0.035 + Math.random() * 0.015;
          vy = -(0.014 + Math.random() * 0.01);
          twinkleSpeed = 0.015 + Math.random() * 0.015;
        } else {
          radius = Math.random() * 0.7 + 1.25;
          baseOpacity = Math.random() * 0.35 + 0.55;
          vx = 0.065 + Math.random() * 0.025;
          vy = -(0.024 + Math.random() * 0.015);
          twinkleSpeed = 0.025 + Math.random() * 0.02;
        }

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          baseOpacity,
          twinkleSpeed,
          twinkleOffset: Math.random() * Math.PI * 2,
          color,
          layer,
          vx,
          vy,
        };
      });
    };

    const prefersReduced =
      siteSettings.animationPreferences.prefersReducedMotionRespect &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initStars(width, height);

    let t = 0;
    let isVisible = true;

    const triggerShootingStar = () => {
      if (prefersReduced || !isVisible) return;
      const ss = shootingStarRef.current;
      if (!ss.active && Math.random() < 0.0025) {
        ss.active = true;
        ss.x = Math.random() * (width * 0.7);
        ss.y = Math.random() * (height * 0.35);
        ss.length = Math.random() * 70 + 60;
        ss.speed = Math.random() * 4 + 6;
        ss.angle = Math.PI / 5 + (Math.random() * 0.2 - 0.1);
        ss.opacity = 0.75;
      }
    };

    const drawDistantPlanet = (
      px: number,
      py: number,
      radius: number,
      colorStart: string,
      colorEnd: string,
      ring: boolean = false
    ) => {
      ctx.save();

      const glow = ctx.createRadialGradient(px, py, radius * 0.8, px, py, radius * 1.8);
      glow.addColorStop(0, "rgba(59, 130, 246, 0.12)");
      glow.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(px, py, radius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      const gradient = ctx.createRadialGradient(
        px - radius * 0.35,
        py - radius * 0.35,
        radius * 0.1,
        px,
        py,
        radius
      );
      gradient.addColorStop(0, colorStart);
      gradient.addColorStop(1, colorEnd);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();

      if (ring) {
        ctx.beginPath();
        ctx.ellipse(px, py, radius * 2.0, radius * 0.45, -Math.PI / 8, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(147, 197, 253, 0.15)";
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(px, py, radius * 2.3, radius * 0.52, -Math.PI / 8, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(199, 210, 254, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
    };

    const draw = () => {
      if (!ctx || !isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // 1. Orbital guide paths
      ctx.save();
      ctx.setLineDash([4, 18]);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.arc(width * 0.85, height * 0.22, Math.min(width, height) * 0.44, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width * 0.12, height * 0.78, Math.min(width, height) * 0.36, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.04)";
      ctx.stroke();
      ctx.restore();

      // 2. Distant atmospheric celestial bodies
      drawDistantPlanet(
        width * 0.88,
        height * 0.16,
        Math.min(36, width * 0.035),
        "rgba(99, 102, 241, 0.3)",
        "rgba(15, 23, 42, 0.88)",
        true
      );

      drawDistantPlanet(
        width * 0.08,
        height * 0.74,
        Math.min(18, width * 0.018),
        "rgba(56, 189, 248, 0.22)",
        "rgba(15, 23, 42, 0.92)",
        false
      );

      // 3. Render Stars across 3 Depth Layers with Slow Natural Drift
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReduced) {
          star.x += star.vx;
          star.y += star.vy;

          if (star.x > width + star.radius) {
            star.x = -star.radius;
            star.y = Math.random() * height;
          } else if (star.x < -star.radius) {
            star.x = width + star.radius;
            star.y = Math.random() * height;
          }

          if (star.y < -star.radius) {
            star.y = height + star.radius;
            star.x = Math.random() * width;
          } else if (star.y > height + star.radius) {
            star.y = -star.radius;
            star.x = Math.random() * width;
          }
        }

        const twinkle = prefersReduced
          ? star.baseOpacity
          : star.baseOpacity * (0.65 + 0.35 * Math.sin(t * star.twinkleSpeed * 60 + star.twinkleOffset));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.max(0.05, Math.min(1, twinkle))})`;
        ctx.fill();

        if (star.layer === 2 && star.radius > 1.4 && !prefersReduced) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${twinkle * 0.18})`;
          ctx.fill();
        }
      }

      // 4. Subtle shooting star
      if (!prefersReduced) {
        triggerShootingStar();
        const ss = shootingStarRef.current;
        if (ss.active) {
          const tailX = ss.x - Math.cos(ss.angle) * ss.length;
          const tailY = ss.y - Math.sin(ss.angle) * ss.length;

          const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
          grad.addColorStop(0, "rgba(96, 165, 250, 0)");
          grad.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(ss.x, ss.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.4;
          ctx.stroke();
          ctx.restore();

          ss.x += Math.cos(ss.angle) * ss.speed;
          ss.y += Math.sin(ss.angle) * ss.speed;
          ss.opacity -= 0.014;

          if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
            ss.active = false;
          }
        }
      }

      if (!prefersReduced) {
        t += 0.016;
        animFrameRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars(width, height);
      if (prefersReduced) draw();
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReduced) {
        animFrameRef.current = requestAnimationFrame(draw);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [mounted]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000"
      style={{ opacity: mounted ? 0.95 : 0 }}
    />
  );
}
