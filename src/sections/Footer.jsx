import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* glow effect */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500" />
      <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h1 className="text-sm md:text-base font-semibold tracking-widest text-white/80 hover:text-white transition-colors">
          © {new Date().getFullYear()} Ezequiel Madrid
        </h1>
        {/* socials */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/EzequielMadrid"
            target="_blank"
            className="group"
          >
            <Github className="w-5 h-5 text-white/60 group-hover:text-cyan-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/ezequielmadrid97/"
            target="_blank"
            className="group"
          >
            <Linkedin className="w-5 h-5 text-white/60 group-hover:text-cyan-900" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
