---
home: true
heroImage: null
heroText: NuShell
tagline: Um novo tipo de concha.
actionText: Get Started →
actionLink: /pt-BR/book/
features:
  - title: Control your system with powerful pipelines
    details: Pipelines let you command your system like never before. Your system belongs to you, and it awaits your command.
  - title: Everything is data.
    details: Rather than having the need to remember all the parameters to all the commands, we can just use the same, regardless of where it came from.
  - title: Powerful Plugins
    details: Nu can't come with everything you might want to do with it, so you can extend using its powerful plugin system.
footer: If you have suggestions or want to change something please give us feedback

---
### Quick Install

Install the **nushell** binary:

#### Install Latest Version

Install the latest version from the [releases page](https://github.com/nushell/nushell/releases)

From source on [crates.io](https://crates.io):

```sh
cargo install nu
```

#### Install via Package Manager

With [Homebrew](https://brew.sh/):

```sh
brew install nushell
```

With [Scoop](https://scoop.sh):

```powershell
scoop install nu
```

#### Start the shell

```
nu
```

Setting as your login shell

To set the login shell you can use the chsh command.

```sh
chsh -s $(which nu)
```

Some Linux distributions have a list of valid shells located in /etc/shells and will disallow changing the shell until Nu is in the whitelist. You may see an error similar to the one below if you haven’t updated the shells file:

```sh
chsh: .cargo/bin/nu is an invalid shell
```

You can add Nu to the list of allowed shells by appending your Nu binary to the shells file:

```sh
sudo echo "$(which nu)" >> /etc/shells
```
