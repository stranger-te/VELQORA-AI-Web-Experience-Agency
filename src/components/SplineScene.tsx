"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Eye, Zap, Touchpad } from "lucide-react";

interface SplineSceneProps {
  scene?: string;
  className?: string;
  onLoad?: (splineApp: any) => void;
}

const DEFAULT_SCENE = "https://prod.spline.design/v-OLT2eBEaVFXs7O/scene.splinecode";

// Fallback Interactive Canvas 3D Quantum Mesh
function InteractiveParticleCore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string;
    }> = [];

    const colors = ["#7C3AED", "#A78BFA", "#06B6D4", "#38BDF8", "#C084FC"];
    const numParticles = 85;

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 140 + Math.random() * 45;

      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotY = (x / width) * Math.PI * 0.8;
      targetRotX = -(y / height) * Math.PI * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY + 0.005) * 0.05;

      const cx = width / 2;
      const cy = height / 2;
      const fov = 360;

      const gradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, 200);
      gradient.addColorStop(0, "rgba(124, 58, 237, 0.28)");
      gradient.addColorStop(0.5, "rgba(167, 139, 250, 0.12)");
      gradient.addColorStop(1, "rgba(6, 182, 212, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, 200, 0, Math.PI * 2);
      ctx.fill();

      const projected = particles.map((p) => {
        let x1 = p.x * Math.cos(rotY) - p.z * Math.sin(rotY);
        let z1 = p.z * Math.cos(rotY) + p.x * Math.sin(rotY);
        let y1 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = z1 * Math.cos(rotX) + p.y * Math.sin(rotX);

        const scale = fov / (fov + z2 + 250);
        const px = x1 * scale + cx;
        const py = y1 * scale + cy;

        return { px, py, scale, z: z2, color: p.color, size: p.size * scale };
      });

      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const alpha = (1 - dist / 85) * 0.25 * (projected[i].scale * 0.8);
            ctx.strokeStyle = `rgba(165, 180, 252, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      projected.sort((a, b) => b.z - a.z);
      projected.forEach((p) => {
        if (p.scale > 0) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, Math.max(1, p.size), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.min(1, Math.max(0.2, (p.scale - 0.3) * 1.5));
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.px, p.py, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.15 * p.scale;
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] text-indigo-300 font-mono pointer-events-none">
        <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" />
        Quantum Neural 3D Mesh
      </div>
    </div>
  );
}

export function SplineScene({
  scene = DEFAULT_SCENE,
  className = "",
  onLoad,
}: SplineSceneProps) {
  const [viewerLoaded, setViewerLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const targetScene = scene || DEFAULT_SCENE;

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Mobile check to prevent heavy WebGL scripts & battery drain on phones
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    // If mobile, don't load heavy Spline script
    if (mediaQuery.matches) {
      setUseFallback(true);
      return;
    }

    if (customElements && customElements.get("spline-viewer")) {
      setViewerLoaded(true);
      return;
    }

    const scriptId = "spline-viewer-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js";
      script.async = true;
      script.onload = () => {
        if (customElements && customElements.whenDefined) {
          customElements.whenDefined("spline-viewer").then(() => {
            setViewerLoaded(true);
          });
        } else {
          setViewerLoaded(true);
        }
      };
      script.onerror = () => setUseFallback(true);
      document.head.appendChild(script);
    } else {
      if (customElements && customElements.whenDefined) {
        customElements.whenDefined("spline-viewer").then(() => {
          setViewerLoaded(true);
        });
      } else {
        setViewerLoaded(true);
      }
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className={`relative w-full h-full select-none overflow-hidden rounded-3xl ${className}`}>
      {/* Heavy WebGL rendered on desktop; lightweight quantum canvas on mobile to prevent scroll hijacking */}
      {!useFallback && !isMobile && viewerLoaded ? (
        <div className="relative w-full h-full">
          {/* @ts-ignore */}
          <spline-viewer
            url={targetScene}
            loading-anim-type="spinner-small-light"
            style={{ width: "100%", height: "100%", outline: "none", border: "none" }}
          />
        </div>
      ) : (
        <InteractiveParticleCore />
      )}

      {/* Floating Toggle Controls Overlay */}
      {!isMobile && (
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => setUseFallback(!useFallback)}
            className="p-2 rounded-xl bg-black/60 hover:bg-white/10 backdrop-blur-md border border-white/10 text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5 cursor-pointer"
            title="Toggle 3D Scene Mode"
          >
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[10px] font-medium hidden sm:inline">
              {useFallback ? "Switch to Spline 3D" : "Switch to Quantum Mesh"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default SplineScene;
