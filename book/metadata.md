# Metadata

In using Nu, you may have come across times where you felt like there was something extra going on behind the scenes. For example, let's say that you try to open a file that Nu supports only to forget and try to convert again:

```
> open Cargo.toml | from toml
error: Expected a string from pipeline
- shell:1:18
1 | open Cargo.toml | from toml
  |                   ^^^^^^^^^ requires string input
- shell:1:5
1 | open Cargo.toml | from toml
  |      ---------- object originates from here
```

The error message tells us not only that what we gave `from toml` wasn't a string, but also where the value originally came from. How would it know that?

Values that flow through a pipeline in Nu often have a set of additional information, or metadata, attached to them. These are known as tags, like the tags on an item in a store. These tags don't affect the data, but they give Nu a way to improve the experience of working with that data.

Let's run the `open` command again, but this time, we'll look at the tags it gives back:

```
> open Cargo.toml | tags
────────┬───────────────────────────────────────────
 span   │ [row end start] 
 anchor │ /home/jonathant/Source/nushell/Cargo.toml 
────────┴───────────────────────────────────────────
```

Currently, we track two bits of metadata on the values in pipeline. You can notice that we have the anchor, which gives the location for where this data was loaded from. This can help Nu better understand how to present data.

There's also a span. Let's take a closer look at that:

```
> open Cargo.toml | tags | get span
───────┬────
 start │ 5 
 end   │ 15 
───────┴────
```

The span "start" and "end" here refer to where the underline will be in the line. If you count over 5, and then count up to 15, you'll see it lines up with the "Cargo.toml" filename. This is how the error we saw earlier knew what to underline.


