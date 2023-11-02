import { ReactNode } from "react";
import { CustomViewportComponent, ViewportComponentAttributes } from "./Viewport";
import { CustomItemComponent } from "./ListItem";
import { CacheSnapshot, ScrollToIndexOpts } from "../core/types";
type CustomItemComponentOrElement = keyof JSX.IntrinsicElements | CustomItemComponent;
/**
 * Methods of {@link VList}.
 */
export interface VListHandle {
    /**
     * Get current {@link CacheSnapshot}.
     */
    readonly cache: CacheSnapshot;
    /**
     * Get current scrollTop or scrollLeft.
     */
    readonly scrollOffset: number;
    /**
     * Get current scrollHeight or scrollWidth.
     */
    readonly scrollSize: number;
    /**
     * Get current offsetHeight or offsetWidth.
     */
    readonly viewportSize: number;
    /**
     * Scroll to the item specified by index.
     * @param index index of item
     * @param opts options
     */
    scrollToIndex(index: number, opts?: ScrollToIndexOpts): void;
    /**
     * Scroll to the given offset.
     * @param offset offset from start
     */
    scrollTo(offset: number): void;
    /**
     * Scroll by the given offset.
     * @param offset offset from current position
     */
    scrollBy(offset: number): void;
}
/**
 * Props of {@link VList}.
 */
export interface VListProps extends ViewportComponentAttributes {
    /**
     * Elements rendered by this component.
     */
    children: ReactNode;
    /**
     * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
     * @defaultValue 4
     */
    overscan?: number;
    /**
     * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
     *
     * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
     * - If set, you can opt out estimation and use the value as initial item size.
     */
    initialItemSize?: number;
    /**
     * If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
     */
    initialItemCount?: number;
    /**
     * While true is set, scroll position will be maintained from the end not usual start when items are shifted/unshifted. It is useful for reverse infinite scrolling.
     */
    shift?: boolean;
    /**
     * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
     */
    horizontal?: boolean;
    /**
     * If true, some styles will be adjusted to be suitable for bottom-to-top scrolling.
     */
    reverse?: boolean;
    /**
     * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VListHandle.cache}.
     */
    cache?: CacheSnapshot;
    /**
     * Customized components for advanced usage.
     */
    components?: {
        /**
         * Component for scrollable element. This component will get {@link CustomViewportComponentProps} as props.
         * @defaultValue {@link DefaultViewport}
         */
        Root?: CustomViewportComponent;
        /**
         * Component or element type for item element. This component will get {@link CustomItemComponentProps} as props.
         * @defaultValue "div"
         */
        Item?: CustomItemComponentOrElement;
    };
    /**
     * Callback invoked whenever scroll offset changes.
     * @param offset Current scrollTop or scrollLeft.
     */
    onScroll?: (offset: number) => void;
    /**
     * Callback invoked when scrolling stops.
     */
    onScrollStop?: () => void;
    /**
     * Callback invoked when visible items range changes.
     */
    onRangeChange?: (
    /**
     * The start index of viewable items.
     */
    startIndex: number, 
    /**
     * The end index of viewable items.
     */
    endIndex: number) => void;
}
/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export declare const VList: import("react").ForwardRefExoticComponent<VListProps & import("react").RefAttributes<VListHandle>>;
export {};
