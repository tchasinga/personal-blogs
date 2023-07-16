import { useParams , useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Selftdisplayingdata from "./getUsefetch";
import Loadingsystemduringapicall from "../Hook/Loadingpages";
import Messagingyourerrors from "../Errors/Messagebugs";
const Blogdetails = () => {
    const { id } = useParams()
    const {data: blog, isPending , error} = Selftdisplayingdata('http://localhost:9000/blogs/' + id)
     const history = useHistory();
     const handleDelete = () =>{
        fetch('http://localhost:9000/blogs/' + id, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('Blog deleted')
            history.push('/')
        })
     }  

    return (
        <div className="blog-details">
            {isPending && <Loadingsystemduringapicall/>}
            {error && <Messagingyourerrors/>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p>
                 <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default Blogdetails;