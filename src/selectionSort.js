export async function selectionSort(items, update, callback, interval){

    var len = items.length,
        min;

    for (let i=0; i < len; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (let j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
            await delay(interval)
            update([...items])
        }
    }
    callback()
    return items;
}
function delay (time) {
  return new Promise(resolve =>
    setTimeout(resolve, time)
  )
}


function swap (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
  return array
}