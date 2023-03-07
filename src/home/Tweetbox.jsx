import React from 'react'
import "./Tweetbox.css"
import { Avatar,Button } from '@mui/material'
function Tweetbox() {
  return (
    <div className="tweetbox">
        <form action="">
            {/* <div className="tweetboxinput">
                <Avatar src='https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png'></Avatar>
                <input placeholder="what's happening ?" type="text" />
            </div> */}
            <Button 
            variant='outlined'  fullWidth 
            className='tweetbox__post'
            >Post Anyhing</Button>
        </form>
    </div>
  )
}

export default Tweetbox