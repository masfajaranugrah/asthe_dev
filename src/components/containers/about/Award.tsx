import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const Award = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image 
              src="/images/logo3.png" 
              alt="Logo" 
              width={500} 
              height={100} 
              className="unset fade-left" 
            />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
               FIND OUT ABOUT US
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Company  <span>Overview</span>
              </h2>
              <div className="paragraph">
                <p>
                  Astheron Technologies is an innovative company focused on 
                developing Artificial Intelligence and intelligent software for 
                various future needs. With expertise in AI technology, 
                Astheron is committed to delivering solutions that not only support 
                business progress but also positively impact society at large.Supported 
                by a visionary team of technology enthusiasts, Astheron continues to foster strategic collaborations with top partners to create an inclusive, efficient, and sustainable technology ecosystem. Astheron believes that artificial intelligence and digital innovation will be key to building a better future for all.
                </p>
              </div>
              {/* <div className="award__content-meta">
                <div className="single">
                  <h4>2018</h4>
                  <h4>Awwwards</h4>
                  <p>Website of the day</p>
                </div>
                <div className="single">
                  <h4>2020</h4>
                  <h4>Awwwards</h4>
                  <p>National design contest</p>
                </div>
                <div className="single">
                  <h4>2022</h4>
                  <h4>Awwwards</h4>
                  <p>Apps of the day</p>
                </div>
              </div> */}
              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default Award;
