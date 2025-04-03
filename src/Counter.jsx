
import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)
    const handlAdd = () => {

        const newCount = count + 1;
        setCount(newCount)
    }

    const counterStyle = {
        border : '2px solid red ',
        color: 'red',
        marginBottom :'10px'
    }
    return (
        <div style={counterStyle}>
            <h3> Count: {count} </h3>
            <button onClick={handlAdd}> Add </button>
        </div>
    )
}