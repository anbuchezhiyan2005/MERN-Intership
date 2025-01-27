import { useParams } from "react-router-dom"

export default function Admin() {
    const {id1} = useParams()
    return(
        <>
        <h2>Admin ID: {id1}</h2>
        </>
    )

}