(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{390:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"shells"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shells"}},[e._v("#")]),e._v(" Shells")]),e._v(" "),s("p",[e._v("Perhaps a bit unique to Nu is the concept of "),s("code",[e._v("shells")]),e._v(", though the idea of working in multiple places at the same time in a shell is fairly common (via pushd/popd, screen, and more). What perhaps makes Nu a little different is that its "),s("code",[e._v("shells")]),e._v(" concept is both multiple platform, and that it works both on the filesystem and inside of values.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" The concept of a Value Shell is one of the many open design points of Nu and is subject to change in the future.")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("Shell")]),e._v(" is a filesystem-like interface that describes a set of common file operations and how to perform them, including: "),s("code",[e._v("cd")]),e._v(", "),s("code",[e._v("ls")]),e._v(", "),s("code",[e._v("mkdir")]),e._v(", "),s("code",[e._v("rm")]),e._v(", "),s("code",[e._v("cp")]),e._v(", and "),s("code",[e._v("mv")]),e._v(". Not all shell types support all file operations, but the file operations attempt to describe much of what a shell would want to perform.")]),e._v(" "),s("p",[e._v("The two types of Shells currently supported are FilesystemShell and ValueShell, though other shells have been discussed.")]),e._v(" "),s("h2",{attrs:{id:"filesystem-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filesystem-shell"}},[e._v("#")]),e._v(" Filesystem Shell")]),e._v(" "),s("p",[e._v("The filesystem shell is the shell that works directly with a filesystem and a corresponding paths. By default, Nu opens with a single filesystem shell in the current working directory.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> shells\n━━━┯━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━\n   │ name       │ path \n───┼────────────┼────────────────\n X │ filesystem │ /home/jonathan \n━━━┷━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━\n")])])]),s("p",[e._v("We can add a new filesystem shell to this list by using the "),s("code",[e._v("enter")]),e._v(" command. This will add a new shell+path combination to our ring buffer of shells.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> enter Source\n/home/jonathan/Source> shells\n━━━┯━━━┯━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━\n # │   │ name       │ path \n───┼───┼────────────┼───────────────────────\n 0 │   │ filesystem │ /home/jonathan \n 1 │ X │ filesystem │ /home/jonathan/Source \n━━━┷━━━┷━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),s("p",[e._v("In this way, you can support jumping between working directories. Note that currently Nu doesn't support jumping between running applications, only working directories.")]),e._v(" "),s("p",[s("strong",[e._v("Limitations")])]),e._v(" "),s("p",[e._v("There are some limitations of the filesystem shell in its current state of development. One such limitation is that you can not easily add multiple new paths to the ring buffer at a time (for example: "),s("code",[e._v("enter $it")]),e._v("), as each new addition to the ring buffer will change the current directory. This limitation is not inherent in the design of the ring buffer and a future design may wish to separate "),s("code",[e._v("enter")]),e._v(" from the changing of the current working directory.")]),e._v(" "),s("h2",{attrs:{id:"value-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value-shell"}},[e._v("#")]),e._v(" Value Shell")]),e._v(" "),s("p",[e._v("The Value Shell gives you the ability to explore the inside of a structured value by loading a file and treating its contents as if it were a filesystem. This allows you to explore this data through one of the shells in the ring buffer.")]),e._v(" "),s("p",[e._v("The current implementation of the Value Shell is limited to the read-only subset of file operations, namely: "),s("code",[e._v("cd")]),e._v(" and "),s("code",[e._v("ls")]),e._v(". Future designs may wish to explore this further, but there are open design questions around mutating an "),s("code",[e._v("enter")]),e._v("ed file and how the rest of the environment observes these changes (e.g. what happens if you enter the file being used by "),s("code",[e._v("config")]),e._v("?)")]),e._v(" "),s("p",[e._v("In a Value Shell, the "),s("code",[e._v("cd")]),e._v(' command changes the path that is being observed as the "current working directory" in the object, but in actuality is the field path. This means that the path "/abc/def" is the path "abc.def" outside of the Value Shell.')])])}),[],!1,null,null,null);t.default=n.exports}}]);