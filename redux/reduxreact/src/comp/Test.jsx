import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,getData,incrementByAmount } from '../redux/testSlice.js'
const data={
    "test":"MD FROJ AHMED",
    "test2":"MD FROJ AHMED",
    "test3":"MD FROJ AHMED",
    "test4":"MD FROJ AHMED",
    "test5":"MD FROJ AHMED",
    "test6":"MD FROJ AHMED",
}
export default function Test() {
  const count = useSelector((state) => state.counter.data)
  const dispatch = useDispatch()
    console.log(count);
  return (

    <div>
      <div>
        {/*<button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>*/}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(getData({p:data}))}
        >
          GetData
        </button>
        <h2>{count.test} </h2>
      </div>
    </div>
  )
}