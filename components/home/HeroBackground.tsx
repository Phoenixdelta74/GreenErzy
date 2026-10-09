"use client";

import React, { useEffect, useRef } from "react";

// Slow animated loop behind the hero: small particles (materials) travel
// around a ring, drift off it now and then, and rejoin it. Shows "nothing is
// wasted, everything comes back around". Pauses for reduced-motion users and
// when the hero is off screen.

type Particle = {
  angle: number;
  speed: number;
  ring: number; // 0..1, which lane of the ring the particle travels on
  drift: number; // current outward drift in px
  driftTarget: number;
  size: number;
  color: string;
};

const COLORS = ["0, 208, 132", "6, 182, 212", "251, 191, 36"]; // emerald, cyan, gold

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let visible = true;
    let rotation = 0;

    const particles: Particle[] = Array.from({ length: 220 }, () => ({
      angle: Math.random() * Math.PI * 2,
      speed: 0.0008 + Math.random() * 0.0016,
      ring: Math.random(),
      drift: 0,
      driftTarget: 0,
      size: 1 + Math.random() * 2.2,
      color: COLORS[Math.random() < 0.6 ? 0 : Math.random() < 0.75 ? 1 : 2],
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width > 1024 ? width * 0.68 : width * 0.5;
      const cy = height * 0.5;
      const radius = width > 1024 ? Math.min(width * 0.3, height * 0.62) : Math.min(width * 0.55, height * 0.42);

      // Faint guide rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.setLineDash([2, 10]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(0, 208, 132, 0.28)";
      ctx.beginPath();
      ctx.ellipse(0, 0, radius, radius * 0.62, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle = "rgba(6, 182, 212, 0.16)";
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 0.78, radius * 0.48, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      for (const p of particles) {
        const lane = 0.78 + p.ring * 0.3;
        const rx = radius * lane + p.drift;
        const ry = radius * 0.62 * lane + p.drift * 0.62;
        const a = p.angle + rotation;
        const x = cx + Math.cos(a) * rx;
        const y = cy + Math.sin(a) * ry;
        const glow = 0.35 + 0.35 * Math.sin(p.angle * 3);

        // Short tail behind each particle so the direction of travel reads.
        for (let t = 3; t >= 1; t--) {
          const ta = a - p.speed * t * 6;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${p.color}, ${(0.12 + glow * 0.2) / t})`;
          ctx.arc(cx + Math.cos(ta) * rx, cy + Math.sin(ta) * ry, p.size * (1 - t * 0.15), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.shadowColor = `rgba(${p.color}, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.fillStyle = `rgba(${p.color}, ${0.45 + glow * 0.5})`;
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const step = () => {
      if (visible) {
        rotation += 0.0006;
        for (const p of particles) {
          p.angle += p.speed;
          // Occasionally drift off the loop, then come back to it.
          if (Math.random() < 0.002) p.driftTarget = (Math.random() - 0.3) * 60;
          if (Math.abs(p.drift - p.driftTarget) < 0.5) p.driftTarget = 0;
          p.drift += (p.driftTarget - p.drift) * 0.02;
        }
        draw();
      }
      frame = requestAnimationFrame(step);
    };

    resize();
    draw();
    if (!reduceMotion) frame = requestAnimationFrame(step);

    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener("resize", onResize);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 lg:opacity-100"
    />
  );
}
