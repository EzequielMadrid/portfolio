export const Header = () => {
  return (
    <section className="flex justify-center items-center">
      <nav className="mt-3 p-0.5 gap-1 flex rounded-full border-2 border-cyan-800 bg-slate-800">
        <a href="#" className="links">
          Hub
        </a>
        <a href="#" className="links">
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
