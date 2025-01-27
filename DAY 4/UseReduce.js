import { useReducer } from "react";

export default function UseReduce() {
    const operation = (value, operator)=> {
        switch(operator.type) {
            case '+':
                return value += operator.operand
            case '-':
                return value -= operator.operand
        }
    }

    const [value, operationType] = useReducer(operation, 10)

    const Add = (num) => {
        operationType({type : "+", operand : num})
    }

    const Sub = (num) => {
        operationType({type : "-", operand : num})
    }

    return (
        <>
        <h1>value: {value}</h1>
        <button onClick={()=> Add(10)}>Add 10</button>
        <button onClick={() => Sub(10)}>Subtract 10</button>
        </>
    )
}