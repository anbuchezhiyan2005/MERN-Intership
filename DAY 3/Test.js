import img from './img.png';
import Data from './Data';
import Class from './Class';
export default function Test() {
    var Name = "Anbu"
    var age = 19
    let address = {
        City : "CBE",
        State : "TN"
    }

    let Student = {
        Student_Name : "Jane Watson",
        Student_Age : 20,
        Student_Gender : "Female",
        Student_Contact : "+123 456 7890"
    }

    let Phone = [7, 6, 9, 5, 8, 6, 0, 1, 8, 8]
    return(
        <>
        <img src = {img} alt = "React"/>
        <Data n = {Name} a = {age} obj = {address} phone = {Phone} student = {Student}/>
        <Class />
        </>
    ) 
}
