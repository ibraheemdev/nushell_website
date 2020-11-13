# Environment

A common task in a shell is to control the environment that external applications will use. Often this is done automatically, as the environment is packaged up and given to the external application as it launches. Sometimes, though, we want to have more precise control over what environment variables an application sees.

You can see the current environment variables that will be sent to applications by echoing the value for `$nu.env`

```
> echo $nu.env
──────────────────────────┬──────────────────────────────
 COLORTERM                │ truecolor 
 DBUS_SESSION_BUS_ADDRESS │ unix:path=/run/user/1000/bus 
 DESKTOP_SESSION          │ gnome 
 DISPLAY                  │ :1 
```

The environment is created from the settings in the Nu configuration and from the environment that Nu is run inside of.  You can updated the environment permanently using the techniques listed in [configuration](configuration.md) chapter.

You can also temporarily update an environment variable when you run a command or pipeline of commands.

```
> with-env [FOO BAR] { echo $nu.env.FOO }
BAR
```

The `with-env` command will temporarily set the environment variable to the value given (here: the variable "FOO" is given the value "BAR").  Once this is done, the block will run with this new environment variable set.

A common shorthand, inspired by Bash and others, is also available. You can write the above example as:

```
> FOO=BAR echo $nu.env.FOO
BAR
```