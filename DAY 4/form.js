import { useState} from "react";

export default function Form() {
    function formSubmit(formdata) {
        formdata.preventDefault()
        console.log("Submition success!")
    }

    const [name, setName] =useState("")
    const [gender, setGender] = useState("")
    const [roll, setRoll] = useState("")
    const [city, setCity] =useState("")
    const [phone, setPhone] =useState("")
    
    return (
        <>
            <form onSubmit={formSubmit}>
                Name: <input type="text" onChange={(data)=>{setName(data.target.value)}}></input><br/>
                Gender: <input type="text" onChange={(data)=>{setGender(data.target.value)}}></input><br/>
                RollNo.: <input type="text" onChange={(data)=>{setRoll(data.target.value)}}></input><br/>
                City: <input type="text" onChange={(data)=>{setCity(data.target.value)}}></input><br/>
                Phone: <input type="text" onChange={(data)=>{setPhone(data.target.value)}}></input><br/>
                <input type="submit" value = "signup"></input>
            </form>
        </>
    )
}