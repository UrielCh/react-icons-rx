import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DividerVertical icon from Radix Icons
 * @module
 */
export function RxDividerVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M7.5 2C7.77614 2 8 2.22386 8 2.5L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 2.5C7 2.22386 7.22386 2 7.5 2Z",fill:"currentColor"}}]})(props);
}
export default RxDividerVertical;
