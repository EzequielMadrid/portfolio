export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <section className="mb-4">
      <div>
        <h5 className="mb-2 uppercase text-center font-mono font-semibold tracking-widest text-emerald-200">
          {eyebrow}
        </h5>
      </div>
      <h2 className="text-center text-xl font-serif">{title}</h2>
      <p className="text-center font-bold">{description}</p>
    </section>
  );
};
