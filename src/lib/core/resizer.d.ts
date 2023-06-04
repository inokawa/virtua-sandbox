import { VirtualStore } from "./store";
export declare const createResizer: (store: VirtualStore) => {
    _observeRoot(root: HTMLElement): () => void;
    _observeItem(el: HTMLElement, i: number): () => void;
    _isJustResized(): boolean;
};
export type Resizer = ReturnType<typeof createResizer>;
export declare const createGridResizer: (vStore: VirtualStore, hStore: VirtualStore) => {
    _observeRoot(root: HTMLElement): () => void;
    _observeItem(el: HTMLElement, rowIndex: number, colIndex: number): () => void;
    _isJustResized(horizontal?: boolean): boolean;
};
export type GridResizer = ReturnType<typeof createGridResizer>;
