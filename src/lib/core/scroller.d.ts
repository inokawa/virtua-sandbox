import { ScrollJump, VirtualStore } from "./store";
export type Scroller = {
    _initRoot: (rootElement: HTMLElement) => () => void;
    _getActualScrollSize: () => number;
    _scrollTo: (offset: number) => void;
    _scrollToIndex: (index: number, count: number) => void;
    _fixScrollJump: (jump: ScrollJump, startIndex: number) => void;
};
export declare const createScroller: (store: VirtualStore, isJustResized: () => boolean) => Scroller;
