import '../App/App.css';

function PostLink({ list }){
  
  return(
    <div className="post-link-content">
     <div className="title-item">
       <h3>Put your new links here</h3>
     </div>
     <div className="wrapper-item1">
      <input  type="text" value="post link" placeholder='URL'></input>
     </div>
     <div className="wrapper-item2">
     <input  type="text" value="title" placeholder='Title'></input>
     </div>
     <div className="wrapper-item3">
     <input  id="des" type="text" value="description" placeholder='Description'></input>
     </div>
     <button type='submit'>Submit</button>
     <ul>
  {list.map(list => 
      (<li Style={"list-style: none"}>
          <div className="result">
              <a href={list.URL}>
                  <h3>{list.title}</h3>
              </a>
          </div>
      </li>)
  )}
</ul>
    </div>
  )


};

export default PostLink;