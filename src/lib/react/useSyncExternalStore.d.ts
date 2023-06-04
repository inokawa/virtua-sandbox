export declare const useSyncExternalStore: <T>(subscibe: (onStoreChange: () => void) => () => void, getSnapShot: () => T) => T;
