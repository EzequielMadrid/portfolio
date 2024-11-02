"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <article className="flex flex-col items-center">
          <Image
            src={logo}
            alt="alien coding something"
            className="mb-8 size-[80px] rounded-lg shadow-lg shadow-slate-600"
          />
          <aside className="inline-flex items-center gap-2 px-4 py-2 border-l-2 rounded-lg border-cyan-100">
            <div className="size-1.5 rounded-full bg-green-500"></div>
            <div className="mb-2 text-sm font-mono">ezequielMadrid</div>
          </aside>
          <h1 className="mb-2 mt-4 font-mono">Let's Work Together</h1>
          <p className="text-center text-xs font-bold">
            Solid foundation in backend development. Also an extensive
            experience in administrative and human resources roles.
          </p>
        </article>
      </div>
    </section>
  );
};
