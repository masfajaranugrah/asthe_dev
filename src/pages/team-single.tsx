import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMain from "@/components/containers/Team/TeamDetailsMain";
import CtaTwo from "@/components/containers/service/CtaTwo";

const TeamDetails = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="SANA P. LESH"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <TeamDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default TeamDetails;
