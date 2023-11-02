export declare const min: (...values: number[]) => number;
export declare const max: (...values: number[]) => number;
export declare const abs: (x: number) => number;
export declare const now: () => number;
export declare const values: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): T[];
    (o: {}): any[];
};
export declare const isArray: (arg: any) => arg is any[];
export declare const timeout: typeof setTimeout;
export declare const clamp: (value: number, minValue: number, maxValue: number) => number;
export declare const exists: <T>(v: T) => v is Exclude<T, null | undefined>;
export declare const median: (arr: number[]) => number;
export declare const debounce: <T extends (...args: any[]) => void>(fn: T, ms: number) => {
    (): void;
    _cancel: () => void;
};
export declare const throttle: <T extends (...args: any[]) => void>(fn: T, ms: number) => (...args: Parameters<T>) => void;
export declare const once: <F extends (...args: any[]) => any>(fn: F) => F;
export declare const computeStyle: (e: HTMLElement) => CSSStyleDeclaration;
export declare const getStyleNumber: (v: string) => number;
