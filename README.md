# Radix Icons icons for deno / Preact

**License** [MIT](https://github.com/radix-ui/icons/blob/master/LICENSE)

**Project** [https://icons.radix-ui.com](https://icons.radix-ui.com)

[See available icons here](https://react-icons.deno.dev/rx)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/rx":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-rx@1.0.9/mod.ts",
    "react-icons/rx/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-rx@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib rx

```ts
import { RxAccessibility } from "https://deno.land/x/react_icons_rx@1.0.9/mod.ts"
```

## import_map import an icon from all icons

```ts
import { RxAccessibility } from "react-icons/rx"
```

## import a single icon, downloading just one icon

```ts
import { RxAccessibility } from "react-icons/rx/RxAccessibility.ts"
```

or using default export

```ts
import RxAccessibility from "react-icons/rx/RxAccessibility.ts"
```

