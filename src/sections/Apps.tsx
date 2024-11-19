import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { SectionHeader } from "@/components/SectionHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const myApps = [
  {
    name: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    tests: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    name: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    tests: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    name: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    tests: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const Applications = () => {
  return (
    <section className="relative z-10">
      <div className="container">
        <SectionHeader
          title={"My APPs"}
          eyebrow={"Check out any projects"}
          description={"💻"}
        />
        <article className="flex flex-col gap-8">
          {myApps.map((x) => (
            <div
              key={x.title}
              className="mb-2 px-4 pt-8 relative z-0 overflow-hidden rounded-3xl after:-z-10 after:content-[''] after:absolute after:inset-0  after:outline-2 after:outline after:-outline-offset-20 after:rounded-3xl after:outline-slate-100 bg-emerald-950 shadow-md shadow-slate-600"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="inline-flex gap-2 uppercase tracking-widest font-semibold text-sm text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
                    <span>{x.name}</span>
                    <span>&bull;</span>
                    <span>{x.year}</span>
                  </div>
                  <h3 className="font-mono text-2xl md:text-3xl">{x.title}</h3>
                  <hr className="mb-4 rounded-full border-t-2 border-cyan-900" />
                  <ul className="mb-6 flex flex-col gap-4">
                    {x.tests.map((myApp, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-xs md:text-base text-slate-300"
                      >
                        <CheckCircleIcon className="size-3 md:size-4" />
                        <span className="font-mono">{myApp.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={x.link}>
                    <button className="mb-6 p-4 w-full h-8 md:w-auto inline-flex items-center justify-center gap-2 rounded-full font-semibold text-slate-300 hover:bg-slate-400 hover:text-cyan-900 bg-slate-600">
                      <span className="font-mono md:text-xl">Explore it</span>
                      <ArrowUpRightIcon className="size-3 md:size-5" />
                    </button>
                  </a>
                </div>
                <Image src={x.image} alt={x.title} className="-mb-4" />
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};
