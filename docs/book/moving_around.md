---
layout: content
title: Moving around your system
prev: Introduction
next: Types of data
link_prev: /en/introduction.html
link_next: /en/types_of_data.html
---

Early shells allow you to move around your filesystem and run commands, and modern shells like Nu allow you to do the same. Let's take a look at some of the common commands you might use when interacting with your system.

## Viewing directory contents

{% include moving_around/ls_example.md %}

As we've seen in other chapters, `ls` is a command for viewing the contents of a path. Nu will return the contents as a table that we can use.

The `ls` command also takes an optional argument, to change what you'd like to view.  For example, we can list the files that end in ".md"

{% include moving_around/ls_shallow_glob_example.md %}

The asterisk (\*) in the above optional argument "\*.md" is sometimes called a wildcard or a glob. It lets us match anything. You could read the glob "\*.md" as "match any filename, so long as it ends with '.md' "

Nu also uses modern globs as well, which allow you access to deeper directories.

{% include moving_around/ls_deep_glob_example.md %}

 Here we're looking for any file that ends with ".md", and the two asterisks further say "in any directory starting from here".

## Changing the current directory

{% include moving_around/cd_example.md %}

To change from the current directory to a new one, we use the `cd` command. Just as in other shells, we can use either the name of the directory, or if we want to go up a directory we can use the `..` shortcut.

Changing the current working directory can also be done if `cd` is omitted and a path by itself is given:

{% include moving_around/cd_without_command_example.md %}

## Filesystem commands

Nu also provides some basic filesystem commands that works cross-platform. 

We can move an item from one place to another using the `mv` command:

{% include moving_around/mv_example.md %}

We can copy an item from one location to another:

{% include moving_around/cp_example.md %}

We can remove an item:

{% include moving_around/rm_example.md %}

The three commands also can use the glob capabilities we saw earlier with `ls`.

Finally, we can create a new directory using the `mkdir` command:

{% include moving_around/mkdir_example.md %}
