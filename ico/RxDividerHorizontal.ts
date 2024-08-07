import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DividerHorizontal icon from Radix Icons
 * @module
 */
export function RxDividerHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z",fill:"currentColor"}}]})(props);
}
export default RxDividerHorizontal;
