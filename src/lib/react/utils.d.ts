import { ReactElement, ReactFragment, ReactNode } from "react";
import { ScrollDirection } from "../core/store";
export declare const refKey = "current";
export declare const emptyComponents: {};
type ItemElement = ReactElement | ReactFragment | string | number;
export declare const flattenChildren: (children: ReactNode) => ItemElement[];
export type MayHaveKey = {
    key?: React.Key;
};
export declare const clampStartIndex: (startIndex: number, overscan: number, scrollDirection: ScrollDirection) => number;
export declare const clampEndIndex: (endIndex: number, overscan: number, scrollDirection: ScrollDirection, count: number) => number;
export {};
