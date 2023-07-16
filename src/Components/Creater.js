import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Creater = () => {
  const [title, setTitlle] = useState(''); 
  const [body, setBody] = useState('');
  const [author ,  setAthor] = useState('')
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  // Submission side 
  const handleSubmit = (e) => {
      e.preventDefault();
        const blog = {title, body, author}
      console.log(title, body, author);

      setIsPending(true);

       fetch('http://localhost:9000/blogs', {
        method: 'POST',
        headers: {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(blog)
       }).then(() =>{
           console.log('Blog added')
           setIsPending(false)
        //    history.go(-1)
        history.push('/')
       })
      
  }


    return (
       <div className="creater">
       <h1>Creater a new blogs...</h1>
       <form onSubmit={handleSubmit}>
           <label htmlFor="title">Title adding :</label>
           <input type="text" value={title} onChange={(e) => setTitlle(e.target.value)} name="title" id="title" placeholder="Title"/>
           <label htmlFor="body">Body area :</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)} placeholder="Insert data...">
          </textarea>
          <label htmlFor="">Author is : </label>
          <select value={author} onChange={(e) => setAthor(e.target.value)}>
              <option value="tchasinga">Tchasinga</option>
              <option value="balolebwami">Balolebwami</option>
              <option value="binja">Binja</option>
              <option value="tchibalonza">tchibalonza</option>
              <option value="batumike">Batumike</option>
          </select>
            {!isPending && <button>Add Blog..</button>}
            {isPending && <button disabled>Adding...</button>}
       </form>
       </div>
    );
}
 
export default Creater;