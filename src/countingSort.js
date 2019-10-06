import { MAX_VALUE } from './config'

export async function countingSort (arr, update, callback, interval) {
    const min = 0
    const max = MAX_VALUE
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
            await delay(interval)
            update([...arr])
        }
    }
    callback()
    return arr;
};

function delay (time) {
  return new Promise(resolve =>
    setTimeout(resolve, time)
  )
}