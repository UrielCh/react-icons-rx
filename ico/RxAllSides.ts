import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AllSides icon from Radix Icons
 * @module
 */
export function RxAllSides(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M7.5 0.75L9.75 3H5.25L7.5 0.75ZM7.5 14.25L9.75 12H5.25L7.5 14.25ZM3 5.25L0.75 7.5L3 9.75V5.25ZM14.25 7.5L12 5.25V9.75L14.25 7.5Z",fill:"currentColor"}}]})(props);
}
export default RxAllSides;
