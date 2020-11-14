(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{467:function(a,t,e){"use strict";e.r(t);var v=e(42),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"算数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算数"}},[a._v("#")]),a._v(" 算数")]),a._v(" "),e("p",[a._v("有时当你在做一个任务时，需要将一些数加起来。 Nu 提供了一些基本的算数操作：")]),a._v(" "),e("p",[a._v("要进入 「算数模式」，你需要用 "),e("code",[a._v("=")]),a._v(" 作为命令的开头。这让 Nu 知道你将要使用一些操作符。一些命令，例如 "),e("code",[a._v("where")]),a._v(" 将会自动为你执行此操作，因此不必主动去做。")]),a._v(" "),e("h2",{attrs:{id:"加减乘除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加减乘除"}},[a._v("#")]),a._v(" 加减乘除")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> = 1 + 3\n4\n")])])]),e("p",[a._v("在 Nu，你可以使用通常的加减乘除运算符 "),e("code",[a._v("+-*/")]),a._v("。运算符的优先级遵循惯例，所以 "),e("code",[a._v("1 + 2 * 3")]),a._v(" 和 "),e("code",[a._v("1 + (2 * 3)")]),a._v(" 等效。也可以用括号手动调整优先级。")]),a._v(" "),e("h2",{attrs:{id:"括号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#括号"}},[a._v("#")]),a._v(" 括号")]),a._v(" "),e("p",[a._v("在算数模式中可以使用括号来将表达式分组，这允许你手动将某个表达式的运算优先级提高，例如 "),e("code",[a._v("(1 + 2) * 3")]),a._v(" 中的加法表达式的优先级将高于乘法。")]),a._v(" "),e("h2",{attrs:{id:"in-和-not-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in-和-not-in"}},[a._v("#")]),a._v(" "),e("code",[a._v("in")]),a._v(" 和 "),e("code",[a._v("not-in")])]),a._v(" "),e("p",[a._v("你可以使用 "),e("code",[a._v("in")]),a._v(" 和 "),e("code",[a._v("not-in")]),a._v(" 运算符来检查某个值是否在一个集合中。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> = 1 in [1 2 3]\ntrue\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> = 1 not-in [1 2 3]\nfalse\n")])])]),e("h2",{attrs:{id:"和"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#和"}},[a._v("#")]),a._v(" =~ 和 !~")]),a._v(" "),e("p",[a._v("你可以使用 "),e("code",[a._v("=~")]),a._v(" 和 "),e("code",[a._v("!~")]),a._v(" 来检查某个字符串是否是另一个字符串的子串。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> = "foobar" =~ "foo"\ntrue\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('> = "foobar" !~ "baz"\ntrue\n')])])]),e("h2",{attrs:{id:"比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[a._v("#")]),a._v(" 比较")]),a._v(" "),e("p",[a._v("以下是可用的比较运算：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("<")]),a._v(" - 小于")]),a._v(" "),e("li",[e("code",[a._v("<=")]),a._v(" - 小于等于（不大于）")]),a._v(" "),e("li",[e("code",[a._v(">")]),a._v(" - 大于")]),a._v(" "),e("li",[e("code",[a._v(">=")]),a._v(" - 大于等于（不小于）")]),a._v(" "),e("li",[e("code",[a._v("==")]),a._v(" - 等于")]),a._v(" "),e("li",[e("code",[a._v("!=")]),a._v(" - 不等于")])]),a._v(" "),e("h2",{attrs:{id:"复合运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复合运算符"}},[a._v("#")]),a._v(" 复合运算符")]),a._v(" "),e("p",[a._v("Nushell 也提供 "),e("code",[a._v("&&")]),a._v(" 和 "),e("code",[a._v("||")]),a._v(" 来将两个返回布尔值的运算连接在一起，分别表示 「且」和 「或」。例如 "),e("code",[a._v('ls | where name in ["one" "two" "three"] && size > 10kb')]),a._v("。")])])}),[],!1,null,null,null);t.default=s.exports}}]);