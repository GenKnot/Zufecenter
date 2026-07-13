import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

function buildStructuredData() {
  const sameAs: string[] = [];
  const mainNavigation: { name: string; url: string; description?: string }[] = navigation.flatMap((item) => [
    { name: item.label, url: `${siteConfig.url}${item.href === "/" ? "" : item.href}` },
    ...(item.children ?? []).map((child) => ({
      name: child.label,
      url: `${siteConfig.url}${child.href}`,
      description: child.description,
    })),
  ]);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": organizationId,
        name: siteConfig.name,
        alternateName: [siteConfig.shortName, siteConfig.englishName],
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo-dark.svg`,
        image: `${siteConfig.url}/images/campus-autumn.png`,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "文一西路83号",
          addressLocality: "杭州市",
          addressRegion: "浙江省",
          addressCountry: "CN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
            email: siteConfig.contact.email,
            contactType: "course consultation",
            availableLanguage: ["zh-CN", "en", "fr", "ja", "ko", "es"],
            areaServed: "CN",
          },
        ],
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        alternateName: siteConfig.englishName,
        url: siteConfig.url,
        inLanguage: ["zh-CN", "en", "fr", "ja", "ko", "es"],
        publisher: { "@id": organizationId },
        description: siteConfig.description,
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#site-navigation`,
        name: "网站主要栏目",
        itemListElement: mainNavigation.map((item, index) => ({
          "@type": "SiteNavigationElement",
          position: index + 1,
          name: item.name,
          url: item.url,
          description: item.description,
        })),
      },
    ],
  };
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildStructuredData()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
