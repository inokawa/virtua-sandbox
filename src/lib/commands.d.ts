import { type DocFragment, type SelectionSnapshot } from "./doc/types";
import { Transaction } from "./doc/edit";
export type EditorCommand<A extends unknown[]> = (doc: DocFragment, selection: SelectionSnapshot, ...args: A) => Transaction | void;
export declare const Delete: EditorCommand<[]>;
export declare const InsertText: EditorCommand<[text: string]>;
export declare const ReplaceAll: EditorCommand<[text: string]>;
