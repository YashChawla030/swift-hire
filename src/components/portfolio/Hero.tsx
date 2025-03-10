"use client";
import React from "react";

import { usePortfolioStore } from "@/store/usePortfolioStore";

//import { HeroEditableWithAuth } from "portfolioui/job-jackpot";
import { useAppStore } from "@/store/appStore";
//import { HeroHighlight } from "../ui/hero-hightlight";
//import { HeroHighlightDemo } from "../HeroHighlight";
//import { RetroGrid } from "../ui/retro-grid";
import { RetroGridDemo } from "../RetroGrid";
//import { HeroEditableWithAuth } from "portfolioui/job-jackpot";

export const Hero = () => {
  const {
    portfolio: { heroInfo },
    isLoading,
    //saveHeroInfo,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();

  // const getBackgroundColorRGBA = (opacity: number) =>
  //   `rgba(255, 182, 193, ${opacity})`;

  // const getBorderColor = (borderOpacity: number) =>
  //   `hsl(351, 100%, ${borderOpacity}%)`;

  // return (
  //   <HeroEditableWithAuth
  //     isEditing={isEditing}
  //     heroInfo={heroInfo}
  //     saveHeroInfo={saveHeroInfo}
  //     isLoading={isLoading}
  //     backgroundColorFn={getBackgroundColorRGBA}
  //     borderColorFn={getBorderColor}
  //   />
  // );
  return (
    <RetroGridDemo
      isEditing={isEditing}
      heroInfo={heroInfo}
      isLoading={isLoading}
    />
  );
};
