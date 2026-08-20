"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type HeroSlide = {
  image: string;
  /** 两行大标题，分开写以保留原版的换行位置 */
  titleTop: string;
  titleBottom: string;
  description: string;
};

const INTERVAL = 5000;

/**
 * 首页主视觉轮播。
 *
 * 视觉与原版首屏完全一致（深蓝渐变罩、金色描边小标、衬线大标题、两个按钮、
 * 右下角标语），只是照片与文案会轮换。选图都取左三分之一为干净墙面的画面，
 * 保证左侧文字始终压在空白处而不是压在人脸上。
 *
 * 无障碍与体感：
 *  - 系统开启「减少动态效果」时不自动播放，只显示第一幕
 *  - 鼠标悬停或键盘聚焦在首屏内时暂停，避免读到一半被切走
 *  - 底部提供可点的指示条，不做成只能等它自己转
 */
export function HomeHero({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current || paused || slides.length < 2) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL,
    );
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const active = slides[index];

  return (
    <section
      className="relative min-h-[720px] overflow-hidden bg-[#071f3e] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071f3e]/95 via-[#071f3e]/82 to-[#071f3e]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(201,155,72,0.18),transparent_30%)]" />

      <div className="shell relative flex min-h-[720px] items-center py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#ead7ad]">
            LANGUAGE · KNOWLEDGE · WORLD
          </p>

          {/* aria-live 让读屏用户在轮换时也能拿到当前这一幕的内容 */}
          <div aria-live="polite" aria-atomic="true">
            <h1 className="mt-7 font-serif text-[clamp(38px,7vw,82px)] font-semibold leading-[1.12] tracking-[-0.05em]">
              {active.titleTop}
              <br />
              {active.titleBottom}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
              {active.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/languages"
              className="bg-[#c99b48] px-7 py-4 text-sm font-semibold text-[#071f3e] transition hover:bg-[#ead7ad]"
            >
              探索语种课程
            </Link>
            <Link
              href="/programs"
              className="border border-white/35 px-7 py-4 text-sm font-semibold transition hover:bg-white/10"
            >
              查看培训项目
            </Link>
          </div>

          {slides.length > 1 && (
            <div className="mt-12 flex items-center gap-3">
              {slides.map((slide, i) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`第 ${i + 1} 幕：${slide.titleTop}${slide.titleBottom}`}
                  aria-current={i === index}
                  className="group py-2"
                >
                  <span
                    className={`block h-0.5 transition-all duration-500 ${
                      i === index
                        ? "w-10 bg-[#c99b48]"
                        : "w-5 bg-white/30 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 bg-[#071f3e]/70 px-5 py-3 text-[11px] tracking-[0.08em] text-white/70 backdrop-blur-sm">
        多语种学习 · 专业辅导 · 国际视野
      </div>
    </section>
  );
}
