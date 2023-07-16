import { useEffect , useState } from "react"
import Messagingyourerrors from "../Errors/Messagebugs"
const Selftdisplayingdata = (url) => {
    const [data , setData] = useState(null)
    const [isPending , setIsPending] = useState(true)
    const [error , setErrors] = useState(null) 
    // useEffect using fetch request , for database using local API
    useEffect(() => {
        //used to clean data after playing with Data
        const abortCont = new AbortController();

       setTimeout(() =>{
        fetch(url, {signal: abortCont.signal})
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
            setErrors(false)
        })
        .catch(err => {
            if(err.name === 'AbortError'){
              console.log('fetch code data')
            }
            setIsPending(false)
            setErrors(<Messagingyourerrors/>)
        })
       }, 3000)
       return () => abortCont.abort()
    }, [url])

    return {
        data , isPending , error
    }

}
 
export default Selftdisplayingdata;