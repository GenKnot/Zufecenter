export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0b2f5b] py-20 text-white">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_75%_20%,#c99b48_0,transparent_32%),linear-gradient(120deg,transparent_55%,#174f8f_55%)]" />
      <div className="shell relative">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#ead7ad]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
          {description}
        </p>
      </div>
    </section>
  );
}
