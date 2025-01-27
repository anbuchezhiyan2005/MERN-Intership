import './Data.css'
import { useState } from 'react'

export default function Data(details) {
    var[data, setData] = useState({
            CheckGreen : false,
            CheckRed : false,
            Color : "Black"
        })
    const {n, a, obj, phone, student} = details
    const {City, State} = obj
    const {SName, SAge, SGender, SContact} = student

    const updateName=()=> {
        setStudentData((PreviousData)=>({...PreviousData, StudentName : SName,}))
    }

    const updateAge=()=> {
        setStudentData((PreviousData)=>({...PreviousData, StudentAge : SAge,}))    }

    const updateGender=()=> {
        setStudentData((PreviousData)=>({...PreviousData, StudentGender : SGender,}))    }

    const updateContact=()=> {
        setStudentData((PreviousData)=>({...PreviousData, StudentContact : SContact,}))    }

        var[StudentData, setStudentData] = useState({
            StudentName : "John Doe",
            StudentAge : 19,
            StudentGender : "Male",
            StudentContact : "+098 765 4321"
        })

        
    return(
        <>
            <div className={`Details ${
                    data.CheckGreen ? "green" : (data.CheckRed ? "red" : "black")
            }`}>
            <h1>User: {n}</h1>
            <h1>Age: {a}</h1>
            <h1>City: {City}</h1>
            <h1>State: {State}</h1>
            <h1>Contact: {phone}</h1>
            </div>
            <h1>Color changed to: <h2 className={`color ${data.CheckGreen ? "green" : (data.CheckRed ? "red" : "black")}`}>{data.Color}</h2></h1>
            <button onClick={()=> {setData({CheckGreen : !data.CheckGreen, Color : data.CheckGreen ? "Black" : "Green"})}}>Change to Green!</button>
            <button onClick={()=> {setData({CheckRed : !data.CheckRed, Color : data.CheckRed ? "Black" : "Red"})}}>Change to Red!</button>

            <h1>STUDENT DETAILS</h1>
            <h2>Student Name: {StudentData.StudentName}</h2>
            <h2>Student Age: {StudentData.StudentAge}</h2>
            <h2>Student Gender: {StudentData.StudentGender}</h2>
            <h2>Student Contact: {StudentData.StudentContact}</h2>
            <button onClick={()=>{updateName()}}>Change Name</button>
            <button onClick={()=>{updateAge()}}>Change Age</button>
            <button onClick={()=>{updateGender()}}>Change Gender</button>
            <button onClick={()=>{updateContact()}}>Change Contact</button>
        </>
    )
}

