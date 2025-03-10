"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-hightlight";
import { HeroType } from "portfolioui/types";

interface HeroHighlightDemoProps {
  isEditing: boolean;
  heroInfo: HeroType;
  isLoading: boolean;
}

export function HeroHighlightDemo({
  isEditing,
  heroInfo,
}: HeroHighlightDemoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Split introduction into parts based on commas
  const introParts = heroInfo?.introduction?.split(",") ?? [];

  useEffect(() => {
    if (introParts.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % introParts.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [introParts.length]);

  return (
    <HeroHighlight>
      <motion.h1 className=" py-2 md:py-4 text-2xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
        {/* Static Message */}
        {heroInfo?.message}
      </motion.h1>

      {/* Animated Introduction */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mx-auto w-fit"
      >
        <Highlight className="text-2xl py-2 md:py-4 text-black dark:text-white px-6">
          {introParts.length > 1
            ? introParts[currentIndex].trim()
            : heroInfo?.introduction}
        </Highlight>
      </motion.div>

      {/* Static Description */}
      <div className="text-xl py-2 md:py-4 mx-auto max-w-3xl text-center">
        {heroInfo?.description}
      </div>

      {isEditing}
    </HeroHighlight>
  );
}
