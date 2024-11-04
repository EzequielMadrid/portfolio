export const Header = () => {
  return (
    <section className="sticky top-2 flex justify-center items-center">
      <nav className="p-0.5 gap-1 flex rounded-full border-2 border-cyan-800 bg-slate-800">
        <a href="#hub" className="links">
          Hub
        </a>
        <a href="#apps" className="links">
          Apps
        </a>
        <a href="#" className="links">
          Career
        </a>
        <a
          href="#"
          className="links bg-cyan-800 text-cyan-50 hover:bg-cyan-700"
        >
          Contact
        </a>
      </nav>
    </section>
  );
};
