export async function insertionSort (inputArr, update, callback, interval) {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
        await delay(interval)
        update([...inputArr])
    }
    callback()
    return inputArr;
};

function delay (time) {
  return new Promise(resolve =>
    setTimeout(resolve, time)
  )
}
