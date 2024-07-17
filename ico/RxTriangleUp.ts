import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function RxTriangleUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{d:"M4 9H11L7.5 4.5L4 9Z",fill:"currentColor"}}]})(props);
}
export default RxTriangleUp;
