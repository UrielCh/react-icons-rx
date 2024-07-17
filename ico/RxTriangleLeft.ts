import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function RxTriangleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{d:"M9 4L9 11L4.5 7.5L9 4Z",fill:"currentColor"}}]})(props);
}
export default RxTriangleLeft;
