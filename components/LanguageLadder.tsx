"use client";

import Link from "next/link";
import { useId, useState } from "react";
import {
  languageIdentity,
  languageOrder,
  type LanguageSlug,
} from "@/data/language-identity";

export type LadderCourse = {
  slug: string;
  language: LanguageSlug;
  title: string;
  code: string;
  /** 形如「中级 · CEFR B1」「初中级 · JLPT N4」 */
  level: string;
  track: string;
  duration: string;
  frequency: string;
  classSize: string;
  /** 本学期是否开班；来自 data/operations 的当期安排 */
  termStatus?: string;
};

/**
 * 把「入门 · CEFR A1」拆成前后两段：前半是中文档位，后半是通用等级标准。
 * 阶梯上只显示后半（A1 / N4 / TOPIK 2），中文档位放在标题旁边。
 */
function splitLevel(level: string) {
  const [stage, ...rest] = level.split("·").map((part) => part.trim());
  return { stage, standard: rest.join(" · ") };
}

export function LanguageLadder({
  courses,
  language,
}: {
  courses: LadderCourse[];
  /**
   * 固定语种。给定时不显示切换标签，只渲染该语种的级别线——
   * 用在 /languages/[slug]，让「级别」这条线在语种总览页和单语种页上是同一种画法。
   */
  language?: LanguageSlug;
}) {
  const [selected, setSelected] = useState<LanguageSlug>("english");
  const active = language ?? selected;
  const setActive = setSelected;
  const panelId = useId();

  const identity = languageIdentity[active];
  const forLanguage = courses.filter((course) => course.language === active);
  const ladder = forLanguage.filter((course) => course.track === "综合能力");
  const focused = forLanguage.filter((course) => course.track !== "综合能力");

  return (
    <div
      style={
        {
          "--accent": identity.accent,
          "--tint": identity.tint,
          "--accent-ink": identity.ink,
        } as React.CSSProperties
      }
    >
      {!language && (
      <div
        role="tablist"
        aria-label="选择语种"
        className="flex flex-wrap gap-px border border-slate-200 bg-slate-200"
      >
        {languageOrder.map((slug) => {
          const item = languageIdentity[slug];
          const selected = slug === active;

          return (
            <button
              key={slug}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              onClick={() => setActive(slug)}
              style={selected ? { background: item.accent } : undefined}
              className={`flex min-w-[9rem] flex-1 items-center gap-3 px-5 py-4 text-left transition ${
                selected
                  ? "text-white"
                  : "bg-white text-[#11233e] hover:bg-[#f7f5f0]"
              }`}
            >
              <span
                aria-hidden
                style={selected ? undefined : { color: item.accent }}
                className={`grid size-9 shrink-0 place-items-center rounded-full border font-serif text-sm ${
                  selected ? "border-white/45" : "border-current/35"
                }`}
              >
                {item.mark}
              </span>
              <span>
                <span className="block font-serif text-base font-semibold">
                  {item.label}
                </span>
                <span
                  className={`block text-label tracking-label ${
                    selected ? "text-white/60" : "text-slate-400"
                  }`}
                >
                  {item.native}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      )}

      <div id={panelId} role={language ? undefined : "tabpanel"} className={language ? "" : "mt-10"}>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold text-[#11233e]">
            综合能力阶梯 · {ladder.length} 个级别
          </h3>
          {!language && (
            <Link
              href={`/languages/${active}`}
              className="text-sm font-semibold"
              style={{ color: identity.ink }}
            >
              查看{identity.label}全部课程
            </Link>
          )}
        </div>

        {/*
          横向阶梯：一条贯穿的基线加节点，直接把「从哪一级进、往哪一级走」画出来。
          屏幕窄时自动变成可横向滚动的一条，不会挤成难认的小方块。
        */}
        <div className="mt-7 overflow-x-auto pb-2">
          <ol
            className="grid min-w-[860px] gap-4"
            style={{
              gridTemplateColumns: `repeat(${ladder.length}, minmax(0, 1fr))`,
            }}
          >
            {ladder.map((course, index) => {
              const { stage, standard } = splitLevel(course.level);

              return (
                <li key={course.slug} className="relative">
                  {/* 连接线：与节点圆心同高，压在圆点下方 */}
                  {index < ladder.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-[9px] left-2 z-0 h-px w-full bg-slate-300"
                    />
                  )}
                  <Link
                    href={`/languages/${active}/${course.slug}`}
                    className="group relative z-10 block"
                  >
                    <span
                      aria-hidden
                      className="block size-[18px] rounded-full ring-4 ring-white transition group-hover:scale-125"
                      style={{ background: identity.accent }}
                    />
                    <span
                      className="mt-4 block text-label font-semibold tracking-cn"
                      style={{ color: identity.ink }}
                    >
                      {standard || stage}
                    </span>
                    <span className="mt-1.5 block font-serif text-base leading-6 font-semibold text-[#11233e] transition group-hover:underline">
                      {course.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-400">
                      {stage}
                    </span>
                    <span className="mt-3 block text-xs leading-5 text-slate-500">
                      {course.duration}
                      <br />
                      {course.classSize}
                    </span>
                    {course.termStatus && (
                      <span
                        className="mt-3 inline-block px-2 py-1 text-label font-semibold"
                        style={{ background: identity.tint, color: identity.ink }}
                      >
                        本学期 {course.termStatus}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>

        {focused.length > 0 && (
          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="font-serif text-xl font-semibold text-[#11233e]">
              专项课程
            </h3>
            <ul className="mt-5 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {focused.map((course) => (
                <li key={course.slug} className="border-t border-slate-100 first:border-t-0 sm:border-t-0">
                  <Link
                    href={`/languages/${active}/${course.slug}`}
                    className="group flex flex-col gap-1.5 py-4"
                  >
                    <span className="flex items-baseline gap-2.5">
                      <span
                        className="px-2 py-0.5 text-label font-semibold text-white"
                        style={{ background: identity.accent }}
                      >
                        {course.track}
                      </span>
                      <strong className="font-serif text-lg font-semibold text-[#11233e] transition group-hover:underline">
                        {course.title}
                      </strong>
                    </span>
                    <span className="text-xs text-slate-500">
                      {course.level} · {course.frequency}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
