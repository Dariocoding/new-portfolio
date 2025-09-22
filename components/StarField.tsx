"use client";

import { useEffect, useRef } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  initialDelay: number;
}

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const stars: Star[] = [];
      const starCount = 80; // Número elegante de estrellas

      for (let i = 0; i < starCount; i++) {
        stars.push({
          id: i,
          x: Math.random() * 100, // Posición X en porcentaje
          y: Math.random() * 100, // Posición Y en porcentaje
          size: Math.random() * 3 + 1, // Tamaño entre 1px y 4px
          opacity: Math.random() * 0.8 + 0.2, // Opacidad entre 0.2 y 1
          twinkleSpeed: Math.random() * 3 + 2, // Velocidad de parpadeo entre 2s y 5s
          initialDelay: Math.random() * 5, // Retraso inicial aleatorio
        });
      }

      starsRef.current = stars;
    };

    generateStars();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {starsRef.current.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.twinkleSpeed}s`,
            animationDelay: `${star.initialDelay}s`,
          }}
        />
      ))}
      
      {/* Estrellas especiales más grandes y brillantes */}
      <div
        className="absolute star-glow"
        style={{
          left: "15%",
          top: "20%",
          width: "6px",
          height: "6px",
        }}
      />
      <div
        className="absolute star-glow"
        style={{
          left: "85%",
          top: "15%",
          width: "5px",
          height: "5px",
        }}
      />
      <div
        className="absolute star-glow"
        style={{
          left: "70%",
          top: "80%",
          width: "4px",
          height: "4px",
        }}
      />
      <div
        className="absolute star-glow"
        style={{
          left: "25%",
          top: "75%",
          width: "5px",
          height: "5px",
        }}
      />
      <div
        className="absolute star-glow"
        style={{
          left: "90%",
          top: "60%",
          width: "3px",
          height: "3px",
        }}
      />
    </div>
  );
};

export default StarField;
