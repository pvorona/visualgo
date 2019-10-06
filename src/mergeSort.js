export async function mergeSort (unsortedArray, update, interval) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return await merge(
    await mergeSort(left, update, interval), await mergeSort(right, update, interval), update, interval
  );
}


async function merge (left, right, update, interval) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  await delay(interval)

  const result= resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
  update(result)
  return result
}

function delay (time) {
  return new Promise(resolve =>
    setTimeout(resolve, time)
  )
}

// how to make sync loop async?

