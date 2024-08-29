type DestructedParams<T extends object> = {
  [K in keyof T]-?: Accessor<T[K]>;
};

export default function useDestructure<T extends object>(params: T) {
  console.log("useDestructure");
  new Proxy(params, {
    get(obj, key) {
      console.log("useDestructure", obj, key);
      return key in obj ? () => obj[key as keyof T] : params;
    },
  }) as DestructedParams<T>;
}
