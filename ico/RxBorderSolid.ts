import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderSolid icon from Radix Icons
 * @module
 */
export function RxBorderSolid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z",fill:"currentColor"}}]})(props);
}
export default RxBorderSolid;
