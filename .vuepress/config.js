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
      description: "Un nuevo tipo de caparazón.",
    },
    "/ja/": {
      lang: "ja",
      title: "NuShell",
      description: "新しいタイプのシェル。.",
    },
    "/pt-BR/": {
      lang: "pt-BR",
      title: "NuShell",
      description: "Um novo tipo de concha.",
    },
    "/zh-cn/": {
      lang: "zh-cn",
      title: "NuShell",
      description: "一种新型的外壳。.",
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
          { text: "Cookbook", link: "/cookbook/" },
          { text: "Blog", link: "/blog/" },
        ],
        sidebar: {
          "/book/": [
            {
              title: "Nu Book",
              collapsable: false,
              children: [
                "installation",
                "introduction",
                "moving_around",
                "types_of_data",
                "loading_data",
                "working_with_tables",
                "pipeline",
                "configuration",
                "aliases",
                "math",
                "environment",
                "metadata",
                "shells_in_shells",
                "escaping",
                "plugins",
                "coming_from_bash",
                "nushell_map",
                "nushell_map_imperative",
                "nushell_map_functional",
                "nushell_operator_map",
              ],
            },
          ],
          "/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: [
                "introduction",
                "philosophy",
                "values",
                "commands",
                "streams",
                "metadata",
                "plugins",
                "shells",
              ],
            },
          ],
          "/cookbook/": [
            {
              title: "Cookbook",
              collapsable: false,
              children: [
                "setup",
                "help",
                "system",
                "parsing",
                "native_shell_programs",
                "files",
                "git",
                "parsing_git_log",
                "http",
                "misc",
              ],
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
              children: [
                "instalacion",
                "introduccion",
                "explorando",
                "tipos_de_datos",
                "cargando_datos",
                "trabajando_con_tablas",
                "pipeline",
                "configuracion",
                "aliases",
                "matematicas",
                "entorno",
                "metadatos",
                "shells_en_shells",
                "escapando",
                "plugins",
                "llegando_de_bash",
                "mapa_nushell",
                "mapa_imperativo_nushell",
                "mapa_funcional_nushell",
                "mapa_operador_nushell",
              ],
            },
          ],
          "/es/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: [
                "introduccion",
                "filosofia",
                "valores",
                "comandos",
                "metadatos",
              ],
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
              children: [
                "installation",
                "introduction",
                "moving_around",
                "types_of_data",
                "loading_data",
                "working_with_tables",
                "pipeline",
                "configuration",
                "metadata",
                "shells_in_shells",
                "escaping",
                "plugins",
              ],
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
              children: [
                "instalacao",
                "introducao",
                "explorando",
                "tipos_de_dados",
                "carregando_dados",
                "trabalhando_com_tabelas",
                "pipeline",
                "metadados",
                "shells_em_shells",
                "escapando",
                "plugins",
              ],
            },
          ],
          "/pt-BR/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: [
                "introdução",
                "filosofia",
                "valores",
                "comandos",
                "streams",
                "metadados",
                "plugins",
                "shells",
              ],
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
              children: [
                "installation",
                "introduction",
                "moving_around",
                "types_of_data",
                "loading_data",
                "working_with_tables",
                "pipeline",
                "configuration",
                "aliases",
                "math",
                "environment",
                "metadata",
              ],
            },
          ],
        },
      },
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
