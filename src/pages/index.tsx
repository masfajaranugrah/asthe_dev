import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import Testimonial from "@/components/containers/home/Testimonial";
import NextPage from "@/components/containers/home/NextPage";
import Agency from "@/components/containers/home/Agency";
import Modal from "@/components/containers/home/Modal";
import Portfolio from "@/components/containers/home/Portfolio";
import FaqMain from "@/components/containers/home/FaqMain";

const Home = () => {
  return (
    <Layout header={1} footer={5} >
      <Banner />
      <Agency />
      <Modal />
      <Portfolio />
      <Testimonial />
      <NextPage />
      <FaqMain />

    </Layout>
  );
};

export default Home;
