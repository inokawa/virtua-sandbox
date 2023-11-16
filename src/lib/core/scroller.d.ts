import { ScrollJump, VirtualStore } from "./store";
import { ScrollToIndexOpts } from "./types";
export type Scroller = {
    _observe: (rootElement: HTMLElement) => () => void;
    _scrollTo: (offset: number) => void;
    _scrollBy: (offset: number) => void;
    _scrollToIndex: (index: number, opts?: ScrollToIndexOpts) => void;
    _fixScrollJump: (jump: ScrollJump) => void;
};
export declare const createScroller: (store: VirtualStore, isHorizontal: boolean) => Scroller;
export type WindowScroller = {
    _observe: (rootElement: HTMLElement) => () => void;
    _fixScrollJump: (jump: ScrollJump) => void;
};
export declare const createWindowScroller: (store: VirtualStore, isHorizontal: boolean) => WindowScroller;
