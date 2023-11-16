import { ReactElement, ReactNode } from "react";
import { ItemElement } from "./utils";
export declare const useChildren: (children: ReactNode | ((i: number) => ReactElement), count: number | undefined) => [(i: number) => ItemElement, number];
