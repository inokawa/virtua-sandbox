import { ReactNode } from "react";
export type ViewportComponentAttributes = Pick<React.HTMLAttributes<HTMLElement>, "className" | "style" | "id" | "role" | "tabIndex" | "onKeyDown"> & React.AriaAttributes;
/**
 * Props of customized scrollable component.
 */
export interface CustomViewportComponentProps {
    /**
     * Renderable item elements.
     */
    children: ReactNode;
    /**
     * Attributes that should be passed to the scrollable element.
     */
    attrs: ViewportComponentAttributes;
    /**
     * Total height of items. It's undefined if component is not vertically scrollable.
     */
    height: number | undefined;
    /**
     * Total width of items. It's undefined if component is not horizontally scrollable.
     */
    width: number | undefined;
    /**
     * Currently component is scrolling or not.
     */
    scrolling: boolean;
}
export declare const Viewport: import("react").ForwardRefExoticComponent<CustomViewportComponentProps & import("react").RefAttributes<any>>;
export type CustomViewportComponent = typeof Viewport;
