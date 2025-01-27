import { useEffect, useState } from "react"

export default function Demo(){
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    const[renderCount, setRenderCount] = useState(0)
    const [stopRender, setStopRender] = useState(false)

    useEffect(()=> {
        if(stopRender) return;

        if(renderCount >= 10) {
            setTimeout(()=> {
                console.log("Render limit reached")
            }, 1000)
            setStopRender(true)
            return
        }
        else {
            console.log("rendering")
        }

        return
    }, [count1, count2, renderCount])

    return(
        <>
            {!stopRender ? (
                <>
                <h1>the state val is {count1}</h1>
                <h1>the state val is {count2}</h1>
                <button onClick={()=>{setCount1(count1+1); setRenderCount((previous)=>previous + 1)}}>count1</button>
                <button onClick={()=>{setCount2(count2+1); setRenderCount((previous)=>previous + 1)}}>count2</button>
                </>
            ) : (
                <>
                <h2> Rendering stopped</h2>
                </>
            )}
        </>
    )
}