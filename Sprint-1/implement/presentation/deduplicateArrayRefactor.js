function deduplicateArray(arr) {
  let nodup = new Set(arr);
  const result = [];
  for (const el of nodup) {
    // filter
    if (![null, NaN, undefined].includes(el)) {
      result.push(el);
    }
  }
  return result;
}

console.log(deduplicateArray([1, 2, 1, null, undefined]));
