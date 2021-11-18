import React from 'react'
import Post from './Post'

const a = [
    {
        id:"1",
        userName:"ST",
        userImg:"https://www.btvbharat.in/wp-content/uploads/2021/11/shahrukh-khan-scaled.jpg",
        img:"https://www.btvbharat.in/wp-content/uploads/2021/11/shahrukh-khan-scaled.jpg",
        caption:"didiidid"
    },
    {
        id:"2",
        userName:"RT",
        userImg:"https://www.btvbharat.in/wp-content/uploads/2021/11/shahrukh-khan-scaled.jpg",
        img:"https://www.btvbharat.in/wp-content/uploads/2021/11/shahrukh-khan-scaled.jpg",
        caption:"didiidid"
    }
]
function Posts() {
    return (
        <div>
          {a.map(ele=>(
              <Post key={ele.id} id={ele.id} userName={ele.userName} userImage={ele.userImg} img={ele.img} caption={ele.caption}/>
          ))} 
        </div>
    )
}

export default Posts
