import { CSSProperties, ReactNode } from "react";
import { WindowComponentAttributes } from "..";
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
 * Props of customized scrollable component for {@link VGrid}.
 */
export interface CustomGridWindowComponentProps {
    children: ReactNode;
    scrollWidth: number;
    scrollHeight: number;
    scrolling: boolean;
    attrs: WindowComponentAttributes;
}
declare const DefaultWindow: import("react").ForwardRefExoticComponent<CustomGridWindowComponentProps & import("react").RefAttributes<any>>;
export type CustomGridWindowComponent = typeof DefaultWindow;
/**
 * Methods of {@link VGrid}.
 */
export interface VGridHandle {
}
/**
 * Props of {@link VGrid}.
 */
export interface VGridProps extends WindowComponentAttributes {
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
     * You have to set true if you use this component under `direction: rtl` style.
     */
    rtl?: boolean;
    /**
     * Customized element type for scrollable element. This element will get {@link CustomGridWindowComponentProps} as props.
     * @defaultValue {@link DefaultWindow}
     */
    element?: CustomGridWindowComponent;
    /**
     * Customized element type for cell element. This element will get {@link CustomCellComponentProps} as props.
     * @defaultValue "div"
     */
    cellElement?: CustomCellComponentOrElement;
}
/**
 * Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.
 */
export declare const VGrid: import("react").ForwardRefExoticComponent<VGridProps & import("react").RefAttributes<VGridHandle>>;
export {};
