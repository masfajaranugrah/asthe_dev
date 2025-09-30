import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Award from "@/components/containers/about/Award";
import OurMission from "@/components/containers/about/OurMission";
import WorkStepsProject from "@/components/containers/about/WorkStepsProject";
import OurAchievement from "@/components/containers/about/OurAchievement";

const AboutUs = () => {
  return (
    <Layout  >
      <CmnBanner title="About Us" navigation="Abour Us" />
      <Award />
      <OurMission />
      <WorkStepsProject />
      <OurAchievement />
    </Layout>
  );
};

export default AboutUs;
