import { EditorCommand } from "./commands";
import { DocSchema } from "./schema";
export type KeyboardPayload = Pick<KeyboardEvent, "key" | "code" | "ctrlKey" | "shiftKey" | "altKey" | "metaKey">;
/**
 * Options of {@link createEditor}.
 */
export interface EditorOptions<T> {
    /**
     * TODO
     */
    schema: DocSchema<T>;
    /**
     * Initial document state.
     */
    doc: T;
    /**
     * TODO
     */
    isBlock?: (node: HTMLElement) => boolean;
    /**
     * Callback invoked when document state changes.
     */
    onChange: (doc: T) => void;
    /**
     * Callback invoked when `keydown` events are dispatched.
     *
     * Return `true` if you want to cancel the editor's default behavior.
     */
    onKeyDown?: (keyboard: KeyboardPayload) => boolean | void;
}
/**
 * Methods of editor instance.
 */
export interface Editor {
    /**
     * A function to make DOM editable.
     * @returns A function to stop subscribing DOM changes and restores previous DOM state.
     */
    input: (element: HTMLElement) => () => void;
    /**
     * Dispatches editing command.
     * @param fn command function
     * @param args arguments of command
     */
    command: <A extends unknown[]>(fn: EditorCommand<A>, ...args: A) => void;
    /**
     * Changes editor's read-only state.
     * @param value `true` to read-only. `false` to editable.
     */
    readonly: (value: boolean) => void;
}
/**
 * A function to initialize editor.
 */
export declare const createEditor: <T>({ schema: { single: isSingleline, js: docToJS, doc: jsToDoc, copy, paste }, doc: initialDoc, isBlock, onChange, onKeyDown: onKeyDownCallback, }: EditorOptions<T>) => Editor;
