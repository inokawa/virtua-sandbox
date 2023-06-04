import { ReactNode } from "react";
export declare const refKey = "current";
export declare const isInvalidElement: <T extends ReactNode>(e: T) => e is Extract<T, boolean | null | undefined>;
