"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
/* import { FaWhatsapp, FaEnvelope } from "react-icons/fa";*/

export const MyHub = () => {
  return (
    <section className="h-screen py-8">
      <div className="container">
        <article className="mb-6 flex flex-col items-center ">
          <Image
            src={logo}
            alt="alien coding something"
            className="mb-8 size-[80px] rounded-lg shadow-lg shadow-slate-600"
          />
          <aside className="inline-flex items-center gap-2 px-4 py-2 border-l-2 rounded-lg border-cyan-100">
            <div className="size-1.5 rounded-full bg-green-500"></div>
            <div className="mb-2 text-sm font-mono">ezequielMadrid</div>
          </aside>
          <h1 className="mb-4 mt-4 font-mono">Let's Work Together!</h1>
          <p className="text-center pb-4 text-xs font-bold border-b-2 border-slate-300">
            I've a solid foundation in backend development, along with extensive
            experience in administrative and human resources roles. I've worked
            in companies with industry-leading clients, which has strengthened
            my communication skills and problem-solving abilities under tight
            deadlines. I've built work teams rooted in mutual respect, and I'm
            eager to take on new challenges where I can continue to grow both
            personally and professionally, while contributing to the success of
            the organization. Please don't hesitate to talk me!
          </p>
        </article>
        <div className="h-44 sm:h-40 w-full rounded-xl bg-black">
          <video
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            loop
            muted
          >
            <source src="/videos/waves.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
