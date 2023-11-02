import type { DeepReadonly, Writeable } from "./types";
export declare const UNCACHED = -1;
export type Cache = DeepReadonly<{
    _defaultItemSize: number;
    _length: number;
    _sizes: number[];
    _computedOffsetIndex: number;
    _offsets: number[];
}>;
export declare const getItemSize: (cache: Cache, index: number) => number;
export declare const setItemSize: (cache: Writeable<Cache>, index: number, size: number) => boolean;
export declare const computeOffset: (cache: Writeable<Cache>, index: number) => number;
export declare const computeTotalSize: (cache: Writeable<Cache>) => number;
export declare const findIndex: (cache: Writeable<Cache>, offset: number, i: number) => number;
export declare const computeRange: (cache: Writeable<Cache>, scrollOffset: number, prevStartIndex: number, viewportSize: number) => [number, number];
export declare const estimateDefaultItemSize: (cache: Writeable<Cache>) => void;
export declare const initCache: (length: number, itemSize: number) => Cache;
export declare const updateCacheLength: (cache: Writeable<Cache>, length: number, isShift?: boolean) => [number, boolean];
