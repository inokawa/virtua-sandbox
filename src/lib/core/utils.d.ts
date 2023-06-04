export declare const min: (...values: number[]) => number;
export declare const max: (...values: number[]) => number;
export declare const now: () => number;
export declare const exists: <T>(v: T) => v is Exclude<T, null | undefined>;
export declare const range: <T>(length: number, cb: (i: number) => T) => T[];
export declare const debounce: <T extends (...args: any[]) => void>(fn: T, ms: number) => {
    (): void;
    _cancel: () => void;
};
export declare const throttle: <T extends (...args: any[]) => void>(fn: T, ms: number) => (...args: Parameters<T>) => void;
export declare const once: <F extends (...args: any[]) => any>(fn: F) => F;
