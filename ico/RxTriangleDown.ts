import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TriangleDown icon from Radix Icons
 * @module
 */
export function RxTriangleDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{d:"M4 6H11L7.5 10.5L4 6Z",fill:"currentColor"}}]})(props);
}
export default RxTriangleDown;
