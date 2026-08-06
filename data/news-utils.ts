export function selectHomepageNews<T extends { slug: string; date: string }>(
  items: T[],
  limit = 6,
) {
  const sorted = [...items].sort((a, b) => b.date.localeCompare(a.date));
  const selected = sorted.slice(0, limit);
  const deanNews = sorted.find(
    (item) => item.slug === "2026-wuxin-zhejiang-finance-forum",
  );

  if (deanNews && !selected.some((item) => item.slug === deanNews.slug)) {
    return [...selected.slice(0, Math.max(0, limit - 1)), deanNews].sort((a, b) =>
      b.date.localeCompare(a.date),
    );
  }

  return selected;
}
