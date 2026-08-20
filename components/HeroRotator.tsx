"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  languageIdentity,
  languageOrder,
  type LanguageSlug,
} from "@/data/language-identity";

export type HeroSlide = {
  /** null 表示总览幕，不对应任何单一语种 */
  language: LanguageSlug | null;
  image: string;
  /** 该语种的问候语，排在标题上方作小字点缀；总览幕为 null */
  greeting: string | null;
  /** 大字标题。中文站一律用中文；换行符会被保留 */
  headline: string;
  /** 标题下面那行中文 */
  caption: string;
  /** 语种幕给出班型数，总览幕给出总体说明 */
  meta: string;
};

const INTERVAL = 6000;

/**
 * 首屏轮播。
 *
 * 刻意不做成常见的「背景图空转」式轮播——那是模板站最典型的标志，
 * 而且第二张之后几乎没人看。这里每一幕对应一个语种，
 * 大字标题直接用该语言的问候语（Bonjour. / はじめまして。/ 안녕하세요.）：
 * 轮播本身在传递「这里教四种语言」，而不只是换张背景。
 *
 * 无障碍处理：
 *  - 系统开启「减少动态效果」时不自动播放，只显示第一幕
 *  - 鼠标悬停或键盘聚焦在首屏内时暂停
 *  - 底部语种条既是指示器也是入口：悬停即切换，点击进入该语种页面
 */
export function HeroRotator({
  slides,
  counts,
}: {
  slides: HeroSlide[];
  /** 各语种班型数，排在底部语种条上 */
  counts: Record<LanguageSlug, number>;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current || paused) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL,
    );
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const active = slides[index];

  return (
    <section
      className="relative flex min-h-[clamp(620px,86vh,840px)] flex-col justify-end overflow-hidden bg-[#071f3e] text-white"
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
          className={`object-cover object-[62%_center] transition-opacity duration-1000 lg:object-center ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}

      {/* 左浓右淡的深色罩，保证左侧文字可读，右侧留出照片本身 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061a33]/95 via-[#071f3e]/82 to-[#071f3e]/25" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#061a33] to-transparent" />

      <div className="shell relative flex flex-1 flex-col justify-center pt-28 pb-14">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-label font-semibold tracking-wide text-[#ead7ad] uppercase">
          <span>Zhejiang University of Finance &amp; Economics</span>
          <span aria-hidden className="h-3 w-px bg-white/30" />
          <span>Language Centre · Est. 2015</span>
        </p>

        {/* aria-live 让读屏用户在轮播切换时也能拿到当前内容 */}
        <div aria-live="polite" aria-atomic="true">
          {/*
            问候语只作点缀：用该语种自己的颜色，字号压到小标签级别。
            中文站的主标题必须是中文，外语不该占据 h1。
          */}
          <p className="mt-9 h-6 font-serif text-xl" aria-hidden>
            {active.greeting && (
              <span
                style={{
                  color:
                    active.language !== null
                      ? languageIdentity[active.language].accent
                      : undefined,
                }}
                className="rounded-none bg-white/95 px-2.5 py-0.5"
              >
                {active.greeting}
              </span>
            )}
          </p>
          <h1 className="mt-5 font-serif text-[clamp(32px,4.8vw,68px)] leading-[1.18] font-semibold whitespace-pre-line">
            {active.headline}
          </h1>
          <p className="mt-7 max-w-xl font-serif text-base leading-8 text-white/78">
            {active.caption}
          </p>
          <p className="mt-3 text-meta text-white/50">{active.meta}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="#courses"
            className="bg-[#c99b48] px-9 py-4 text-sm font-semibold tracking-cn text-[#071f3e] transition hover:bg-[#ead7ad]"
          >
            查看全部课程
          </Link>
          <Link
            href="/languages#classes"
            className="border-b border-white/45 pb-1 text-sm font-semibold transition hover:border-[#c99b48]"
          >
            2026 秋季课表
          </Link>
        </div>
      </div>

      {/*
        底部语种条：既是轮播指示器，也是四个语种的入口。
        悬停即切到该语种那一幕，点击进入语种页面。
      */}
      <div className="relative border-t border-white/15 bg-[#061a33]/72 backdrop-blur-sm">
        <div className="shell grid divide-y divide-white/12 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {languageOrder.map((slug) => {
            const item = languageIdentity[slug];
            const slideIndex = slides.findIndex((s) => s.language === slug);
            const isActive = active.language === slug;

            return (
              <Link
                key={slug}
                href={`/languages/${slug}`}
                onMouseEnter={() =>
                  slideIndex >= 0 && setIndex(slideIndex)
                }
                onFocus={() => slideIndex >= 0 && setIndex(slideIndex)}
                className="group relative flex items-baseline gap-4 py-6 transition sm:border-l sm:border-white/12 sm:pl-6 sm:first:border-l-0 sm:first:pl-0 lg:py-7"
              >
                {/* 当前幕的标记线，用该语种自己的颜色 */}
                <span
                  aria-hidden
                  className={`absolute top-0 left-0 h-0.5 transition-all duration-500 sm:left-6 sm:first:left-0 ${
                    isActive ? "w-10 opacity-100" : "w-0 opacity-0"
                  }`}
                  style={{ background: item.accent }}
                />
                <span
                  aria-hidden
                  className={`font-serif text-2xl transition ${
                    isActive ? "text-white" : "text-[#ead7ad]"
                  }`}
                >
                  {item.mark}
                </span>
                <span>
                  <span className="block font-serif text-xl font-semibold">
                    {item.label}
                  </span>
                  <span className="mt-1.5 block text-label text-white/55 tabular-nums">
                    {item.standard} · {counts[slug]} 个班型
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
