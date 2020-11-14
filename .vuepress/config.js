const glob = require("glob");

const getFiles = (dir) => {
  return glob
    .sync(`${dir}/**/*.md`)
    .filter((f) => f != `${dir}/README.md`)
    .map((f) => "/" + f)
    .sort();
};

console.log(getFiles("book"));

module.exports = {
  base: "/nushell_website/",
  locales: {
    "/": {
      lang: "English",
      title: "NuShell",
      description: "A new type of shell.",
    },
    "/es/": {
      lang: "es",
      title: "NuShell",
      description: "A new type of shell.",
    },
    "/ja/": {
      lang: "ja",
      title: "NuShell",
      description: "A new type of shell.",
    },
    "/pt-BR/": {
      lang: "pt-BR",
      title: "NuShell",
      description: "A new type of shell.",
    },
    "/zh-cn/": {
      lang: "zh-cn",
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
    repo: "nushell/nushell",
    repoLabel: "GitHub",
    editLinks: true,
    docsDir: "docs",
    lastUpdated: false,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
        nav: [
          { text: "Book", link: "/book/" },
          { text: "Contributor Book", link: "/contributor-book/" },
        ],
        sidebar: {
          "/book/": [
            {
              title: "Nu Book",
              collapsable: false,
              children: getFiles("book"),
            },
          ],
          "/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: getFiles("contributor-book"),
            },
          ],
        },
      },
      "/es/": {
        selectText: "Idiomas",
        label: "Español",
        editLinkText: "Edita esta página en GitHub",
        nav: [
          { text: "Libro", link: "/es/book/" },
          { text: "Libro Colaborador", link: "/es/contributor-book/" },
        ],
        sidebar: {
          "/es/book/": [
            {
              title: "Nu Libro",
              collapsable: false,
              children: getFiles("es/book"),
            },
          ],
          "/es/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: getFiles("es/contributor-book"),
            },
          ],
        },
      },
      "/ja/": {
        selectText: "言語",
        label: "日本語",
        editLinkText: "GitHubでこのページを編集する",
        nav: [{ text: "本", link: "/ja/book/" }],
        sidebar: {
          "/ja/book/": [
            {
              title: "Nu 本",
              collapsable: false,
              children: getFiles("ja/book"),
            },
          ],
        },
      },
      "/pt-BR/": {
        selectText: "Línguas",
        label: "Português do Brasil",
        editLinkText: "Edite esta página no GitHub",
        nav: [
          { text: "Livro", link: "/pt-BR/book/" },
          { text: "Livro de Contribuidor", link: "/pt-BR/contributor-book/" },
        ],
        sidebar: {
          "/pt-BR/book/": [
            {
              title: "Nu Livro",
              collapsable: false,
              children: getFiles("pt-BR/book"),
            },
          ],
          "/pt-BR/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: getFiles("pt-BR/contributor-book"),
            },
          ],
        },
      },
      "/zh-cn/": {
        selectText: "语言",
        label: "中文",
        editLinkText: "在GitHub上编辑此页面",
        nav: [{ text: "书", link: "/zh-CN/book/" }],
        sidebar: {
          "/zh-cn/book/": [
            {
              title: "Nu 书",
              collapsable: false,
              children: getFiles("zh-cn/book"),
            },
          ],
        },
      },
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
