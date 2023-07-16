const BlogsElement = ({blogs, title  }) => {
    return (
        <div className="blogs-list">
            <h2>{title}</h2>
               {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title[0]}</h2>
                <h3>{blog.title}</h3>
                <p><span>Details : </span>{blog.body}</p>
                <p><span>Written by : </span>  {blog.author}</p>
            </div>
           ))}
        </div>
    );
}
 
export default BlogsElement