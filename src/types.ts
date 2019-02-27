export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Dict<Keys extends string, T> = { [K in Keys]?: T };
