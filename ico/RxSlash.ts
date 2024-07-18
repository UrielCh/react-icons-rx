import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Slash icon from Radix Icons
 * @module
 */
export function RxSlash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z",fill:"currentColor"}}]})(props);
}
export default RxSlash;
