(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{428:function(e,a,s){"use strict";s.r(a);var o=s(42),t=Object(o.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"metadados"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metadados"}},[e._v("#")]),e._v(" Metadados")]),e._v(" "),s("p",[e._v("Usando o Nu vocë pode se deparar com momentos em que sente como se houvesse algo a mais acontecendo nos bastidores. Por exemplo, digamos que vocë vai tentar abrir um arquivo mas se esquece que ele é suportado pelo Nu e tenta convertê-lo novamente:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" Cargo.toml "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" from toml\nerror: Expected a string from pipeline\n- shell:1:18\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" Cargo.toml "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" from toml\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("                   ^^^^^^^^^ requires string input\n- shell:1:5\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" Cargo.toml "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" from toml\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("      ---------- object originates from here\n")])])]),s("p",[e._v("A mensagem de erro nos diz não só que o que passamos para o "),s("code",[e._v("from toml")]),e._v(" não era uma string, mas também de onde o valor veio originalmente. Como o Nu sabe isso?")]),e._v(" "),s("p",[e._v("Valores que fluem pelo pipeline do Nu normalmente trazem consigo um conjunto adicional de informações, ou metadados, conhecidos como tags, semnelhantes às etiquetas penduradas nos produtos de uma loja. Essas tags não afetam os dados, mas proporcionam ao Nu uma forma de aprimorar a experiência de se trabalhar com esses dados.")]),e._v(" "),s("p",[e._v("Vamos executar o comando "),s("code",[e._v("open")]),e._v(" de novo, mas, dessa vez, vamos olhar as tags que ele retorna:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" Cargo.toml "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" tags\n----------+------------------------------------------\n span     "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" origin \n----------+------------------------------------------\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" /home/jonathan/Source/nushell/Cargo.toml \n----------+------------------------------------------\n")])])]),s("p",[e._v("Atualmente, rastreamos dois pedaços de metadados dos valores no pipeline. Você pode observar que temos a origem, que nos dá a localização de onde os dados foram carregados, o que pode ajudar o Nu a entender melhor como apresentá-los.")]),e._v(" "),s("p",[e._v("Há também um coluna intervalo (span). Vamos ver mais de perto:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),e._v(" Cargo.toml "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" tags "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" get span\n-------+-----\n start "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" end \n-------+-----\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" \n-------+-----\n")])])]),s("p",[e._v('O início (start) e fim (end) do intervalo aqui se referem a onde o sublinhado ficará na linha da mensagem de erro. Se você contar até depois do 5 e então até 15, verá que esse intervalo coincide com o nome do arquivo "Cargo.toml". É assim que o erro que vimos antes sabe onde sublinhar a mensagem.')])])}),[],!1,null,null,null);a.default=t.exports}}]);