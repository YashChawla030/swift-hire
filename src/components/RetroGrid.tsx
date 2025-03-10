"use client";
import { HeroType } from "portfolioui/types";
import { RetroGrid } from "./ui/retro-grid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RetroGridDemoProps {
  isEditing: boolean;
  heroInfo: HeroType;
  isLoading: boolean;
}

export function RetroGridDemo({
  isEditing,
  heroInfo,
  isLoading,
}: RetroGridDemoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const introParts = heroInfo?.introduction?.split(",") || [""];

  useEffect(() => {
    if (introParts.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % introParts.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [introParts.length]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <h1 className="py-2 md:py-4 pointer-events-none z-10 text-center text-5xl font-bold leading-none tracking-tighter text-foreground bg-clip-text">
        {heroInfo?.message}
      </h1>

      <motion.div
        key={currentIndex} // Ensures re-render for animation
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-3xl py-2 md:py-4 text-foreground px-6"
      >
        {introParts[currentIndex].trim()}
      </motion.div>

      <div className="text-xl py-2 md:py-4 mx-auto max-w-3xl text-center">
        {heroInfo?.description}
      </div>

      <RetroGrid
        isEditing={isEditing}
        heroInfo={heroInfo}
        isLoading={isLoading}
      />
    </div>
  );
}
