import { CSSProperties, ReactNode } from "react";
import { CustomViewportComponent, ViewportComponentAttributes } from "./Viewport";
/**
 * Props of customized cell component for {@link VGrid}.
 */
export interface CustomCellComponentProps {
    style: CSSProperties;
    children: ReactNode;
}
export type CustomCellComponent = React.ForwardRefExoticComponent<React.PropsWithoutRef<CustomCellComponentProps> & React.RefAttributes<any>>;
type CustomCellComponentOrElement = keyof JSX.IntrinsicElements | CustomCellComponent;
/**
 * Methods of {@link VGrid}.
 */
export interface VGridHandle {
    /**
     * Get current scrollTop or scrollLeft.
     */
    readonly scrollOffset: [x: number, y: number];
    /**
     * Get current scrollHeight or scrollWidth.
     */
    readonly scrollSize: [width: number, height: number];
    /**
     * Get current offsetHeight or offsetWidth.
     */
    readonly viewportSize: [width: number, height: number];
    /**
     * Scroll to the item specified by index.
     * @param indexX horizontal index of item
     * @param indexY vertical index of item
     */
    scrollToIndex(indexX: number, indexY: number): void;
    /**
     * Scroll to the given offset.
     * @param offsetX offset from left
     * @param offsetY offset from top
     */
    scrollTo(offsetX: number, offsetY: number): void;
    /**
     * Scroll by the given offset.
     * @param offsetX horizontal offset from current position
     * @param offsetY vertical offset from current position
     */
    scrollBy(offsetX: number, offsetY: number): void;
}
/**
 * Props of {@link VGrid}.
 */
export interface VGridProps extends ViewportComponentAttributes {
    /**
     * A function to create elements rendered by this component.
     */
    children: (arg: {
        /**
         * row index of cell
         */
        rowIndex: number;
        /**
         * column index of cell
         */
        colIndex: number;
    }) => ReactNode;
    /**
     * Total row length of grid.
     */
    row: number;
    /**
     * Total column length of grid.
     */
    col: number;
    /**
     * Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
     * @defaultValue 40
     */
    cellHeight?: number;
    /**
     * Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
     * @defaultValue 100
     */
    cellWidth?: number;
    /**
     * Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
     * @defaultValue 2
     */
    overscan?: number;
    /**
     * If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
     */
    initialRowCount?: number;
    /**
     * If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.
     */
    initialColCount?: number;
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
         * Component or element type for cell element. This component will get {@link CustomCellComponentProps} as props.
         * @defaultValue "div"
         */
        Cell?: CustomCellComponentOrElement;
    };
}
/**
 * Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.
 */
export declare const VGrid: import("react").ForwardRefExoticComponent<VGridProps & import("react").RefAttributes<VGridHandle>>;
export {};
