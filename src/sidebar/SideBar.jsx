import React from 'react'
import "./SideBar.css"
import Sidebaroption from './Sidebaroption'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Button} from "@mui/material"
function Sidebar() {
  return (
    <div className='sidebar'>
        <Sidebaroption Icon={HomeIcon} text="Home"></Sidebaroption>
        <Sidebaroption Icon={SearchIcon} text="Explore"></Sidebaroption>
        <Sidebaroption Icon={NotificationsIcon}text="Notifications"></Sidebaroption>
        <Sidebaroption Icon={MailOutlineIcon} text="Messsages"></Sidebaroption>
        <Sidebaroption Icon={BookmarkIcon} text="Bookmarks"></Sidebaroption>
        <Sidebaroption Icon={ListAltIcon} text="Lists"></Sidebaroption>
        <Sidebaroption Icon={PermIdentityIcon} text="Profile"></Sidebaroption>
        <Sidebaroption Icon={MoreHorizIcon} text="More"></Sidebaroption>
        <Button variant='outlined' className='sidebartweet' fullWidth >Tweet</Button>
    </div>
  )
}

export default Sidebar