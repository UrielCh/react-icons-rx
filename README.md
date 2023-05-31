# Radix Icons icons for deno / Preact

**License** [MIT](https://github.com/radix-ui/icons/blob/master/LICENSE)

**Project** [https://icons.radix-ui.com](https://icons.radix-ui.com)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=rx)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/rx":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-rx@1.0.1/mod.ts",
    "react-icons/rx/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-rx/ico/",
  }
}
```

## Direct import sample

`import { RxAccessibility } from "https://deno.land/x/react_icons_rx@1.0.1/mod.ts"`

## import_map import sample

`import { RxAccessibility } from "react-icons/rx"`

## minimal import

`import { RxAccessibility } from "react-icons/rx/RxAccessibility.ts"`

## minimal import default

`import RxAccessibility from "react-icons/rx/RxAccessibility.ts"`

