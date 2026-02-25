import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { SquareMousePointer, X } from "lucide-react";
import { socials } from "../constants/index.js";

const sections = [
  { id: "hub", label: "hub" },
  { id: "services", label: "services" },
  { id: "projects", label: "all my apps" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2",
      );
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-slate-900 text-slate-100 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-4xl gap-y-2 md:text-5xl lg:text-7xl">
          {sections.map((section, index) => (
            <div key={section.id} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                className="transition-all duration-300 select-none cursor-pointer hover:text-white"
                to={section.id}
                smooth
                offset={0}
                duration={1200}
                onClick={toggleMenu}
              >
                {section.label}
              </Link>
            </div>
          ))}
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider font-bold text-slate-400">E-mail</p>
            <p className="tracking-widest lowercase">eze*****@gmail.com</p>
          </div>
          <div className="font-light">
            <p className="mb-2 tracking-wider font-bold text-slate-400">
              my latest apps and personal contact
            </p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm hover:text-lg leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                  target="_blank"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* burgerMenu / closeIcon */}
      <div
        className="w-12 h-12 md:w-18 md:h-18 top-4 right-10 z-60 fixed flex items-center justify-center rounded-full cursor-pointer border-2 border-cyan-900 bg-slate-950 hover:bg-cyan-900"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-slate-400" />
        ) : (
          <SquareMousePointer className="w-8 h-8 text-slate-300" />
        )}
      </div>
    </>
  );
};

export default Navbar;
