import '../App/App.css';

function PostLink(){

  return(
    <div className="post-link-content">
     <div className="wrapper item"></div>
     <div className="wrapper item"></div>
     <div className="wrapper item">
        <input  type="text" value="post link" placeholder='URL'></input>
     </div>
     <div className="wrapper item">
     <input  type="text" value="title" placeholder='Title'></input>
     </div>
     <div className="description item">
     <input  id="des" type="text" value="des" placeholder='Description'></input>
     </div>
     <button type='submit'>Submit</button>
    </div>
  )


};

export default PostLink;