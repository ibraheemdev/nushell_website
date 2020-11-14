(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{387:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"types-of-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types-of-data"}},[e._v("#")]),e._v(" Types of data")]),e._v(" "),t("p",[e._v("Traditionally, Unix shell commands have communicated with each other using strings of text. One command would output text via standard out (often abbreviated 'stdout') and the other would read in text via standard in (or 'stdin'). In this way, the two commands could communicate.")]),e._v(" "),t("p",[e._v("We can think of this kind of communication as string-based.")]),e._v(" "),t("p",[e._v("Nu embraces this approach for its commands and grows it to include other kinds of data.  Currently, Nu supports two kinds of data types: simple and structured.")]),e._v(" "),t("h2",{attrs:{id:"simple-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-data"}},[e._v("#")]),e._v(" Simple data")]),e._v(" "),t("p",[e._v("Like many programming languages, Nu models data using a set of simple and structured data types. Simple data types include integers, floats, strings, booleans, dates, and paths. It also includes a special type for filesizes.")]),e._v(" "),t("h3",{attrs:{id:"integers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integers"}},[e._v("#")]),e._v(" Integers")]),e._v(" "),t("p",[e._v("Integers (or round) numbers. Examples include 1, 5, and 100.")]),e._v(" "),t("h3",{attrs:{id:"decimal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decimal"}},[e._v("#")]),e._v(" Decimal")]),e._v(" "),t("p",[e._v("Decimal numbers are numbers with some fractional component. Examples include 1.5, 2.0, and 15.333.")]),e._v(" "),t("h3",{attrs:{id:"strings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#strings"}},[e._v("#")]),e._v(" Strings")]),e._v(" "),t("p",[e._v('Strings are the fundamental way of representing text. They are quoted using double quotes. Examples include "Fred", "myname.txt", and "Lynchburg, VA".')]),e._v(" "),t("p",[e._v("Strings in Nu are Unicode aware by default, so you can pass UTF-8 text with ease.")]),e._v(" "),t("h3",{attrs:{id:"lines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lines"}},[e._v("#")]),e._v(" Lines")]),e._v(" "),t("p",[e._v("Lines are strings with an implied OS-dependent line ending. When used, the OS-specific line ending is used.")]),e._v(" "),t("h3",{attrs:{id:"column-paths"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-paths"}},[e._v("#")]),e._v(" Column paths")]),e._v(" "),t("p",[e._v("Column paths are a path through the table to a specific sub-table, column, row, or cell.")]),e._v(" "),t("p",[e._v("Eg) The value "),t("code",[e._v("foo.0.bar")]),e._v(" in "),t("code",[e._v("open data.toml | get foo.0.bar")])]),e._v(" "),t("h3",{attrs:{id:"patterns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[e._v("#")]),e._v(" Patterns")]),e._v(" "),t("p",[e._v('Patterns, sometimes called "glob" patterns, are a way of matching filenames often used in shells.  Globs contain '),t("code",[e._v("*")]),e._v(" to mean anything can match here, or "),t("code",[e._v("?")]),e._v(" to mean a single character can match here.")]),e._v(" "),t("p",[e._v("Eg) The value "),t("code",[e._v("test*")]),e._v(" in "),t("code",[e._v("ls test*")]),e._v(" is a pattern")]),e._v(" "),t("h3",{attrs:{id:"booleans"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#booleans"}},[e._v("#")]),e._v(" Booleans")]),e._v(" "),t("p",[e._v("Booleans are the state of being true or false. Rather than writing the value directly, it is often a result of a comparison.")]),e._v(" "),t("p",[e._v("The two values of booleans are "),t("code",[e._v("$true")]),e._v(" and "),t("code",[e._v("$false")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"dates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dates"}},[e._v("#")]),e._v(" Dates")]),e._v(" "),t("p",[e._v("Dates and times are held together in the Date value type. Date values used by the system are timezone-aware, and by default use the UTC timezone.")]),e._v(" "),t("h3",{attrs:{id:"duration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[e._v("#")]),e._v(" Duration")]),e._v(" "),t("p",[e._v("Durations represent a length of time.  A second, 5 weeks, and a year are all durations.")]),e._v(" "),t("p",[e._v("Eg) "),t("code",[e._v("1w")]),e._v(" is the duration of one week.")]),e._v(" "),t("p",[e._v("This chart shows all durations currently supported:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Duration")]),e._v(" "),t("th",[e._v("Length")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1sec")]),e._v(" "),t("td",[e._v("one second")])]),e._v(" "),t("tr",[t("td",[e._v("1min")]),e._v(" "),t("td",[e._v("one minute")])]),e._v(" "),t("tr",[t("td",[e._v("1hr")]),e._v(" "),t("td",[e._v("one hour")])]),e._v(" "),t("tr",[t("td",[e._v("1day")]),e._v(" "),t("td",[e._v("one day")])]),e._v(" "),t("tr",[t("td",[e._v("1wk")]),e._v(" "),t("td",[e._v("one week")])]),e._v(" "),t("tr",[t("td",[e._v("1mon")]),e._v(" "),t("td",[e._v("one month")])]),e._v(" "),t("tr",[t("td",[e._v("1yr")]),e._v(" "),t("td",[e._v("one year")])])])]),e._v(" "),t("h3",{attrs:{id:"ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ranges"}},[e._v("#")]),e._v(" Ranges")]),e._v(" "),t("p",[e._v("You can also describe a range of values. Often, you might use this to describe numbers between a start and end number.")]),e._v(" "),t("p",[e._v("eg) "),t("code",[e._v("ls | range 1..4")])]),e._v(" "),t("h3",{attrs:{id:"paths"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paths"}},[e._v("#")]),e._v(" Paths")]),e._v(" "),t("p",[e._v("Paths are a platform-independent way of representing a filepath in the given OS. Examples include /usr/bin and C:\\Users\\file.txt.")]),e._v(" "),t("h3",{attrs:{id:"bytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bytes"}},[e._v("#")]),e._v(" Bytes")]),e._v(" "),t("p",[e._v("Filesizes are held in a special integer type called bytes. Examples include "),t("code",[e._v("100")]),e._v(", "),t("code",[e._v("15kb")]),e._v(", and "),t("code",[e._v("100mb")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"binary-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binary-data"}},[e._v("#")]),e._v(" Binary data")]),e._v(" "),t("p",[e._v("Binary data, like the data from an image file, is a group of raw bytes.")]),e._v(" "),t("h2",{attrs:{id:"structured-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structured-data"}},[e._v("#")]),e._v(" Structured data")]),e._v(" "),t("p",[e._v("Structured data builds from the simple data. For example, instead of a single integer, structured data gives us a way to represent multiple integers in the same value. Here's a list of the currently supported structured data types: rows, lists, and blocks.")]),e._v(" "),t("h3",{attrs:{id:"rows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[e._v("#")]),e._v(" Rows")]),e._v(" "),t("p",[e._v("The row data type represents what you would see in one row of data in the table. It has different elements of data, and each element of data is given a column name.")]),e._v(" "),t("h3",{attrs:{id:"lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lists"}},[e._v("#")]),e._v(" Lists")]),e._v(" "),t("p",[e._v('Lists can hold more than one value. These can be simple values.  They can also hold rows, and the combination of a list of rows is often called a "table".')]),e._v(" "),t("p",[e._v("Example: a list of strings")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> echo [sam fred george]\n───┬────────\n 0 │ sam \n 1 │ fred \n 2 │ george \n───┴────────\n")])])]),t("h3",{attrs:{id:"blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[e._v("#")]),e._v(" Blocks")]),e._v(" "),t("p",[e._v("Blocks represent a block of code in Nu. For example, in the command "),t("code",[e._v("each { echo $it }")]),e._v(" the block is the portion contained in curly braces, "),t("code",[e._v("{ echo $it }")]),e._v(". Blocks are a useful way of representing code that can be executed on each row of data.")])])}),[],!1,null,null,null);a.default=r.exports}}]);