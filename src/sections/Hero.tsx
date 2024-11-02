import Image from "next/image";
import alienCoding from "@/assets/images/emoji-computer.png";

export const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <article className="flex flex-col items-center ">
          <Image
            src={alienCoding}
            alt="alien coding something"
            className="size-[80px] rounded-lg shadow-lg shadow-slate-300"
          />
          <aside className="mt-8 inline-flex items-center gap-2 px-4 py-2 border-l-2 rounded-lg border-white ">
            <div className="size-2.5  rounded-full bg-green-500"></div>
            <div className="text-sm font-mono">Ezequiel Madrid</div>
          </aside>
          <h1>Let's Work Together</h1>
          <p>
            Solid foundation in backend development. Also an extensive
            experience in administrative and human resources roles.
          </p>
          <aside>
            <button>Check out my APPs</button>
            <button> 📞📧📲 </button>
          </aside>
        </article>
      </div>
    </section>
  );
};

/* about me 
Solid foundation in backend development. Also an 
extensive experience in administrative 
and human resources roles. */
