import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function RxTriangleRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{d:"M6 11L6 4L10.5 7.5L6 11Z",fill:"currentColor"}}]})(props);
}
export default RxTriangleRight;
