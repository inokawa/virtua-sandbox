import type { DeepReadonly, Writeable } from "./types";
export declare const UNCACHED = -1;
export type Cache = DeepReadonly<{
    _defaultItemSize: number;
    _length: number;
    _sizes: number[];
    _measuredOffsetIndex: number;
    _offsets: number[];
}>;
export declare const getItemSize: (cache: Cache, index: number) => number;
export declare const setItemSize: (cache: Writeable<Cache>, index: number, size: number) => void;
export declare const computeTotalSize: (cache: Writeable<Cache>) => number;
export declare const computeStartOffset: (cache: Writeable<Cache>, index: number) => number;
export declare const findStartIndexWithOffset: (cache: Cache, offset: number, prevStartIndex: number, prevOffset: number) => number;
export declare const findEndIndex: (cache: Cache, i: number, distance: number) => number;
export declare const hasUnmeasuredItemsInRange: (cache: Cache, startIndex: number, endIndex: number) => boolean;
export declare const resetCache: (length: number, itemSize: number, cache?: Cache) => Cache;
