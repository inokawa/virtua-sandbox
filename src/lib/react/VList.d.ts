import { CSSProperties, ReactNode } from "react";
import { WindowComponentAttributes } from "..";
/**
 * Props of customized scrollable component for {@link VList}.
 */
export interface CustomWindowComponentProps {
    children: ReactNode;
    scrollSize: number;
    scrolling: boolean;
    horizontal: boolean;
    attrs: WindowComponentAttributes;
}
declare const DefaultWindow: import("react").ForwardRefExoticComponent<CustomWindowComponentProps & import("react").RefAttributes<any>>;
export type CustomWindowComponent = typeof DefaultWindow;
/**
 * Props of customized item component for {@link VList}.
 */
export interface CustomItemComponentProps {
    style: CSSProperties;
    children: ReactNode;
}
export type CustomItemComponent = React.ForwardRefExoticComponent<React.PropsWithoutRef<CustomItemComponentProps> & React.RefAttributes<any>>;
type CustomItemComponentOrElement = keyof JSX.IntrinsicElements | CustomItemComponent;
/**
 * Methods of {@link VList}.
 */
export interface VListHandle {
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
     */
    scrollToIndex(index: number): void;
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
export interface VListProps extends WindowComponentAttributes {
    /**
     * Elements rendered by this component.
     */
    children: ReactNode;
    /**
     * Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
     * @defaultValue 40
     */
    itemSize?: number;
    /**
     * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
     * @defaultValue 4
     */
    overscan?: number;
    /**
     * If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
     */
    initialItemCount?: number;
    /**
     * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
     */
    horizontal?: boolean;
    /**
     * You have to set true if you use this component under `direction: rtl` style.
     */
    rtl?: boolean;
    /**
     * Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
     * @defaultValue {@link DefaultWindow}
     */
    element?: CustomWindowComponent;
    /**
     * Customized element type for item element. This element will get {@link CustomItemComponentProps} as props.
     * @defaultValue "div"
     */
    itemElement?: CustomItemComponentOrElement;
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
    onRangeChange?: (payload: {
        /**
         * The start index of viewable items.
         */
        start: number;
        /**
         * The end index of viewable items.
         */
        end: number;
        /**
         * The total count of items.
         */
        count: number;
    }) => void;
}
/**
 * Virtualized list component. See {@link VListProps} and {@link VListHandle}.
 */
export declare const VList: import("react").ForwardRefExoticComponent<VListProps & import("react").RefAttributes<VListHandle>>;
export {};
