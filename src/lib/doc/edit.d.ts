import { DocFragment, Position } from "./types";
declare const TYPE_DELETE = 1;
type DeleteOperation = Readonly<{
    _type: typeof TYPE_DELETE;
    _start: Position;
    _end: Position;
}>;
declare const TYPE_INSERT = 2;
type InsertOperation = Readonly<{
    _type: typeof TYPE_INSERT;
    _pos: Position;
    _fragment: DocFragment;
}>;
declare const TYPE_SELECT = 3;
type SelectOperataion = Readonly<{
    _type: typeof TYPE_SELECT;
    _anchor: Position | undefined;
    _focus: Position | undefined;
}>;
type EditOperation = DeleteOperation | InsertOperation;
export type Operation = EditOperation | SelectOperataion;
export declare class Transaction extends Array<Operation> {
    static from(tr: ReadonlyArray<Operation>): Transaction;
    insert(start: Position, fragment: DocFragment): this;
    delete(start: Position, end: Position): this;
    select(anchor?: Position, focus?: Position): this;
    transform(position: Position): Position;
}
export {};
