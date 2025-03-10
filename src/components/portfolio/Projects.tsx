import React from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useAppStore } from "@/store/appStore";
import { ProjectsTimelineWithAuth } from "portfolioui/job-jackpot";

export const Projects = () => {
  const {
    saveProjectAndQualificationInfo,
    portfolio: { projectsInfo, qualificationInfo },
    isLoading,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();
  return (
    <ProjectsTimelineWithAuth
      isEditing={isEditing}
      saveProjectAndQualificationInfo={saveProjectAndQualificationInfo}
      projectsInfo={projectsInfo}
      qualificationInfo={qualificationInfo}
      isLoading={isLoading}
      className="bg-white dark:bg-black"
      circleClassName="bg-green-400 dark:bg-gren-400"
      lineClassName="from-green-700 via-green-600"
    />
  );
};
