"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export const MyHub = () => {
  return (
    <section className="py-16">
      <div className="container">
        <article className="mb-6 flex flex-col items-center">
          <Image
            src={logo}
            alt="alien coding something"
            className="mb-10 size-[80px] rounded-lg shadow-lg shadow-slate-600"
          />
          <aside className="inline-flex items-center gap-2 px-4 py-2 border-l-2 rounded-lg border-cyan-100">
            <div className="size-1.5 rounded-full bg-green-500"></div>
            <div className="mb-2 text-sm font-mono">ezequielMadrid</div>
          </aside>
          <h1 className="mb-4 mt-4 font-mono">Let's Work Together!</h1>
          <p className="text-center text-xs font-bold">
            I've a solid foundation in backend development, along with extensive
            experience in administrative and human resources roles. I've worked
            in companies with industry-leading clients, which has strengthened
            my communication skills and problem-solving abilities under tight
            deadlines. I've built work teams rooted in mutual respect, and I'm
            eager to take on new challenges where I can continue to grow both
            personally and professionally.
          </p>
        </article>
        <article className="mx-10 text-center gap-8">
          <p className="mb-4 text-xs flex items-center justify-center gap-2">
            <FaWhatsapp className="hover:text-4xl text-2xl text-green-500" />
            <a
              href="https://wa.me/5491234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-100"
            >
              +54 9 299* *** ***
            </a>
          </p>
          <p className="mb-4 text-xs flex items-center justify-center gap-2">
            <FaEnvelope className="hover:text-2xl text-xl text-cyan-200" />
            <a href="mailto:ezequiel@example.com" className="text-cyan-100">
              ***@gmail.com
            </a>
          </p>
        </article>
      </div>
    </section>
  );
};
