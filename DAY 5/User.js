import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function User() {
    const users = useSelector((state) => state.userInfo.eusers)
    console.log('The Users are: ', users)
}