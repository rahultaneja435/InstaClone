import React from 'react'
import {BookmarkIcon,ChatIcon,DotsHorizontalIcon,EmojiHappyIcon,HeartIcon,PaperAirplaneIcon} from '@heroicons/react/outline'
import {HeartIcon as HeartIconfilled} from '@heroicons/react/solid'
function Post({id,userName,userImage,img,caption}) {
    return (
        <div className="bg-white my-7 border rounded-sm">
          {/* header */}
        <div  className="flex items-center p-5">
            <img className="h-12 w-12 object-contain border p-1 mr-3 rounded-full" src={userImage} alt=""/> 
            <p className="flex-1 font-bold" >{userName}</p>
            <DotsHorizontalIcon className="h-5"/>
        </div>

            {/* img */}
         <img className="object-cover w-full" src={img}/>
          {/* buttons */}
          <div className="flex justify-between">
          <div className="flex space-x-4">
              <HeartIcon className="btn"/>
              <ChatIcon className="btn"/>
              <PaperAirplaneIcon className="btn"/>
          </div>
              <BookmarkIcon className="btn" />
          </div>
          {/* caption */}
          {/* comments */}
          {/* input box */}
        </div>
    )
}

export default Post
