export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type InferArrayType<
  T extends string[],
  ArrayType = T extends Array<infer U> ? U : any
> = ArrayType;

export const stringLiteralArray = <Key extends string>(array: Key[]) => array;

export const excludeKeys: <
  Key extends string,
  Obj extends { [K in Key]?: any }
>(
  obj: Obj,
  keys: Key[],
) => Omit<Obj, Key> = (obj, keys) => {
  const clone = { ...(obj as any) };
  keys.forEach((key) => {
    delete clone[key];
  });
  return clone;
};

export const getKeyValuePairPick: <
  T extends { [K in Key]?: any },
  Key extends string
>(
  obj: T,
  pick: Key[],
  filterFalsely?: boolean,
) => Array<{ key: Key; value: T[Key] }> = (obj, pick, filterFalsely = true) => {
  return pick
    .map((key) => ({ key, value: obj[key] }))
    .filter((item) => !filterFalsely || (filterFalsely && !!item.value));
};
