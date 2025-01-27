import { createContext, useContext, useState } from "react"

const myContext = createContext()
export default function Parent() {
    const [data] = useState({
        Name : "Anbu",
        Age : 19,
        Gender : "Male" 
    })
    
    return (
        <>
        <myContext.Provider value = {data}>
            <h1>useContext application</h1>
            <Child1 />
        </myContext.Provider>
        </>
    )
}

function Child1( ){
    return(
        <>
        <h1>C1</h1>
        <Child2  />
        </>
   )}
function Child2( ){
   return(
        <>
        <h1>C2</h1>
        <Child3 />
        </>
   )
}
function Child3( ){
   return(
        <>
        <h1>C3</h1>
        <Child4 />
        </>
   )

}function Child4( ){
   return(
        <>
        <h1>C4</h1>
        <Child5  />
        </>
   )
}

function Child5() {
    const data = useContext(myContext)
    return (
        <>
        <h1>Child5 data is {data.Name}, {data.Age}, {data.Gender}</h1>
        </>
    )
}
