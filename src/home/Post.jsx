import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';
function Post({
    displayname,
    username,
    verified,
    text,
    image,
    avatar
}) {
    
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>{displayname}</h3>
                    {verified  && <VerifiedUserIcon className='post__badge'  />}
                    <p>{username}</p>

                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="" />
            <div className="post__footer">
            <ChatBubbleIcon fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <FavoriteIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post