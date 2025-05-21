export const SITE = {
  website: "https://celeryliu94.github.io/", // replace this with your deployed domain
  author: "Celery Liu",
  profile: "https://celeryliu94.github.io/",
  desc: "A blog about my life and work",
  title: "BlueChip Timeline",
  ogImage: "bluechip-timeline-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    url: "",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
