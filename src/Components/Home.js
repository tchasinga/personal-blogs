import BlogsElement from "./Blogstable";
import Loadingsystemduringapicall from "../Hook/Loadingpages";
import Messagingyourerrors from "../Errors/Messagebugs";
import Selftdisplayingdata from "./getUsefetch";
const Home = () => {
    // Single APi call Management...
    const {data : blogs, isPending, error} = Selftdisplayingdata('http://localhost:9000/blogs')
    return (
        <div className="Home">
            {error && <Messagingyourerrors/>}
            {isPending && <Loadingsystemduringapicall />}
            {blogs && <BlogsElement blogs={blogs}  title = "All saved Blogs...!!"/>}
        </div>
    );
}
 
export default Home;