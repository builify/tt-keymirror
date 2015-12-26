export default function (arr, useSymbol = false) {
  let result = {};

  if (!(arr instanceof Array) && !Array.isArray(arr)) {
    throw new Error('keyMirror(...): Argument must be an array.');
  }

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];

    result[key] = useSymbol ? Symbol(`${key}`) : key;
  }

  return result;
}
