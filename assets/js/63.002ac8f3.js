(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{417:function(e,a,o){"use strict";o.r(a);var n=o(42),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"comandos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#comandos"}},[e._v("#")]),e._v(" Comandos")]),e._v(" "),o("p",[e._v("Los comandos son los bloques de construcción para las tuberías (pipeline) en Nu. Realizan la acción de la tubería, ya sea creando datos, cambiando datos mientras fluye desde entradas y salidas, o viendo los datos una vez que salen de la tubería. Hay dos tipos de comandos: comandos internos, son aquellos contruídos para ejecución interna de Nu, y comandos externos, comandos que se encuentra fuera de Nu y se comunican con "),o("code",[e._v("stdin")]),e._v(" / "),o("code",[e._v("stdout")]),e._v(" de estilo Unix estándar.")]),e._v(" "),o("h2",{attrs:{id:"comandos-internos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#comandos-internos"}},[e._v("#")]),e._v(" Comandos internos")]),e._v(" "),o("p",[e._v("Todos los comandos dentro de Nu, incluyendo complementos (plugins), son comandos internos. Comandos internos se comunican entre ellos usando streams de "),o("code",[e._v("Tagged<Value>")]),e._v(" y ShellError (TODO: Enlace a tipos de datos)")]),e._v(" "),o("h3",{attrs:{id:"firma"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#firma"}},[e._v("#")]),e._v(" Firma")]),e._v(" "),o("p",[e._v("Los comandos utilizan verificación de tipado ligero para garantizar que los argumentos pasados puedan ser manejados correctamente. Para habilitar esto, cada comando proporciona una firma que le dice a Nu:")]),e._v(" "),o("ul",[o("li",[e._v("El nombre del comando")]),e._v(" "),o("li",[e._v("Los argumentos posicionales (ej, en "),o("code",[e._v("start x y")]),e._v(" la "),o("code",[e._v("x")]),e._v(" y la "),o("code",[e._v("y")]),e._v(" son argumentos posicionales)")]),e._v(" "),o("li",[e._v("Si el comando")]),e._v(" "),o("li",[e._v("Si el comando toma un número adicional ilimitado de argumentos posicionales (ej, "),o("code",[e._v("start a1 a2 a3 ... a99 a100")]),e._v(")")]),e._v(" "),o("li",[e._v("Los argumentos nombrados (ej, "),o("code",[e._v("start --now")]),e._v(")")]),e._v(" "),o("li",[e._v("Si el comando es un filtro o sink")])]),e._v(" "),o("p",[e._v("Con esta información, se puede verificar problemas potenciales antes de la ejecución de la tubería.")]),e._v(" "),o("h2",{attrs:{id:"comandos-externos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#comandos-externos"}},[e._v("#")]),e._v(" Comandos externos")]),e._v(" "),o("p",[e._v("Un comando externo es cualquier comando que no forma parte de los comandos o complementos (plugins) integrados de Nu. Si se llama un comando que Nu desconoce, llamará al entorno subyacente con los argumentos suministrados para intentar el comando como un programa externo.")]),e._v(" "),o("h2",{attrs:{id:"comunicacion-entre-comandos-internos-y-externos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#comunicacion-entre-comandos-internos-y-externos"}},[e._v("#")]),e._v(" Comunicación entre comandos internos y externos")]),e._v(" "),o("h3",{attrs:{id:"interno-a-interno"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interno-a-interno"}},[e._v("#")]),e._v(" Interno a interno")]),e._v(" "),o("p",[e._v("Los comandos internos se comunican entre ellos usando el stream completo que proporciona Nu, que incluye todos los tipos de archivos integrados. Esto incluye la comunicación entre comandos internos y complementos (en ambas direcciones).")]),e._v(" "),o("h3",{attrs:{id:"intero-a-externo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intero-a-externo"}},[e._v("#")]),e._v(" Intero a externo")]),e._v(" "),o("p",[e._v("Los comandos internos que envían texto a comandos externos necesitan tener cadenas de texto preparadas con anticipación. Si un objeto es enviado directamente a un comando externo, se considerará como un error ya que no hay forma de inferir cómo los datos estructurados serán representados para el programa externo. Se espera que el usuario se limite a una simple celda de datos o usar uno de los convertidores (como "),o("code",[e._v("to-json")]),e._v(") para convertir la tabla en una representación de cadena.")]),e._v(" "),o("p",[e._v("El comando externo se abre para que si entrada estándar "),o("code",[e._v("stdin")]),e._v(" sea redireccionada, de modo que los datos se puedan enviar a él.")]),e._v(" "),o("h3",{attrs:{id:"externo-a-interno"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#externo-a-interno"}},[e._v("#")]),e._v(" Externo a interno")]),e._v(" "),o("p",[e._v("Los comandos externos envían una serie de cadenas a través de su salida estándar "),o("code",[e._v("stdout")]),e._v(". Estas cadenas se leen en la tubería y se ponen a disposición al comando interno que sigue en la tubería, o se muestran al usuario si el comando externo es el último paso en la tubería.")]),e._v(" "),o("h3",{attrs:{id:"externo-a-externo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#externo-a-externo"}},[e._v("#")]),e._v(" Externo a externo")]),e._v(" "),o("p",[e._v("Los comandos externos se comunican entre sí a través de estándar "),o("code",[e._v("stdin")]),e._v("/"),o("code",[e._v("stdout")]),e._v(". Como Nu detectará esta situación, redirigirá la salida estándar "),o("code",[e._v("stdout")]),e._v(" del primer comando a la entrada estándar "),o("code",[e._v("stdin")]),e._v(" del siguiente comando externo. De esta forma, se mantiene el comportamiento esperado de una tubería de shell entre comandos externos.")])])}),[],!1,null,null,null);a.default=s.exports}}]);