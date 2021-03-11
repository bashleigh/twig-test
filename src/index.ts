/**
 * A chunking solution. To return a chunked array of given array
 *
 * @param array The array to supply for chunking
 * @param splitInto The number of arrays to create
 * @returns created chunked arrays of given values
 */
export const groupArrayElements = (
  array: number[],
  splitInto: number,
): number[][] => {
  const splitAmount = Math.round(array.length / splitInto);

  const chunked = Array(splitInto)
    .fill([])
    .map(() => array.splice(0, splitAmount));

  if (array.length >= 1)
    chunked[chunked.length - 1] = chunked[chunked.length - 1].concat(array);

  return chunked;
};
