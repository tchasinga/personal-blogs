import { useEffect , useState } from "react"
import Messagingyourerrors from "../Errors/Messagebugs"
const Selftdisplayingdata = (url) => {
    const [data , setData] = useState(null)
    const [isPending , setIsPending] = useState(true)
    const [error , setErrors] = useState(null) 
    // useEffect using fetch request , for database using local API
    useEffect(() => {
       setTimeout(() =>{
        fetch(url)
        .then( res => {
            if(!res.ok){
                throw new Error(<Messagingyourerrors/>)
            }
            return res.json()
        })
        .then( data => {
            console.log(data) 
            setData(data)
            setIsPending(false) 
            setErrors(null)
        })
        .catch(err => {
            setIsPending(false)
            setErrors(<Messagingyourerrors/>)
        })
       }, 3000)
    }, [url])

    return {
        data , isPending , error
    }

}
 
export default Selftdisplayingdata;