import type { DocSchema } from "./types";
/**
 * Defines plain text schema.
 */
export declare const plainSchema: ({ multiline, }?: {
    multiline?: boolean;
}) => DocSchema<string>;
