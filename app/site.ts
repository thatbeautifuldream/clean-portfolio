export const site = {
  name: "Milind Kumar Mishra",
  shortName: "Milind Mishra",
  tagline: "Product engineer shipping AI products people use every day",
  description:
    "Product engineer at Merlin AI by Foyer. 20M+ users reached, 4 talks at React meetups, 5 products taken 0 to 1, shipped across web, extension, desktop, and mobile.",
  url: "https://milindmishra.com",
  locale: "en_US",
  themeColor: "#0a0a0a",
  email: "hey@milindmishra.com",
  twitter: "@milindmishra_",
  image: "/opengraph-image",
  keywords: [
    "product engineer",
    "design engineer",
    "AI interfaces",
    "frontend engineer",
    "React",
    "motion design",
    "Milind Mishra",
  ],
  profiles: [
    { label: "GitHub", href: "https://github.com/thatbeautifuldream" },
    { label: "X", href: "https://x.com/milindmishra_" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mishramilind/" },
  ],
  resume:
    "https://cdn.jsdelivr.net/gh/thatbeautifuldream/resume-tex/resume.pdf",
  location: { city: "Bengaluru", region: "Karnataka", country: "India" },
  currentRole: {
    title: "Product Engineer",
    company: "Merlin AI by Foyer",
    url: "https://www.getmerlin.in",
  },
  alumniOf: [
    {
      name: "National Yang Ming Chiao Tung University",
      url: "https://www.nycu.edu.tw/",
      area: "Computer Software Engineering",
    },
    {
      name: "Visvesvaraya Technological University",
      url: "https://www.vtu.ac.in/",
      area: "Electronics and Communication",
    },
  ],
} as const;

export function structuredData() {
  const { city, region, country } = site.location;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        alternateName: site.shortName,
        givenName: "Milind",
        familyName: "Mishra",
        url: `${site.url}/`,
        image: `${site.url}${site.image}`,
        jobTitle: site.currentRole.title,
        description: site.description,
        email: `mailto:${site.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: city,
          addressRegion: region,
          addressCountry: country,
        },
        knowsAbout: [
          "Product engineering",
          "AI-native interfaces",
          "Design engineering",
          "React",
          "TypeScript",
          "Design systems",
        ],
        alumniOf: site.alumniOf.map((school) => ({
          "@type": "EducationalOrganization",
          name: school.name,
          url: school.url,
          department: { "@type": "Organization", name: school.area },
        })),
        worksFor: {
          "@type": "Organization",
          name: site.currentRole.company,
          url: site.currentRole.url,
        },
        sameAs: site.profiles.map((profile) => profile.href),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: `${site.url}/`,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: `${site.url}/`,
        name: `${site.name} · ${site.currentRole.title}`,
        description: site.description,
        inLanguage: "en",
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": `${site.url}/#person` },
        about: { "@id": `${site.url}/#person` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${site.url}${site.image}`,
        },
      },
    ],
  };
}
