import { ReactNode } from "react";
import { CacheSnapshot } from "../core/types";
import { CustomViewportComponent, ViewportComponentAttributes } from "./Viewport";
import { CustomItemComponent } from "./ListItem";
type CustomItemComponentOrElement = keyof JSX.IntrinsicElements | CustomItemComponent;
/**
 * Methods of {@link WVList}.
 */
export interface WVListHandle {
    /**
     * Get current {@link CacheSnapshot}.
     */
    readonly cache: CacheSnapshot;
}
/**
 * Props of {@link WVList}.
 */
export interface WVListProps extends ViewportComponentAttributes {
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
     * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
     */
    horizontal?: boolean;
    /**
     * You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.
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
 * Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.
 */
export declare const WVList: import("react").ForwardRefExoticComponent<WVListProps & import("react").RefAttributes<WVListHandle>>;
export {};
