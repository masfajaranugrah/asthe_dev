import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const logoSrc= logo
  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/">
                 <Image
                                       src={logoSrc}
                                       alt="Logo"
                                       priority
                                       width={40}
                                       height={40}
                                       className="img-fluid"
                                     />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
               
                <li className="navbar__item nav-fade">
                  <Link href="/" style={{ fontSize: "20px", fontWeight: "bold" }}>Home</Link>
                </li>
                 <li className="navbar__item nav-fade">
                  <Link href="about-us" style={{ fontSize: "20px", fontWeight: "bold" }}>About Us</Link>
                </li>
                 <li className="navbar__item nav-fade">
                  <Link href="/our-services" style={{ fontSize: "20px", fontWeight: "bold" }}>Services</Link>
                </li>
                 <li className="navbar__item nav-fade">
                  <Link href="/portfolio" style={{ fontSize: "20px", fontWeight: "bold" }}>Projects</Link>
                </li>
                 <li className="navbar__item nav-fade">
                  <Link href="/our-teams" style={{ fontSize: "20px", fontWeight: "bold" }}>Team</Link>
                </li>
                 <li className="navbar__item nav-fade">
                  <Link href="/contact-us" style={{ fontSize: "20px", fontWeight: "bold" }}>Contact</Link>
                </li>
                  
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column gap-4">
                 <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link href="contact-us" className="btn btn--secondary">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.pinterest.com/"
              target="_blank"
              aria-label="share us on pinterest"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
          </div>
     
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
