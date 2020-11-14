(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{377:function(e,t,a){e.exports=a.p+"assets/img/0_12_0_jupyter.7d8d4566.png"},417:function(e,t,a){"use strict";a.r(t);var n=a(42),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nushell-0-12-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-12-0"}},[e._v("#")]),e._v(" Nushell 0.12.0")]),e._v(" "),n("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),n("p",[e._v("We're excited to release version 0.12.0 of Nu!")]),e._v(" "),n("h1",{attrs:{id:"where-to-get-it"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),n("p",[e._v("Nu 0.12.0 is available as "),n("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.12.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),n("OutboundLink")],1),e._v(" or from "),n("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),n("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),n("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),n("p",[e._v("If you want more goodies, you can install "),n("code",[e._v("cargo install nu --features=stable")]),e._v(".")]),e._v(" "),n("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),n("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),n("h1",{attrs:{id:"what-s-new"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's new")]),e._v(" "),n("h2",{attrs:{id:"automatic-cd-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#automatic-cd-jonathandturner"}},[e._v("#")]),e._v(" Automatic "),n("code",[e._v("cd")]),e._v(" (jonathandturner)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("nushell on 📙 master is 📦 v0.12.0 via 🦀 v1.42.0\n❯ docs\nnushell/docs on 📙 master\n❯ ..\nnushell on 📙 master is 📦 v0.12.0 via 🦀 v1.42.0\n")])])]),n("p",[e._v("Fish and Windows users rejoice, you can now "),n("code",[e._v("cd")]),e._v(" to a directory or drive by typing its name in the shell.  This also allows Windows users to change drives by giving just the drive name. Now, when you use the drive letter, we'll switch drives and return you to your previous working directory on that drive (eg "),n("code",[e._v("D:")]),e._v(" will change to the D: drive and "),n("code",[e._v("cd")]),e._v(" to the path you had been at previousy).")]),e._v(" "),n("h2",{attrs:{id:"type-inference-andrasio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-inference-andrasio"}},[e._v("#")]),e._v(" Type inference (andrasio)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ open tests/fixtures/formats//caco3_plastics.csv | get cif_per_net_weight\n───┬─────────\n # │ <value>\n───┼─────────\n 0 │  0.2300\n 1 │  0.3100\n 2 │  0.1400\n 3 │  0.2300\n 4 │  0.2100\n 5 │  0.2800\n 6 │  0.3000\n 7 │  0.2500\n 8 │  0.2800\n───┴─────────\nnushell on 📙 master is 📦 v0.12.0 via 🦀 v1.42.0\n❯ open tests/fixtures/formats//caco3_plastics.csv | get cif_per_net_weight | sum\n2.23\n")])])]),n("p",[e._v("We've been hard at work at improving how we read in unstructured data. In this release, you'll see the beginning of type inference as data is read in. In the above example, you can see how we now autodetect decimal numbers and then can later sum them together.")]),e._v(" "),n("h2",{attrs:{id:"jupyter-notebook-support-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jupyter-notebook-support-jonathandturner"}},[e._v("#")]),e._v(" Jupyter notebook support (jonathandturner)")]),e._v(" "),n("p",[n("img",{attrs:{src:a(377),alt:"image of Nu in Jupyter notebook"}})]),e._v(" "),n("p",[e._v("Nu's core design goal is that it should be easier to work with your system and your data. In this release, we take a step beyond being just a shell with "),n("a",{attrs:{href:"https://github.com/nushell/nu_jupyter",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jupyter notebook support"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"ls-all-quebin31"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ls-all-quebin31"}},[e._v("#")]),e._v(" "),n("code",[e._v("ls --all")]),e._v(" (quebin31)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ ls\n────┬─────────────────────────────────────────────────────┬──────┬──────────┬──────────────\n #  │                        name                         │ type │   size   │   modified\n────┼─────────────────────────────────────────────────────┼──────┼──────────┼──────────────\n  0 │ CODE_OF_CONDUCT.md                                  │ File │   3.4 KB │ 5 months ago\n  1 │ Cargo.lock                                          │ File │ 104.5 KB │ 23 mins ago\n  2 │ Cargo.toml                                          │ File │   5.5 KB │ 23 mins ago\n...\n\n❯ ls --all\n────┬─────────────────────────────────────────────────────┬──────┬──────────┬──────────────\n #  │                        name                         │ type │   size   │   modified\n────┼─────────────────────────────────────────────────────┼──────┼──────────┼──────────────\n  0 │ .azure                                              │ Dir  │          │ 2 weeks ago\n  1 │ .cargo                                              │ Dir  │          │ 2 weeks ago\n  2 │ .circleci                                           │ Dir  │          │ 2 weeks ago\n...\n")])])]),n("p",[e._v("With 0.12.0, you can now show hidden files when listing directory contents with "),n("code",[e._v("ls")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"from-ics-and-from-vcf-pulpdrew"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#from-ics-and-from-vcf-pulpdrew"}},[e._v("#")]),e._v(" "),n("code",[e._v("from-ics")]),e._v(" and "),n("code",[e._v("from-vcf")]),e._v(" (pulpdrew)")]),e._v(" "),n("p",[e._v("The file support contines to improve, as we add support for vCard and iCal file formats.")]),e._v(" "),n("h2",{attrs:{id:"to-md-and-to-html-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#to-md-and-to-html-jonathandturner"}},[e._v("#")]),e._v(" "),n("code",[e._v("to-md")]),e._v(" and "),n("code",[e._v("to-html")]),e._v(" (jonathandturner)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ ls | to-md\n|name|type|size|modified|\n|-|-|-|-|\n|CODE_OF_CONDUCT.md|File|3.4 KB|5 months ago|\n|Cargo.lock|File|104.5 KB|21 mins ago|\n")])])]),n("p",[e._v("You can now output to markdown and html using the new converters.")]),e._v(" "),n("h2",{attrs:{id:"headers-samhedin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#headers-samhedin"}},[e._v("#")]),e._v(" "),n("code",[e._v("headers")]),e._v(" (samhedin)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ open tests/fixtures/formats/sample_data.ods | get SalesOrders\n────┬────────────┬─────────┬──────────┬─────────┬─────────┬───────────┬───────────\n #  │  Column0   │ Column1 │ Column2  │ Column3 │ Column4 │  Column5  │  Column6\n────┼────────────┼─────────┼──────────┼─────────┼─────────┼───────────┼───────────\n  0 │ OrderDate  │ Region  │ Rep      │ Item    │ Units   │ Unit Cost │ Total\n  1 │ 2018-01-06 │ East    │ Jones    │ Pencil  │ 95.0000 │    1.9900 │  189.0500\n\n❯ open tests/fixtures/formats/sample_data.ods | get SalesOrders | headers\n────┬────────────┬─────────┬──────────┬─────────┬─────────┬───────────┬───────────\n #  │ OrderDate  │ Region  │   Rep    │  Item   │  Units  │ Unit Cost │   Total\n────┼────────────┼─────────┼──────────┼─────────┼─────────┼───────────┼───────────\n  0 │ 2018-01-06 │ East    │ Jones    │ Pencil  │ 95.0000 │    1.9900 │  189.0500\n  1 │ 2018-01-23 │ Central │ Kivell   │ Binder  │ 50.0000 │   19.9900 │  999.4999\n")])])]),n("p",[e._v("Sometimes when working with data, you've managed to read in columns of data and notice that the first row is the headers you want. Previously, this required a lot of twiddling to lift the row into being the header. With 0.12.0, this has become much simpler with the "),n("code",[e._v("header")]),e._v(" command.")]),e._v(" "),n("h2",{attrs:{id:"ps-full-mode-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ps-full-mode-jonathandturner"}},[e._v("#")]),e._v(" "),n("code",[e._v("ps --full")]),e._v(" mode (jonathandturner)")]),e._v(" "),n("p",[e._v("We're extending the information you can get back from "),n("code",[e._v("ps")]),e._v(".  You are now able to get the original commandline and more for each process using the new "),n("code",[e._v("ps --full")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"rm-can-now-take-multiple-arguments-to-remove-multiple-files-at-once-pulpdrew"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rm-can-now-take-multiple-arguments-to-remove-multiple-files-at-once-pulpdrew"}},[e._v("#")]),e._v(" "),n("code",[e._v("rm")]),e._v(" can now take multiple arguments to remove multiple files at once (pulpdrew)")]),e._v(" "),n("p",[e._v("Sometimes we're missing a feature and you wonder how we made it that long 😄.  In this release, you can now pass multiple files to "),n("code",[e._v("rm")]),e._v(" for deletion.")]),e._v(" "),n("h2",{attrs:{id:"row-rotation-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#row-rotation-jonathandturner"}},[e._v("#")]),e._v(" Row rotation (jonathandturner)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("❯ sys\n─────────┬─────────────────────────────────────────\n host    │ [row 7 columns]\n cpu     │ [row cores current ghz max ghz min ghz]\n disks   │ [table 9 rows]\n mem     │ [row free swap free swap total total]\n temp    │ [table 8 rows]\n net     │ [table 4 rows]\n battery │ [table 1 rows]\n─────────┴─────────────────────────────────────────\n")])])]),n("p",[e._v("When working with data with lots of columns, it can sometimes be a pain to watch it print to the screen only to see that the data is missing columns because they won't fit.  In this version, we're experimenting with a way to help this by auto-rotating a row when it is printed by itself. This will allow more of the row to fit into the screen.")]),e._v(" "),n("h2",{attrs:{id:"configurable-table-headers-amanita-muscaria"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configurable-table-headers-amanita-muscaria"}},[e._v("#")]),e._v(" Configurable table headers (Amanita-muscaria)")]),e._v(" "),n("p",[e._v("You may have noticed that the headers in the above examples were centered.  How's that for sneaking a feature in?")]),e._v(" "),n("p",[e._v("With 0.12.0, you can configure your table look a bit more by changing how the headers are displayed.  Here are the new "),n("code",[e._v("config")]),e._v(" settings:")]),e._v(" "),n("ul",[n("li",[e._v("header_color: Available colors are from term::color module")]),e._v(" "),n("li",[e._v("header_align: Sets header alignment center/left/right")]),e._v(" "),n("li",[e._v("header_style: Sets style bold, underlined, italic. More than one can be used")])]),e._v(" "),n("h2",{attrs:{id:"lots-of-bugfixes-improvements-sosthene-guedon-quebin31-neuronull-andrasio-thegedge-vsoch-jonathandturner-jonstodle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lots-of-bugfixes-improvements-sosthene-guedon-quebin31-neuronull-andrasio-thegedge-vsoch-jonathandturner-jonstodle"}},[e._v("#")]),e._v(" Lots of bugfixes/improvements (Sosthene-Guedon, quebin31, neuronull, andrasio, thegedge, vsoch, jonathandturner, jonstodle)")]),e._v(" "),n("p",[e._v("Open no longer fails silently, improved CSV opening, improve canonicalize of filenames, "),n("code",[e._v("sys")]),e._v(" now properly says user sessions, moved "),n("code",[e._v("shuffle")]),e._v(" to being an internal command, relaxed file modes, cleaned up "),n("code",[e._v("which")]),e._v(" implementation, fix Docker build matrix, streams can now be interrupted, improvements to "),n("code",[e._v("du")]),e._v(", "),n("code",[e._v("get")]),e._v(" now will remove blank values for easier processing, respect CARGO_TARGET_DIR when set, allow "),n("code",[e._v("..")]),e._v(" and "),n("code",[e._v("/")]),e._v(" to be mv targets,")]),e._v(" "),n("h2",{attrs:{id:"documentation-improvements-pulpdrew-nickgerace-waldyrious-kloun"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#documentation-improvements-pulpdrew-nickgerace-waldyrious-kloun"}},[e._v("#")]),e._v(" Documentation improvements (pulpdrew, nickgerace, waldyrious, kloun)")]),e._v(" "),n("p",[e._v("Docs for "),n("code",[e._v("from-ics")]),e._v(" and "),n("code",[e._v("from-vcf")]),e._v(", quickstart section for Docker users, docs for "),n("code",[e._v("skip")]),e._v(" and "),n("code",[e._v("skip-while")]),e._v(", typos and whitespace fixes, typo in "),n("code",[e._v("calc")]),e._v(" docs")]),e._v(" "),n("h1",{attrs:{id:"looking-ahead"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),n("p",[e._v('"Just keep going!" as Yehuda Katz would say, and we intend to. Lots of internal improvements are coming, and of course aliases which has become a daily request.')]),e._v(" "),n("p",[e._v("We'd also like to hear from you. Let us know what would make Nu work better for your workflows, drop us a line in "),n("a",{attrs:{href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord"),n("OutboundLink")],1),e._v(" or "),n("a",{attrs:{href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),n("OutboundLink")],1),e._v(". We'd love to hear from you!")])])}),[],!1,null,null,null);t.default=o.exports}}]);