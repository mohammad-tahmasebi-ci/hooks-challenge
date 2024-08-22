import React from 'react'

function PostItem(props) {
  return (
    <div>
      {props.posts.map(post => {
          return (
          <div>
              <p>{post.title}</p>
              <p>{post.name}</p>
              <img src={post.image} alt='some image'/>
              <p>{post.description}</p>
          </div>
          )
      })}
    </div>
  )
}

export default PostItem
