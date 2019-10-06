function delay (time) {
  return new Promise(resolve =>
    setTimeout(resolve, time)
  )
}

export async function bubbleSort (array, update, callback, interval) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    swap(array, i, min)
    update([...array])
    await delay(interval)
  }
  callback()
}

function swap (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
  return array
}