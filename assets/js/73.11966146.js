(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{427:function(s,a,e){"use strict";e.r(a);var t=e(42),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"introducao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introducao"}},[s._v("#")]),s._v(" Introdução")]),s._v(" "),e("p",[s._v("Olá! Seja bem vindo ao projeto Nushell. O objetivo desse projeto é trazer a filosofia de shells do Unix, onde  pipes conectam comandos simples, para o estilo moderno de desenvolvimento.")]),s._v(" "),e("p",[s._v('Nu usa dicas de vários terrenos familiares: shells tradicionais como bash, shells avançados como PowerShell, programação funcional, programação de sistemas, e outros. Porém, mais do que tentar ser "pau pra toda obra", Nu foca sua energia em fazer poucas coisas muito bem:')]),s._v(" "),e("ul",[e("li",[s._v("Criar um shell multiplataforma flexível para o programador moderno da era GitHub")]),s._v(" "),e("li",[s._v("Permitir que você combine aplicações de linha de comando com um shell que entende a estrutura dos seus dados")]),s._v(" "),e("li",[s._v("Ter o mesmo nível de polimento de UX (experência do usuário) fornecido pelas aplicações CLI modernas")])]),s._v(" "),e("p",[s._v("O jeito mais fácil de ver o que o Nu pode fazer é começar com alguns exemplos, então vamos nessa.")]),s._v(" "),e("p",[s._v("A primeira coisa que você vai perceber quando rodar um comando como "),e("code",[s._v("ls")]),s._v(" é que ao invés de um bloco de texto, você recebe de volta uma tabela estruturada.")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n----+------------------+-----------+----------+----------+----------------+----------------\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  | name             | type      | readonly | size     | accessed       | modified")]),s._v("\n----+------------------+-----------+----------+----------+----------------+----------------\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" .azure           "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Directory "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a week ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IMG_1291.jpg     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("115.5")]),s._v(" KB "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" months ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Cargo.toml       "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" minutes ago "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" minutes ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" LICENSE          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" readonly.txt     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("empty"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" target           "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Directory "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" minutes ago\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),e("p",[s._v("Essa tabela faz mais do que somente mostrar o diretório de um jeito diferente. Assim como uma planilha, ela nos permite trabalhar com os dados interativamente.")]),s._v(" "),e("p",[s._v("A primeira coisa que vamos fazer é ordenar a tabela por nome. Para isso, vamos direcionar a saída do "),e("code",[s._v("ls")]),s._v(" para um comando capaz de ordenar tabelas com base no conteúdo de uma coluna.")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sort-by name\n----+------------------+-----------+----------+----------+----------------+----------------\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  | name             | type      | readonly | size     | accessed       | modified")]),s._v("\n----+------------------+-----------+----------+----------+----------------+----------------\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" .azure           "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Directory "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a week ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" .cargo           "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Directory "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" .editorconfig    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("148")]),s._v(" B    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" .git             "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Directory "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" minutes ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" .gitignore       "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("58")]),s._v(" B     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a week ago     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a week ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" .vscode          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Directory "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.1")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),e("p",[s._v("Você pode ver que, para fazer isso funcionar, não passamos parâmetros de linha de comando para o "),e("code",[s._v("ls")]),s._v(". Ao invés disso, usamos o comando "),e("code",[s._v("sort-by")]),s._v(", fornecido pelo Nu, para ordenar a saída do comando "),e("code",[s._v("ls")]),s._v(".")]),s._v(" "),e("p",[s._v("O Nu fornece muitos comandos que trabalham com tabelas. Por exemplo, podemos filtrar o conteúdo da tabela do "),e("code",[s._v("ls")]),s._v(" para que ela mostre apenas os arquivos com mais de 4 kilobytes:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where size "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 4kb\n----+----------------+------+----------+----------+----------------+----------------\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  | name           | type | readonly | size     | accessed       | modified")]),s._v("\n----+----------------+------+----------+----------+----------------+----------------\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IMG_1291.jpg   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("115.5")]),s._v(" KB "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" months ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" README.md      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.1")]),s._v(" KB  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" days ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IMG_1291.png   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("589.0")]),s._v(" KB "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IMG_1381.jpg   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.0")]),s._v(" KB  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" months ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" butterfly.jpeg "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),s._v(" KB   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a month ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Cargo.lock     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("199.6")]),s._v(" KB "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" minutes ago "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" minutes ago\n")])])]),e("p",[s._v("Assim como na filosofia Unix, fazer os comandos conversarem uns com os outros nos permite combiná-los de muitas maneiras diferentes. Vamos ver outro comando:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n-----+-------+----------+------+--------------------------------------------------------------------------------\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   | pid   | status   | cpu  | name")]),s._v("\n-----+-------+----------+------+--------------------------------------------------------------------------------\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Unknown  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1515")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sleeping "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/lib/gnome-settings-daemon/gsd-screensaver-proxy\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2128")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sleeping "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/lib/gnome-settings-daemon/gsd-screensaver-proxy\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2285")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Unknown  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8872")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sleeping "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/lib/gvfs/gvfsd-dnssd--spawner:1.23/org/gtk/gvfs/exec_spaw/4\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1594")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sleeping "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/lib/ibus/ibus-engine-simple\n")])])]),e("p",[s._v("Você deve conhecer o comando "),e("code",[s._v("ps")]),s._v(" se já usou Linux. Com ele, vemos uma lista com todos os processos que o sistema está rodando atualmente, seus estados e seus nomes. Também podemos ver a carga de CPU para cada processo.")]),s._v(" "),e("p",[s._v("E se quiséssemos mostrar somente os processos que estão usando a CPU de fato? Exatamente como fizemos com o comando "),e("code",[s._v("ls")]),s._v(" anteriormente, podemos também manipular a tabela que o comando "),e("code",[s._v("ps")]),s._v(" nos retorna:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" where cpu "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n---+-------+----------+-------+-----------------------------\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# | pid   | status   | cpu   | name")]),s._v("\n---+-------+----------+-------+-----------------------------\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1992")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sleeping "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("44.52")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/bin/gnome-shell\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1069")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sleeping "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.15")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("24116")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sleeping "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("13.70")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /opt/google/chrome/chrome\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21976")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Sleeping "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.67")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/share/discord/Discord\n")])])]),e("p",[s._v("Até agora vimos como usar "),e("code",[s._v("ls")]),s._v(" e "),e("code",[s._v("ps")]),s._v(" para listar arquivos e processos. O Nu também oferece outros comandos que podem criar tabelas com informações úteis. A seguir vamos explorar "),e("code",[s._v("date")]),s._v(" e "),e("code",[s._v("sys")]),s._v(".")]),s._v(" "),e("p",[s._v("Ao executar "),e("code",[s._v("date")]),s._v(" obtemos informações sobre a data e hora correntes:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n------+-------+-----+------+--------+--------+----------\n year "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" month "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" day "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" hour "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" minute "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" second "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" timezone\n------+-------+-----+------+--------+--------+----------\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" +12:00\n------+-------+-----+------+--------+--------+----------\n")])])]),e("p",[s._v("E ao executar "),e("code",[s._v("sys")]),s._v(" obtemos informações sobre o sistema em que o Nu está rodando:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys\n----------+----------+-----------+----------+-----------+-----------\n "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cpu      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" disks     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mem      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" temp      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" net\n----------+----------+-----------+----------+-----------+-----------\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" items"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n----------+----------+-----------+----------+-----------+-----------\n")])])]),e("p",[s._v("Essa tabela é um pouco diferente das que vimos antes. O comando "),e("code",[s._v("sys")]),s._v(" retorna uma tabela que contém tabelas estruturadas em suas células, ao invés de valores simples. Para dar uma olhada nesses dados, precisamos selecionar a coluna que queremos ver:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("\n-------+------------------+----------+--------+----------+----------\n name  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" release          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" arch   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v("\n-------+------------------+----------+--------+----------+----------\n Linux "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(".0-21-generic "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" pop-os   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" x86_64 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n-------+------------------+----------+--------+----------+----------\n")])])]),e("p",[s._v("O comando "),e("code",[s._v("get")]),s._v(" permite que tenhamos acesso ao conteúdo de uma coluna da tabela. Aqui, estamos olhando para dentro da coluna "),e("code",[s._v("host")]),s._v(", que contém informações a respeito da máquina host em que o Nu está rodando, como nome do SO (sistema operacional), o nome de host, a CPU e outros dados mais. Vamos ver os nomes dos usuários do sistema:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get host.users\njonathan\n")])])]),e("p",[s._v('Nesse momento só tem um único usuário no sistema, chamado "jonathan". Note que nós podemos passar um caminho e não apenas o nome de uma coluna. O Nu vai seguir esse caminho até o dado correspondente na tabela.')]),s._v(" "),e("p",[s._v('Talvez você tenha notado mais alguma coisa de diferente. Ao invés de uma tabela, recebemos apenas um elemento simples: a string "jonathan". O Nu trabalha tanto com tabelas de dados como com strings, que são uma parte importante da interação com comandos externos ao Nu.')]),s._v(" "),e("p",[s._v("Vejamos como as strings funcionam fora do Nu. Vamos usar nosso exemplo anterior e executar o comando externo "),e("code",[s._v("echo")]),s._v(", presente na maioria dos SOs:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sys "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get host.users "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v("\njonathan\n")])])]),e("p",[s._v("Se isso lhe parece bastante similar ao que tínhamos anteriormente, você tem um olho afiado! É similar, mas com uma diferença importante: chamamos "),e("code",[s._v("echo")]),s._v(" com o valor retornado antes. Isso permite que passemos dados para o "),e("code",[s._v("echo")]),s._v(" fora do Nu (ou para qualquer outro comando de fora do Nu, como "),e("code",[s._v("git")]),s._v(", por exemplo).")]),s._v(" "),e("p",[e("em",[s._v("Nota: você pode obter um texto de ajuda para quaisquer comandos embutidos do Nu usando o comando "),e("code",[s._v("help")])]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" config\nConfiguration management.\nUsage:\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("subcommand"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nSubcommands:\n  config get -\n  config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -\n  config set_into -\n  config "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" -\n  config load -\n  config remove -\n  config path -\n\nFlags:\n  -h, --help: Display this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);