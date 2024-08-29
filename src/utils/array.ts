export const arrayChunks = (arr: unknown[], options?: unknown): unknown[][] => {
  const { chunkSize, chunkCount } = options ?? {};

  if (chunkSize) {
    return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (v, i) =>
      arr.slice(i * chunkSize, i * chunkSize + chunkSize),
    );
  } else if (chunkCount) {
    const size = Math.ceil(arr.length / chunkCount);
    return Array.from({ length: chunkCount }, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  }

  return arr;
};
