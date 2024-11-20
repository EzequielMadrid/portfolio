import { SectionHeader } from "@/components/SectionHeader";

export const ContactSection = () => {
  return (
    <section className="py-14">
      <SectionHeader
        title={"Contact me"}
        eyebrow={"Let's work together!"}
        description={"📲"}
      />
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
          <article className="p-6 rounded-lg transform hover:scale-1005 transition duration-300 hover:shadow-lg shadow-md bg-emerald-950 shadow-slate-600">
            <h3 className="text-lg font-bold">Get in Touch</h3>
            <p className="text-gray-400 mt-2">
              Feel free to send a message or connect via social platforms.
            </p>
          </article>
          <article className="p-6 rounded-lg transform hover:scale-105 transition duration-300 hover:shadow-lg shadow-md bg-emerald-950 shadow-slate-600">
            <h3 className="text-lg font-bold">Location</h3>
            <p className="text-gray-400 mt-2">
              {" "}
              x¿ Based in the heart of innovation.
            </p>
          </article>
          <article className="p-6 rounded-lg transform hover:scale-105 transition duration-300 hover:shadow-lg shadow-md bg-emerald-950 shadow-slate-600">
            <h3 className="text-lg font-bold">Socials</h3>
            <p className="text-gray-400 mt-2">
              Follow me on LinkedIn, GitHub, and Twitter for updates.
            </p>
          </article>
          <article className="p-6 rounded-lg transform hover:scale-105 transition duration-300 hover:shadow-lg shadow-md bg-emerald-950 shadow-slate-600">
            <h3 className="text-lg font-bold">Email</h3>
            <p className="text-gray-400 mt-2">contact@example.com</p>
          </article>
        </div>
      </div>
    </section>
  );
};
