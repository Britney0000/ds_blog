import React from 'react'
import "./post.css"

function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://i.pinimg.com/736x/be/1f/a3/be1fa383ac684bdfda8c63f974dc79b6.jpg" alt=''/>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet 
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Accusantium consequuntur doloremque fugiat dolor eveniet 
        sint quasi, assumenda dolores similique distinctio, 
        molestias fuga praesentium cupiditate? Delectus aut 
        molestiae alias architecto magni.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Accusantium consequuntur doloremque fugiat dolor eveniet 
        sint quasi, assumenda dolores similique distinctio, 
        molestias fuga praesentium cupiditate? Delectus aut 
        molestiae alias architecto magni.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Accusantium consequuntur doloremque fugiat dolor eveniet 
        sint quasi, assumenda dolores similique distinctio, 
        molestias fuga praesentium cupiditate? Delectus aut 
        molestiae alias architecto magni.</p>

    </div>
  )
}

export default Post