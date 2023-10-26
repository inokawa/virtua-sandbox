import { VirtualStore } from "./store";
export interface ListResizer {
    _observeRoot(root: HTMLElement): () => void;
    _observeItem(el: HTMLElement, i: number): () => void;
}
export declare const createResizer: (store: VirtualStore, isHorizontal: boolean) => ListResizer;
export declare const createWindowResizer: (store: VirtualStore, isHorizontal: boolean) => ListResizer;
export declare const createGridResizer: (vStore: VirtualStore, hStore: VirtualStore) => {
    _observeRoot(root: HTMLElement): () => void;
    _observeItem(el: HTMLElement, rowIndex: number, colIndex: number): () => void;
};
export type GridResizer = ReturnType<typeof createGridResizer>;
