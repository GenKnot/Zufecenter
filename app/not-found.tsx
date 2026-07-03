import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell grid min-h-[520px] place-items-center py-20 text-center">
      <div>
        <p className="font-serif text-7xl text-[#c99b48]">404</p>
        <h1 className="mt-5 font-serif text-3xl font-semibold">没有找到这个页面</h1>
        <Link
          href="/"
          className="mt-8 inline-block bg-[#0b2f5b] px-6 py-3 text-sm text-white"
        >
          返回首页
        </Link>
      </div>
    </section>
  );
}
