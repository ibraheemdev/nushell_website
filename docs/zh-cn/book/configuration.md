---
layout: content
title: 配置
prev: 管道
next: 别名
link_prev: /zh-cn/pipeline.html
link_next: /zh-cn/aliases.html
---

Nu 的内部变量数量很少但仍在不断增长，您可以设置这些内部变量来更改其外观和操作方式。 以下是当前变量，它们的类型以及如何使用它们的描述的列表

| 变量                  | 类型                        | 描述                                      |
| --------------------- | --------------------------- | ----------------------------------------- |
| completion_mode       | "list" or "circular"        | 自动补全样式                              |
| ctrlc_exit            | boolean                     | 在多次 ctrl-c 后是否退出 Nu               |
| disable_table_indexes | boolean                     | 移除表的索引号列                          |
| edit_mode             | "vi" or "emacs"             | 设置行编辑器使用 "vi" 或 "emacs" 模式     |
| env                   | row                         | 传递给外部命令的环境变量                  |
| header_align          | "center", "right", or other | 表头居中、右对齐或左对齐                  |
| key_timeout           | integer                     | 在编辑模式之间切换的超时时限              |
| nonzero_exit_errors   | boolean                     | 是否显示外部程序的非 0 退出码             |
| path                  | list of strings             | 用于寻找可执行文件的 PATH                 |
| startup               | list of strings             | 命令，就像 `alias` 一样，当 Nu 启动时执行 |
| table_mode            | "light" or other            | 启用轻量级或普通的表                      |
| no_auto_pivot         | boolean                     | 是否透视单行结果                          |

## 用法

### 设置变量

你可以使用 `config set` 命令来设置一个变量，例如：

```
> config set edit_mode "vi"
```

### 通过管道设置变量

还有另一种设置变量的方法，那就是使用管道的内容作为要用于变量的值。 为此，请使用 `set_into` 标志：

```
> echo "bar" | config set_into foo
```

这对处理 `env` 和 `path` 变量非常有用。

### 列出所有变量

不带任何参数地运行 `config` 命令将会展示当前配置项的表：

```
> config
─────────────────┬──────────────────
 completion_mode │ circular
 env             │ [row 51 columns]
 path            │ [table 9 rows]
 startup         │ [table 1 rows]
─────────────────┴──────────────────
```

注意：如果你没有设置配置变量，那么它可能是空的。

### 获取变量

使用 `get` 标志，你可以获取给定变量的值：

```
> config get edit_mode
```

### 移除变量

要移除配置中的变量，使用 `remove` 标志：

```
> config remove edit_mode
```

### 清空配置

如果要清除整个配置并重新开始，可以使用 `clear` 标志。 当然，请谨慎操作，因为一旦运行它，配置文件也会被清除。

```
> config clear
```

### 找到配置存储路径

配置文件从默认路径加载。要找到这个路径在你系统中的位置，可以用 `path` 标志询问：

```
> config path
/home/jonathant/.config/nu/config.toml
```

### 从文件加载配置

你可能想从另一个不同的文件加载配置，使用 `load` 参数：

```
> config load myconfiguration.toml
```

## 把 Nu 配置成登录 Shell

要把 Nu 作为登录 Shell，你需要配置 `path` 和 `env` 配置变量。同时，你需要有足够的权限来将额外命令作为登录 Shell 运行。

在切换之前，在其他 Shell （如 Bash）中运行 Nu。然后，用以下命令迁移环境变量和 PATH：

```
> config set path $nu.path
> config set env $nu.env
```

在 0.7.2 版本之前用：

```
> config --set [path $nu:path]
> config --set [env $nu:env]
```

`$nu.path` 和 `$nu.env` 的值将被分别设置成当前的 PATH 和环境变量。一旦你把它们设置进了配置，它们在之后 Nu 作为登录 Shell 启动时也会起作用。

接下来，在一些发行版上，你还需要在 /etc/shells 列表中确认 Nu 在其中：

```
> cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
```

这样，你应该可以 `chsh` 并将 Nu 设置为你的登录 Shell。 注销后，在你的下一次登录时，系统应显示闪亮的 Nu 提示。

## 配置提示符

目前，Nu 的提示符由 [starship](https://github.com/starship/starship) 提供支持。

```
nushell on 📙 master [$] is 📦 v0.5.1 via 🦀 v1.40.0-nightly
❯
```

Starship 是一个有趣、多彩并带来惊喜的强大提示符。要配置它，跟着它们的 [配置手册](https://starship.rs/zh-CN/config/) 去做吧。
