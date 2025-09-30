import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/service/ServiceMain";
import Modal from "@/components/containers/service/Modal";
import UxProcess from "@/components/containers/service/UxProcess";
import Testimonial from "@/components/containers/home/Testimonial";
import CtaTwo from "@/components/containers/service/CtaTwo";

const OurServices = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <Modal />
      <UxProcess/>
      <Testimonial />
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
