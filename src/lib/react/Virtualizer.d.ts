import { ReactElement, ReactNode, RefObject } from "react";
import { CacheSnapshot, ScrollToIndexOpts } from "../core/types";
import { CustomContainerComponent, CustomItemComponent } from "./types";
/**
 * Methods of {@link Virtualizer}.
 */
export interface VirtualizerHandle {
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
 * Props of {@link Virtualizer}.
 */
export interface VirtualizerProps {
    /**
     * Elements rendered by this component.
     *
     * You can also pass a function and set {@link VirtualizerProps.count} to create elements lazily.
     */
    children: ReactNode | ((index: number) => ReactElement);
    /**
     * If you set a function to {@link VirtualizerProps.children}, you have to set total number of items to this prop.
     */
    count?: number;
    /**
     * Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
     * @defaultValue 4
     */
    overscan?: number;
    /**
     * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
     *
     * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
     * - If set, you can opt out estimation and use the value as initial item size.
     */
    itemSize?: number;
    /**
     * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
     */
    shift?: boolean;
    /**
     * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
     */
    horizontal?: boolean;
    /**
     * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VirtualizerHandle.cache}.
     */
    cache?: CacheSnapshot;
    /**
     * If you put an element before virtualizer, you have to define its height with this prop.
     */
    startMargin?: number;
    /**
     * If you put an element after virtualizer, you have to define its height with this prop.
     */
    endMargin?: number;
    /**
     * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.
     */
    ssrCount?: number;
    /**
     * Component or element type for container element.
     * @defaultValue "div"
     */
    as?: keyof JSX.IntrinsicElements | CustomContainerComponent;
    /**
     * Component or element type for item element. This component will get {@link CustomItemComponentProps} as props.
     * @defaultValue "div"
     */
    item?: keyof JSX.IntrinsicElements | CustomItemComponent;
    /**
     * Reference to the scrollable element. The default will get the parent element of virtualizer.
     */
    scrollRef?: RefObject<HTMLElement>;
    /**
     * Callback invoked whenever scroll offset changes.
     * @param offset Current scrollTop or scrollLeft.
     */
    onScroll?: (offset: number) => void;
    /**
     * Callback invoked when scrolling stops.
     */
    onScrollEnd?: () => void;
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
 * Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.
 */
export declare const Virtualizer: import("react").ForwardRefExoticComponent<VirtualizerProps & import("react").RefAttributes<VirtualizerHandle>>;
