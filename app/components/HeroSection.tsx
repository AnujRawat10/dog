"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

interface HeroSectionProps {
  onBgColorChange: (color: string) => void;
}

export default function HeroSection({ onBgColorChange }: HeroSectionProps) {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const heroBackgrounds = useMemo(
    () => [
      {
        bgColor: "#e0ce8a", // Warm golden yellow
        image: "/dogs/d1.avif",
        alt: "Black and white cat on golden background",
        textColor: "text-gray-800",
        heading: "furvourite",
      },
      {
        bgColor: "#9acbda", // Soft blue
        image: "/dogs/d2.avif",
        alt: "Playful jumping dog",
        textColor: "text-gray-800",
        heading: "meowelous",
      },
      {
        bgColor: "#e3b3c3", // Soft pink
        image: "/dogs/d3.avif",
        alt: "Dog in sweater",
        textColor: "text-gray-800",
        heading: "purrfect",
      },
      {
        bgColor: "#98cbbc", // Mint green
        image: "/dogs/d4.avif",
        alt: "Gray and white cat on mint background",
        textColor: "text-gray-800",
        heading: "pawsome",
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Change background exactly when text transition starts (no delay)
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000); // Perfect 5-second timing to match 25% intervals in 20s animation
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  useEffect(() => {
    onBgColorChange(heroBackgrounds[currentBgIndex].bgColor);
  }, [currentBgIndex, onBgColorChange, heroBackgrounds]);

  const currentBg = heroBackgrounds[currentBgIndex];

  return (
    <section
      className='relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-2000 ease-in-out'
      style={{ backgroundColor: currentBg.bgColor }}
    >
      {/* Gradient Overlay for better text readability */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20 z-20'></div>

      {/* Main Content */}
      <div className='relative z-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='flex items-center justify-between min-h-screen gap-12'>
          {/* Left side - Text Content */}
          <div className='w-1/2 max-w-2xl text-center lg:text-left pr-4'>
            {/* Main Heading with Vertical Text Rotator */}
            <div
              className={`text-4xl md:text-5xl lg:text-6xl font-bold lowercase mb-8 leading-none transition-colors duration-1000 ease-in-out ${currentBg.textColor}`}
            >
              <div
                className='overflow-hidden relative'
                style={{ height: "1.5em", width: "120%" }}
              >
                <div
                  className='absolute'
                  style={{
                    animation: "infiniteScroll 20s ease-in-out infinite",
                    width: "120%",
                  }}
                >
                  {/* Render headings twice for seamless loop */}
                  {[...heroBackgrounds, ...heroBackgrounds].map((bg, index) => (
                    <div
                      key={index}
                      style={{
                        height: "1.5em",
                        display: "flex",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        overflow: "visible",
                        textOverflow: "clip",
                        lineHeight: "1.2",
                        fontSize: "inherit",
                      }}
                    >
                      {bg.heading}
                    </div>
                  ))}
                </div>
              </div>
              <style jsx>{`
                @keyframes infiniteScroll {
                  0% {
                    transform: translateY(0);
                  }
                  20% {
                    transform: translateY(0);
                  }
                  25% {
                    transform: translateY(-1.5em);
                  }
                  45% {
                    transform: translateY(-1.5em);
                  }
                  50% {
                    transform: translateY(-3em);
                  }
                  70% {
                    transform: translateY(-3em);
                  }
                  75% {
                    transform: translateY(-4.5em);
                  }
                  95% {
                    transform: translateY(-4.5em);
                  }
                  100% {
                    transform: translateY(-6em);
                  }
                }
              `}</style>
            </div>

            {/* Subtitle */}
            <h2
              className={`text-xl md:text-2xl lg:text-3xl font-light lowercase mb-6 leading-tight opacity-80 transition-colors duration-1000 ease-in-out min-h-[1.2em] ${currentBg.textColor}`}
            >
              place for your pet
            </h2>

            {/* Description */}
            <p
              className={`text-base md:text-lg mb-6 leading-relaxed opacity-70 transition-colors duration-1000 ease-in-out min-h-[3em] ${currentBg.textColor}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse
              varius enim in eros elit tristique.
            </p>

            {/* CTA Button */}
            <button className='bg-white/90 text-gray-800 hover:bg-white hover:shadow-xl px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 lowercase backdrop-blur-sm border border-white/30'>
              Book now
            </button>
          </div>

          {/* Right side - Circular Image Carousel */}
          <div className='w-1/2 flex justify-end items-center relative'>
            {/* Position carousel to extend to actual screen edge */}
            <div
              className='fixed right-0 top-1/2 transform -translate-y-1/2 w-80 h-96 flex justify-center items-center'
              style={{ marginRight: "-140px" }}
            >
              {heroBackgrounds.map((bg, index) => {
                // Calculate angle with smooth infinite rotation - main image on LEFT of circle
                const baseAngle = index * 90; // 90 degrees apart
                const rotationOffset = currentBgIndex * 90; // Current rotation
                const angle = baseAngle - rotationOffset + 180; // +180 to put main image on left

                const radius = 140; // Distance from center
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                // Normalize angle to 0-360 range for consistent positioning
                const normalizedAngle = ((angle % 360) + 360) % 360;

                // Determine visibility and scale based on position
                let visibility, scale, zIndex;

                // Main visible image (left side of circle, 180 degrees ± 45 degrees)
                if (normalizedAngle >= 135 && normalizedAngle <= 225) {
                  visibility = 1;
                  scale = 2.8; // Even bigger main image
                  zIndex = 30;
                }
                // Partially visible images (top and bottom of circle)
                else if (
                  (normalizedAngle >= 45 && normalizedAngle <= 135) ||
                  (normalizedAngle >= 225 && normalizedAngle <= 315)
                ) {
                  visibility = 0.4; // Less visible
                  scale = 0.8;
                  zIndex = 20;
                }
                // Hidden image (right side - off actual screen)
                else {
                  visibility = 0;
                  scale = 0.6;
                  zIndex = 10;
                }

                return (
                  <div
                    key={index}
                    className='absolute rounded-full backdrop-blur-sm bg-white/20 shadow-xl overflow-hidden'
                    style={{
                      width: `${120 * scale}px`,
                      height: `${120 * scale}px`,
                      transform: `translate(${x}px, ${y}px)`,
                      zIndex: zIndex,
                      opacity: visibility,
                      transition:
                        "all 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smoother easing
                      position: "relative",
                    }}
                  >
                    <Image
                      src={bg.image}
                      alt={bg.alt}
                      fill
                      className='object-cover rounded-full'
                      style={{
                        transition:
                          "all 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smoother easing
                      }}
                    />
                  </div>
                );
              })}

              {/* Center indicator */}
              <div className='absolute w-3 h-3 bg-white/20 rounded-full backdrop-blur-sm z-40 pointer-events-none'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
