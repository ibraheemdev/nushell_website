module.exports = {
  locales: {
    "/": {
      lang: "English",
      title: "NuShell",
      description: "A new type of shell.",
    },
    "/es/": {
      lang: "Español",
      title: "NuShell",
      description: "A new type of shell.",
    },
    "/ja/": {
      lang: "日本語",
      title: "NuShell",
      description: "A new type of shell.",
    },
    "/pt-BR/": {
      lang: "Português do Brasil",
      title: "NuShell",
      description: "A new type of shell.",
    },
    "/zh-cn/": {
      lang: "官话",
      title: "NuShell",
      description: "A new type of shell.",
    },
  },
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Book",
        link: "/book/",
      },
      {
        text: "Github",
        link: "https://github.com/nushell/nushell",
      },
    ],
    sidebar: {
      "/book/": [
        {
          title: "Book",
          collapsable: false,
        },
      ]
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
