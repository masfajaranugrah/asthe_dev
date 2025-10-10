import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import modalbg from "public/images/service/services1.jpg";

gsap.registerPlugin(ScrollTrigger);

const Modal = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".modal-bg").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".modal-bg",
          start: "center center",
          end: "+=100%",
          scrub: 0.5,
          pin: false,
        },
      });

      tl.to(".modal-bg", {
        opacity: 0,
        scale: 1,
        y: "50%",
        duration: 2,
      });
    }
  }, []);

  return (
    // Hanya area gambar yang ditampilkan, tanpa fungsi klik
    <div className="image-modal">
      <Image
        src={modalbg}
        alt="Image"
        className="modal-bg"
        priority // Tetap diberi priority untuk scroll yang smooth
      />
    </div>
  );
};

export default Modal;