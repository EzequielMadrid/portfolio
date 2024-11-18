import { Header } from "@/sections/Header";
import { MyHub } from "@/sections/Hub";
import { Applications } from "@/sections/Apps";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div className="scrollbar-thin scrollbar-thumb-cyan-200 scrollbar-track-slate-800 h-screen overflow-y-scroll">
      <Header />
      <section id="hub">
        <MyHub />
      </section>
      <section id="apps">
        <Applications />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
