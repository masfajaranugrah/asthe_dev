import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  return (
    <>
      <header className="header">
<div
  className={`primary-navbar cmn-nav ${scrolled ? "glass-nav" : "bg-transparent"}`}
>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar py-4 d-flex justify-content-between align-items-center">
                  {/* Logo */}
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <h3 className="text-white m-0">AD</h3>
                    </Link>
                  </div>

                  {/* Menu */}
               <div className="navbar__menu">
  <ul className="d-flex gap-4 m-0 list-unstyled">
    <li className="navbar__item text-bold"><Link href="/"  style={{ fontSize: "20px", fontWeight: "bold" }}>Home</Link></li>
    <li className="navbar__item"><Link href="/about-us"  style={{ fontSize: "20px", fontWeight: "bold" }}>About Us</Link></li>
    <li className="navbar__item"><Link href="/our-services"  style={{ fontSize: "20px", fontWeight: "bold" }}>Services</Link></li>
    <li className="navbar__item"><Link href="/portfolio"  style={{ fontSize: "20px", fontWeight: "bold" }}>Projects</Link></li>
    <li className="navbar__item"><Link href="/our-teams"  style={{ fontSize: "20px", fontWeight: "bold" }}>Team</Link></li>
    <li className="navbar__item"><Link href="/contact-us"  style={{ fontSize: "20px", fontWeight: "bold" }}>Contact</Link></li>
  </ul>
</div>


                  {/* Right Options */}
                  <div className="navbar__options d-flex align-items-center gap-3">
                    <div className="d-none d-sm-flex">
                      <Link href="/contact-us" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none text-white"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas menu */}
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;
