# Radix Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/rx)](https://jsr.io/@preact-icons/rx)

**License** [MIT](https://github.com/radix-ui/icons/blob/master/LICENSE)

**Project** [https://icons.radix-ui.com](https://icons.radix-ui.com)

[See available icons here](https://react-icons.deno.dev/rx)

## install the module

```bash
deno add @preact-icons/rx
dnpx jsr add @preact-icons/rx
pnpm dlx jsr add @preact-icons/rx
bunx jsr add @preact-icons/rx
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { RxAccessibility } from "@preact-icons/rx"
```

## import a single icon, downloading just one icon

```ts
import { RxAccessibility } from "react-icons/rx/RxAccessibility"
```

or using default export

```ts
import RxAccessibility from "react-icons/rx/RxAccessibility.ts"
```
