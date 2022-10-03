import { useState } from 'react';

export default function Counter(props) {
    let [count, setCount] = useState((props.defaultValue) ? props.defaultValue : 0)

    function incrementCount(incrementor) {
      setCount(count + incrementor)
    }

    return (
        <div className="counter">
            <p>{ count }</p>
            <button onClick={() => incrementCount(1)}>Increment by 1</button>
            <button onClick={() => incrementCount(5)}>Increment by 5</button>
            <button onClick={() => incrementCount(-1)}>Decrement by 1</button>
        </div>
    )
}