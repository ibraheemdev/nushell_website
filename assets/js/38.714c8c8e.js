(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{392:function(e,a,s){"use strict";s.r(a);var n=s(42),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"instalando-nu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalando-nu"}},[e._v("#")]),e._v(" Instalando Nu")]),e._v(" "),s("p",[e._v("La mejor manera actualmente para poner en marcha Nu es instalándolo a través de "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),s("OutboundLink")],1),e._v(", descargando desde "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuestra página"),s("OutboundLink")],1),e._v(", compilarlo desde la fuente, o jalando un contenedor preconstruido con Docker.")]),e._v(" "),s("h2",{attrs:{id:"binarios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binarios"}},[e._v("#")]),e._v(" Binarios")]),e._v(" "),s("p",[e._v("Puedes descargar Nu compilado desde "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuestra página"),s("OutboundLink")],1),e._v(". Alternativamente, si usas "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),s("OutboundLink")],1),e._v(" para macOS, puedes instalar el binario ejecutando "),s("code",[e._v("brew install nushell")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),s("p",[s("strong",[e._v("nota:")]),e._v(" Nu trabaja con Windows 10 y no soporta Windows 7/8.1")]),e._v(" "),s("p",[e._v("Descarga el archivo actual "),s("code",[e._v(".zip")]),e._v(" "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("de la página de releases"),s("OutboundLink")],1),e._v(" y extráelo por ejemplo a:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" C:\\Program Files\n")])])]),s("p",[e._v("y posteriormente agrega Nu a la variable de entorno "),s("code",[e._v("PATH")]),e._v(". Una vez que hagamos eso, podemos ejecutar Nu usando el comando "),s("code",[e._v("nu")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" > nu\n C:\\Users\\user>\n")])])]),s("p",[e._v("Si te encuentras usando la nueva "),s("a",{attrs:{href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Terminal"),s("OutboundLink")],1),e._v(" puedes establecer "),s("code",[e._v("nu")]),e._v(" como la shell por defecto añadiendo:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n "guid": "{2b372ca1-1ee2-403d-a839-6d63077ad871}",\n "hidden": false,\n "name": "Nu Shell",\n "commandline": "nu.exe"\n}\n')])])]),s("p",[e._v("a  "),s("code",[e._v('"profiles"')]),e._v(" en las preferencias de tu Terminal (archivo JSON). Lo último que tienes que hacer es cambiar "),s("code",[e._v('"defaultProfile"')]),e._v(" a:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"defaultProfile": "{2b372ca1-1ee2-403d-a839-6d63077ad871}",\n')])])]),s("p",[e._v("Ahora "),s("code",[e._v("nu")]),e._v(" debería cargar al inicio de la Terminal de Windows.")]),e._v(" "),s("h2",{attrs:{id:"contenedores-de-docker-preconstruidos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contenedores-de-docker-preconstruidos"}},[e._v("#")]),e._v(" Contenedores de Docker preconstruidos")]),e._v(" "),s("p",[e._v("Si deseas jalar un contenedor preconstruido, puedes navegar las etiquetas de la "),s("a",{attrs:{href:"https://quay.io/organization/nushell",target:"_blank",rel:"noopener noreferrer"}},[e._v("organización nushell"),s("OutboundLink")],1),e._v("\nen Quay.io. Jalar un contenedor se reduce a:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker pull quay.io/nushell/nu\n$ docker pull quay.io/nushell/nu-base\n")])])]),s("p",[e._v('Tanto "nu-base" y "nu" proporciona el binario '),s("code",[e._v("nu")]),e._v(", sin embargo nu-base también incluye el código fuente en "),s("code",[e._v("/code")]),e._v(" en el contenedor y todas las dependencias.")]),e._v(" "),s("p",[e._v("Opcionalmente, también puedes construir los contenedores localmente utilizando los "),s("a",{attrs:{href:"https://github.com/nushell/nushell/tree/master/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("dockerfiles proporcionados"),s("OutboundLink")],1),e._v(":\nPara construir la imagen base:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker build -f docker/Dockerfile.nu-base -t nushell/nu-base "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),s("p",[e._v("y luego para construir el contenedor más pequeño (usando una construcción de varias etapas):")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker build -f docker/Dockerfile -t nushell/nu "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),s("p",[e._v("De cualquier manera, se puede ejecutar cualquier contenedor de la siguiente manera:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker run -it nushell/nu-base\n$ docker run -it nushell/nu\n/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v("\n")])])]),s("p",[e._v("El segundo contenedor es un poco más pequeño, si tamaño es importante para ti.")]),e._v(" "),s("h2",{attrs:{id:"preparacion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparacion"}},[e._v("#")]),e._v(" Preparación")]),e._v(" "),s("p",[e._v("Antes de que podamos instalar Nu, necesitamos asegurarnos de que nuestro sistema tenga los requerimientos necesarios. Actualmente significa que debemos verificar tener instalado tanto el Rust toolchain así como las dependencias locales. Estás son las suites de compilación recomendadas:")]),e._v(" "),s("ul",[s("li",[e._v("Linux: GCC or Clang")]),e._v(" "),s("li",[e._v("macOS: Clang (install Xcode)")]),e._v(" "),s("li",[e._v("Windows: "),s("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Community Edition"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("Para Linux y macOS, una vez que hayas instalado la suite de compilación, todo estará listo para instalar Rust a través de "),s("code",[e._v("rustup")]),e._v(" (ver más abajo).")]),e._v(" "),s("p",[e._v('For Windows, when you install Visual Studio Community Edition, make sure to install the "C++ build tools" as what we need is '),s("code",[e._v("link.exe")]),e._v(" which is provided as part of that optional install.  With that, we're ready to move to the next step.")]),e._v(" "),s("p",[e._v('Para Windows, cuando instalas Visual Studio Community Edition, asegúrate de instalar las herramientas "C++ build tools" ya que lo que necesitamos es '),s("code",[e._v("link.exe")]),e._v(", que es proporcionado como parte de esa instalación optcional. Con eso, estamos listos para el siguiente paso.")]),e._v(" "),s("h3",{attrs:{id:"instalando-un-suite-de-compilacion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalando-un-suite-de-compilacion"}},[e._v("#")]),e._v(" Instalando un suite de compilación")]),e._v(" "),s("p",[e._v("Para que Rust funcione correctamente, necesitarás tener un suite de compilación compatible instalado en el sistema.")]),e._v(" "),s("h3",{attrs:{id:"instalando-rust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalando-rust"}},[e._v("#")]),e._v(" Instalando Rust")]),e._v(" "),s("p",[e._v("En el caso de que no dispongamos de Rust en nuestro sistema la mejor manera de instalarlo es mediante "),s("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rustup"),s("OutboundLink")],1),e._v(". Rustup es una manera de manejar instalaciones de Rust incluyendo distintas versiones de Rust.")]),e._v(" "),s("p",[e._v("Nu actualmente requiere la versión "),s("strong",[e._v("estable más reciente (1.39 o posterior)")]),e._v(" de Rust. La mejor manera de "),s("code",[e._v("rustup")]),e._v(" inferir la versión correcta para ti. En el momento de abrir "),s("code",[e._v("rustup")]),e._v(" te solicitará qué versión de Rust deseas instalar:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Current installation options:\n\n   default host triple: x86_64-unknown-linux-gnu\n     default toolchain: stable\n  modify PATH variable: yes\n\n1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n")])])]),s("p",[e._v("Una vez que estamos listos, presionamos 1 y luego enter.")]),e._v(" "),s("p",[e._v("Si prefieres no instalar Rust mediante "),s("code",[e._v("rustup")]),e._v(", también puedes instalar a través de otros métodos (Ej. un paquete en alguna distribución de Linux). Solo asegúrate de instalar una versión que sea Rust 1.39 o posterior.")]),e._v(" "),s("h2",{attrs:{id:"dependencias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencias"}},[e._v("#")]),e._v(" Dependencias")]),e._v(" "),s("h3",{attrs:{id:"debian-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu"}},[e._v("#")]),e._v(" Debian/Ubuntu")]),e._v(" "),s("p",[e._v('Vas a necesitar instalar "pkg-config" y "libssl-dev":')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pkg-config libssl-dev\n")])])]),s("p",[e._v("Usuarios de Linux que desean usar las funcionalidades opcionales "),s("code",[e._v("rawkey")]),e._v(" o "),s("code",[e._v("clipboard")]),e._v(' necesitarán instalar los paquetes "libx11-dev" y "libxcb-composite0-dev":')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" libxcb-composite0-dev libx11-dev\n")])])]),s("h3",{attrs:{id:"distribuciones-basadas-en-rhel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distribuciones-basadas-en-rhel"}},[e._v("#")]),e._v(" Distribuciones basadas en RHEL")]),e._v(" "),s("p",[e._v('Vas a necesitar instalar "libxcb", "openssl-devel" and "libX11-devel":')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" libxcb openssl-devel libX11-devel\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),s("p",[e._v("Usando "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("homebrew"),s("OutboundLink")],1),e._v(', vas a necesitar instalar la fórmula "openssl":')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("brew install openssl cmake\n")])])]),s("h2",{attrs:{id:"instalando-desde-crates-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalando-desde-crates-io"}},[e._v("#")]),e._v(" Instalando desde "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Una vez instaladas las depependencias que Nu necesita, podemos instalarla usando el comando "),s("code",[e._v("cargo")]),e._v(" que viene con el compilador Rust.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> cargo install nu\n")])])]),s("p",[e._v("¡Eso es todo! Cargo hará el trabajo de descarga Nu junto con sus dependencias, construirla e instalarla en el bin path de cargo para que podamos arrancarlo.")]),e._v(" "),s("p",[e._v("Si deseas instalar con más funcionalidades, puedes hacer:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> cargo install nu --features=stable\n")])])]),s("p",[e._v("Para todas las funcionalidades disponibles, la manera más fácil es descargar la fuente de Nu y construírlo usted mismo usando las herramientas de Rust:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> git clone https://github.com/nushell/nushell.git\n> cd nushell\nnushell> cargo install --path . --force --features=stable\n\nPara que esto funcione, asegúrate de tener todas las dependencias instaladas (que se muestran arriba) en el sistema.\n\nFinalizada la instalación podemos ejecutar Nu usando el comando `nu`:\n\n")])])]),s("p",[e._v("$ nu\n/home/jonathan/Source>")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n## Construyendo desde la fuente\n\nTambién podemos contruir nuestro propio Nu directamente desde github. Esto nos da acceso inmediato a las últimas funcionalidades y corrección de bugs.\n\n")])])]),s("blockquote",[s("p",[e._v("git clone https://github.com/nushell/nushell.git")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nGit nos clonará el repositorio principal de Nu. Partiendo de ahí podemos contruir y arrancar Nu si estamos usando `rustup` con:\n\n")])])]),s("blockquote",[s("p",[e._v("cd nushell\nnushell> cargo build --workspace --features=stable && cargo run --features=stable")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nTambién puedes construir y arrancar Nu en modo release:\n\n")])])]),s("p",[e._v("nushell> cargo build --release --workspace --features=stable && cargo run --release --features=stable")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Gente familiarizada con Rust se preguntará la razón por la que hacemos un paso "build" y otro paso "run" si "run" construye por defecto. Esto es para evitar una deficiencia de la nueva opción `default-run` en Cargo y asegurar que todos los plugins se construyan aunque puede que esto no sea necesario en el futuro.\n\n**Nota:** Si te encuentras trabajando tanto en modo debug y release, asegúrate de ejecutar `cargo clean` cuando cambies entre ellas. Nu buscará plugins en los directorios tanto de debug así como release y puede suceder que cargue versiones de un plugin que no tienes intenciones de usar.\n\n## Establecer como shell de inicio de sesión\n\n**!!! Nu todavía está en desarrollo y puede no ser estable para uso diario. !!!**\n\nPara configurar la shell de inicio de sesión, puedes usra el comando [`chsh`](https://linux.die.net/man/1/chsh).\nEn algunas distribuciones de Linux se encuentra una lista válida de shells en `/etc/shells` y no permitirá cambiar la shell hasta que Nu esté en la lista blanca. Es posible que vea un error similar al siguiente si no ha actualizado el archivo `shells`:\n\n')])])]),s("p",[e._v("chsh: /home/username/.cargo/bin/nu is an invalid shell")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nPuedes agregar Nu a la lista de shells válidas añadiendo el binario al archivo `shells`. La ruta para agregar puedes encontrarla con el comando `which nu`, usualmente es `$HOME/.cargo/bin/nu`.\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);