(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{326:function(t,s,e){},355:function(t,s,e){"use strict";var n=e(0),r=e(20),a=e(11),i=e(1),o=e(30),c=[],l=c.sort,u=i((function(){c.sort(void 0)})),p=i((function(){c.sort(null)})),f=o("sort");n({target:"Array",proto:!0,forced:u||!p||!f},{sort:function(t){return void 0===t?l.call(a(this)):l.call(a(this),r(t))}})},356:function(t,s,e){"use strict";e(326)},363:function(t,s,e){"use strict";e.r(s);e(23),e(167),e(44),e(355),e(104);var n={name:"BlogPosts",computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.indexOf("/blog/")>=0&&"/blog/"!=t.path})).sort((function(t,s){return new Date(s.path.slice(6,16))-new Date(t.path.slice(6,16))}))}}},r=(e(356),e(42)),a=Object(r.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.posts,(function(s){return e("div",[e("section",{staticClass:"blog-post"},[e("time",{staticClass:"published"},[t._v(t._s(s.path.slice(6,16)))]),t._v(" "),e("h2",{staticClass:"title"},[e("a",{staticClass:"link",attrs:{href:s.path}},[t._v(t._s(s.title))])]),t._v(" "),s.frontmatter.excerpt?e("p",{staticClass:"excerpt"},[t._v("\n        "+t._s(s.frontmatter.excerpt)+"\n      ")]):t._e(),t._v(" "),e("a",{staticClass:"read-more",attrs:{href:s.path}},[t._v("\n        Read More →")])])])})),0)}),[],!1,null,"9e5d66fe",null);s.default=a.exports}}]);