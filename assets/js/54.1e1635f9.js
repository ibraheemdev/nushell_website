(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{408:function(t,a,e){"use strict";e.r(a);var s=e(42),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定"}},[t._v("#")]),t._v(" 設定")]),t._v(" "),e("p",[t._v("Nuには、見た目や挙動を変更させるための内部的な変数があります。\n以下がそのリストです。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("変数")]),t._v(" "),e("th",[t._v("型")]),t._v(" "),e("th",[t._v("説明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("path")]),t._v(" "),e("td",[t._v("table of strings")]),t._v(" "),e("td",[t._v("バイナリーを検索するためのPATH")])]),t._v(" "),e("tr",[e("td",[t._v("env")]),t._v(" "),e("td",[t._v("row")]),t._v(" "),e("td",[t._v("外部コマンドに渡す環境変数")])]),t._v(" "),e("tr",[e("td",[t._v("ctrlc_exit")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("Ctrl-cを複数回おしたときにNuを終了するかどうか")])]),t._v(" "),e("tr",[e("td",[t._v("table_mode")]),t._v(" "),e("td",[t._v('"light" or other')]),t._v(" "),e("td",[t._v("軽量なテーブルを有効にする")])]),t._v(" "),e("tr",[e("td",[t._v("edit_mode")]),t._v(" "),e("td",[t._v('"vi" or "emacs"')]),t._v(" "),e("td",[t._v('行編集を"vi"または"emacs"モードに変更する')])])])]),t._v(" "),e("h2",{attrs:{id:"利用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用方法"}},[t._v("#")]),t._v(" 利用方法")]),t._v(" "),e("h3",{attrs:{id:"変数の設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#変数の設定"}},[t._v("#")]),t._v(" 変数の設定")]),t._v(" "),e("p",[t._v("これらの変数のいずれかを設定するには"),e("code",[t._v("config set")]),t._v(" コマンドを利用します。例えば")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('> config set edit_mode "vi"\n')])])]),e("h3",{attrs:{id:"パイプラインからの変数を設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#パイプラインからの変数を設定"}},[t._v("#")]),t._v(" パイプラインからの変数を設定")]),t._v(" "),e("p",[t._v("設定したい値をパイプラインを通じて設定することもできます。このためには"),e("code",[t._v("set_into")]),t._v("フラグを利用します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('> echo "bar" | config set_into foo\n')])])]),e("p",[t._v("この方法は、"),e("code",[t._v("env")]),t._v("や"),e("code",[t._v("path")]),t._v("変数を設定する際に便利です。")]),t._v(" "),e("h3",{attrs:{id:"すべての変数の表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#すべての変数の表示"}},[t._v("#")]),t._v(" すべての変数の表示")]),t._v(" "),e("p",[e("code",[t._v("config")]),t._v("コマンドを引数なしで実行すると現在の設定されている変数を表示します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config\n━━━━━━━━━━━┯━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━\n edit_mode │ env            │ path             │ table_mode \n───────────┼────────────────┼──────────────────┼────────────\n emacs     │ [table: 1 row] │ [table: 10 rows] │ normal \n━━━━━━━━━━━┷━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━\n")])])]),e("p",[t._v("注: もしまだ変数を設定していない場合、出力が空の場合があります。")]),t._v(" "),e("h3",{attrs:{id:"変数の取得"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#変数の取得"}},[t._v("#")]),t._v(" 変数の取得")]),t._v(" "),e("p",[e("code",[t._v("get")]),t._v("フラグを利用して特定の変数の値を取得できます。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config get edit_mode\n")])])]),e("h3",{attrs:{id:"変数の削除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#変数の削除"}},[t._v("#")]),t._v(" 変数の削除")]),t._v(" "),e("p",[t._v("変数を削除する場合、"),e("code",[t._v("remove")]),t._v("フラグを利用します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config remove edit_mode\n")])])]),e("h3",{attrs:{id:"設定全体のクリア"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定全体のクリア"}},[t._v("#")]),t._v(" 設定全体のクリア")]),t._v(" "),e("p",[t._v("設定全体をクリアして、最初からやりなおしたい場合は"),e("code",[t._v("--clear")]),t._v("フラグを利用できます。このコマンドを実行すると設定ファイルもクリアされるので注意してください。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config clear\n")])])]),e("h3",{attrs:{id:"設定が保存されている場所をみつける"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定が保存されている場所をみつける"}},[t._v("#")]),t._v(" 設定が保存されている場所をみつける")]),t._v(" "),e("p",[t._v("設定ファイルはデフォルトの場所から読み込まれます。この場所をみつけるには"),e("code",[t._v("-path")]),t._v("フラグを利用します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("config path\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n <value> \n───────────────────────────────────────\n /home/nusheller/.config/nu/config.toml \n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),e("h3",{attrs:{id:"ファイルから設定を読み込む"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ファイルから設定を読み込む"}},[t._v("#")]),t._v(" ファイルから設定を読み込む")]),t._v(" "),e("p",[t._v("デフォルトとは違う設定ファイルを読み込みたい場合は、"),e("code",[t._v("load")]),t._v(" パラメーターを利用します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config load myconfiguration.toml\n")])])]),e("h2",{attrs:{id:"nuをログインシェルとして設定する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuをログインシェルとして設定する"}},[t._v("#")]),t._v(" Nuをログインシェルとして設定する")]),t._v(" "),e("p",[t._v("Nuをログインシェルとして利用するには、"),e("code",[t._v("path")]),t._v("と"),e("code",[t._v("env")]),t._v("変数を設定する必要があります。これらによりログインシェルとして外部コマンドを実行するのに十分なサポートが得られます。")]),t._v(" "),e("p",[t._v("切り替える前に、Bash等の別のシェルからNuを実行します。そして次のコマンドで環境変数とPATHをシェルから取得します。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config set path $nu.path\n> config set env $nu.env\n")])])]),e("p",[t._v("0.7.2より以前のバージョンでは")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> config --set [path $nu:path]\n> config --set [env $nu:env]\n")])])]),e("p",[e("code",[t._v("$nu.path")]),t._v("および"),e("code",[t._v("$nu.env")]),t._v("にはそれぞれ、現在のPATHと環境変数がセットされています。これらをセットすると、のちにNuをログインシェルとして利用したさいに利用できるようになります。")]),t._v(" "),e("p",[t._v("次にいくつかのディストリビューションでは、Nuが"),e("code",[t._v("/etc/shells")]),t._v("のリストに含まれているかを確認する必要があります。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("❯ cat /etc/shells\n# /etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n/usr/bin/screen\n/usr/bin/fish\n/home/jonathan/.cargo/bin/nu\n")])])]),e("p",[t._v("これにより、"),e("code",[t._v("chsh")]),t._v("でNuをログインシェルとして設定できるようになります。ログアウト後、次回のログイン時にNuの素敵なプロンプトが表示されます。")]),t._v(" "),e("h2",{attrs:{id:"プロンプトの設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#プロンプトの設定"}},[t._v("#")]),t._v(" プロンプトの設定")]),t._v(" "),e("p",[t._v("現在、プロンプトの設定は"),e("a",{attrs:{href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"}},[t._v("starship"),e("OutboundLink")],1),t._v("プロンプトサポートつきでNuをインストールすることで可能になります。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("nushell on 📙 master [$] is 📦 v0.5.1 via 🦀 v1.40.0-nightly \n❯ \n")])])]),e("p",[t._v("Starshipは楽しくカラフルで驚くほど強力なプロンプトです。設定するには"),e("a",{attrs:{href:"https://starship.rs/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("starshipのドキュメント"),e("OutboundLink")],1),t._v("の手順にしたがってください。")])])}),[],!1,null,null,null);a.default=v.exports}}]);