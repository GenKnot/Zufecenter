import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[430px] items-center overflow-hidden bg-[#0b2f5b] py-20 text-white">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-[70%_center] md:object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061b35]/95 via-[#08284e]/80 to-[#08284e]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/35 via-transparent to-black/10" />
        </>
      ) : (
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_75%_20%,#c99b48_0,transparent_32%),linear-gradient(120deg,transparent_55%,#174f8f_55%)]" />
      )}
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
