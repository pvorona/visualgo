import React, { useState } from 'react';
import { mergeSort } from './mergeSort'
import { bubbleSort } from './bubbleSort'
import { insertionSort } from './insertionSort'
import { selectionSort } from './selectionSort'
import { countingSort } from './countingSort'
import { MAX_VALUE, TOTAL_ITEMS, INTERVAL } from './config'
import './App.css'


function generateRandomArray (size) {
  const result = []
  for (let i = 0; i < size; i++) {
    result.push(parseInt(Math.random() * MAX_VALUE))
  }
  return result
}

function ArrayItem ({ style }) {
  return (
    <div
      className="ArrayItem"
      style={style}
    />
  )
}

function ArrayView ({ children }) {
  return children.map((child, index) =>
    <ArrayItem
      key={index}
      style={{ width: `${100 / children.length}%`, left: `${index * 100 / children.length}%`, position: 'absolute', bottom: 0, height: `${child * 100 / MAX_VALUE}%` }}
    />
  )
}

function App() {
  const [array, setArray] = useState(generateRandomArray(TOTAL_ITEMS))
  const [sorted, setSorted] = useState(false)
  return (
    <div className="App">
      <ArrayView>{array}</ArrayView>
      <button onClick={() => {
        if (sorted) {
          setSorted(false)
          setArray(generateRandomArray(TOTAL_ITEMS))
        } else {
          // bubbleSort(array, setArray, () => setSorted(true), INTERVAL)
          // insertionSort(array, setArray, () => setSorted(true), INTERVAL)
          // selectionSort(array, setArray, () => setSorted(true), INTERVAL)
          countingSort(array, setArray, () => setSorted(true), INTERVAL)
        }
      }}>{sorted ? 'Generate' : 'Sort'}</button>
    </div>
  );
}

export default App;
