# Introduction

Hello, and welcome to the Nushell project. The goal of this project is to take the Unix philosophy of shells, where pipes connect simple commands together, and bring it to the modern style of development.

Nu takes cues from a lot of familiar territory: traditional shells like bash, advanced shells like PowerShell, functional programming, systems programming, and more. But rather than trying to be the jack of all trades, Nu focuses its energy on doing a few things well:

* Create a flexible cross-platform shell with a modern feel
* Allow you to mix and match commandline applications with a shell that understands the structure of your data
* Have the level of UX polish that modern CLI apps provide

The easiest way to see what Nu can do is to start with some examples, so let's dive in.

The first thing you'll notice when you run a command like `ls` is that instead of a block of text coming back, you get a structured table.

<<< @/snippets/introduction/ls_example.md

The table is more than just showing the directory in a different way. Just like tables in a spreadsheet, this table allows us to work with the data more interactively.

The first thing we'll do is to sort our table by the size. To do this, we'll take the output from `ls` and feed it into a command that can sort tables based on the contents of a column.

<<< @/snippets/introduction/ls_sort_by_reverse_example.md

You can see that to make this work we didn't pass commandline arguments to `ls`. Instead, we used the `sort-by` command that Nu provides to do the sorting of the output of the `ls` command. To see the biggest files on top, we also used `reverse`.

Nu provides many commands that can work on tables. For example, we could filter the contents of the `ls` table so that it only shows files over 1 kilobyte:

<<< @/snippets/introduction/ls_where_example.md

Just as in the Unix philosophy, being able to have commands talk to each other gives us ways to mix-and-match in many different combinations. Let's look at a different command:

<<< @/snippets/introduction/ps_example.md

You may be familiar with the `ps` command if you've used Linux. With it, we can get a list of all the current processes that the system is running, what their status is, and what their name is. We can also see the CPU load for the processes.

What if we wanted to show the processes that were actively using the CPU? Just like we did with the `ls` command earlier, we can also work with the table that the `ps` command gives back to us:

<<< @/snippets/introduction/ps_where_example.md

So far, we've been using `ls` and `ps` to list files and processes. Nu also offers other commands that can create tables of useful information. Next, let's explore `date` and `sys`.

Running `date utc` gives us information about the current day and time:

<<< @/snippets/introduction/date_example.md

Running `sys` gives information about the system that Nu is running on:

<<< @/snippets/introduction/sys_example.md

This is a bit different than the tables we saw before. The `sys` command gives us a table that contains structured tables in the cells instead of simple values. To take a look at this data, we need to get the column to view:

<<< @/snippets/introduction/sys_get_example.md

The `get` command lets us jump into the contents of a column of the table. Here, we're looking into the "host" column, which contains information about the host that Nu is running on. The name of the OS, the hostname, the CPU, and more. Let's get the name of the users on the system:

<<< @/snippets/introduction/sys_get_nested_example.md

Right now, there's just one user on the system named "jonathan". You'll notice that we can pass a column path (the `host.sessions` part) and not just the name of the column. Nu will take the column path and go to the corresponding bit of data in the table.

You might have noticed something else that's different. Rather than having a table of data, we have just a single element: the string "jonathan". Nu works with both tables of data as well as strings. Strings are an important part of working with commands outside of Nu.

Let's see how strings work outside of Nu in action. We'll take our example from before and run the external `echo` command (the `^` tells nu to not use the built-in `echo` command):

<<< @/snippets/introduction/sys_get_external_echo_example.md

If this looks very similar to what we had before, you have a keen eye! It is similar, but with one important difference: we've called `^echo` with the value we saw earlier. This allows us to pass data out of Nu into `echo` (or any command outside of Nu, like `git` for example).

*Note: help text for any of Nu's builtin commands can be discovered with the `help` command*:

<<< @/snippets/introduction/help_example.md
