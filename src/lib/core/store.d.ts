import { Cache } from "./cache";
import type { CacheSnapshot } from "./types";
export type ScrollJump = number;
type ViewportResize = [size: number, paddingStart: number, paddingEnd: number];
export type ItemResize = Readonly<[index: number, size: number]>;
type ItemsRange = Readonly<[startIndex: number, endIndex: number]>;
export declare const SCROLL_IDLE = 0;
export declare const SCROLL_DOWN = 1;
export declare const SCROLL_UP = 2;
export type ScrollDirection = typeof SCROLL_IDLE | typeof SCROLL_DOWN | typeof SCROLL_UP;
export declare const ACTION_ITEM_RESIZE = 1;
export declare const ACTION_VIEWPORT_RESIZE = 2;
export declare const ACTION_ITEMS_LENGTH_CHANGE = 3;
export declare const ACTION_SCROLL = 4;
export declare const ACTION_SCROLL_END = 5;
export declare const ACTION_MANUAL_SCROLL = 6;
export declare const ACTION_BEFORE_MANUAL_SMOOTH_SCROLL = 7;
type Actions = [type: typeof ACTION_ITEM_RESIZE, entries: ItemResize[]] | [type: typeof ACTION_VIEWPORT_RESIZE, size: ViewportResize] | [
    type: typeof ACTION_ITEMS_LENGTH_CHANGE,
    arg: [length: number, isShift?: boolean | undefined]
] | [type: typeof ACTION_SCROLL, offset: number] | [type: typeof ACTION_SCROLL_END, dummy?: void] | [type: typeof ACTION_MANUAL_SCROLL, dummy?: void] | [type: typeof ACTION_BEFORE_MANUAL_SMOOTH_SCROLL, offset: number];
type Subscriber = (sync?: boolean) => void;
export declare const UPDATE_SCROLL_STATE = 1;
export declare const UPDATE_SIZE_STATE = 2;
export declare const UPDATE_SCROLL_WITH_EVENT = 4;
export type VirtualStore = {
    _getCache(): CacheSnapshot;
    _getRange(): ItemsRange;
    _isUnmeasuredItem(index: number): boolean;
    _hasUnmeasuredItemsInSmoothScrollRange(): boolean;
    _getItemOffset(index: number): number;
    _getItemSize(index: number): number;
    _getItemsLength(): number;
    _getScrollOffset(): number;
    _getScrollOffsetMax(): number;
    _getScrollDirection(): ScrollDirection;
    _getViewportSize(): number;
    _getViewportPaddingStart(): number;
    _getTotalSize(): number;
    _getJumpCount(): number;
    _flushJump(): ScrollJump;
    _subscribe(target: number, cb: Subscriber): () => void;
    _update(...action: Actions): void;
};
export declare const createVirtualStore: (elementsCount: number, itemSize?: number, initialItemCount?: number, cache?: Cache, isReverse?: boolean, shouldAutoEstimateItemSize?: boolean) => VirtualStore;
export {};
