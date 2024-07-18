# Radix Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/rx)](https://jsr.io/@preact-icons/rx)

**License** [MIT](https://github.com/radix-ui/icons/blob/master/LICENSE)

**Project** [https://icons.radix-ui.com](https://icons.radix-ui.com)

[See available icons here](https://react-icons.deno.dev/rx)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/rx": "jsr:@preact-icons/rx@^1.0.11/mod.ts",
    "react-icons/rx/": "jsr:@preact-icons/rx@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib rx

```ts
import { RxAccessibility } from "jsr:preact-icons/rx@1.0.11/mod.ts"
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

