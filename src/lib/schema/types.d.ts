import type { DocFragment } from "../doc/types";
import type { ParserConfig } from "../dom/parser";
export interface DocSchema<T> {
    single: boolean;
    js: (doc: DocFragment) => T;
    doc: (state: T) => DocFragment;
    copy: (dataTransfer: DataTransfer, doc: DocFragment, element: Element) => void;
    paste: (dataTransfer: DataTransfer, config: ParserConfig) => DocFragment;
}
type ExtractItem<T> = T extends (infer I)[] ? ExtractItem<I> : T;
export type InferDoc<T> = T extends DocSchema<infer N> ? N : never;
export type InferNode<T> = T extends DocSchema<infer N> ? ExtractItem<N> : never;
export {};
