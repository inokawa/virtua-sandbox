/// <reference types="react" />
import { ViewportComponentAttributes } from "./types";
import { VirtualizerHandle, VirtualizerProps } from "./Virtualizer";
/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {
}
/**
 * Props of {@link VList}.
 */
export interface VListProps extends Pick<VirtualizerProps, "children" | "count" | "overscan" | "itemSize" | "shift" | "horizontal" | "reverse" | "cache" | "ssrCount" | "item" | "onScroll" | "onScrollEnd" | "onRangeChange">, ViewportComponentAttributes {
}
/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export declare const VList: import("react").ForwardRefExoticComponent<VListProps & import("react").RefAttributes<VListHandle>>;
