import React from 'react'
import { useState,useEffect } from 'react'
import "./Feed.css"
import Post from './Post'
import Tweetbox from './Tweetbox'
// import usersRef from "./firebase"
function Feed() {

  return (
    <div className="feed">
        <div className="feedheader">
           <h2>Home</h2>
        </div>
        <Tweetbox

        ></Tweetbox>
        <Post
          displayname="Tesla"
          username="@tesla"
          verified={true}
          text="Our residential energy ecosystem provides all software & hardware pieces to reduce electricity bills, make the grid cleaner & enable customers to be their own utility"
          image="https://pbs.twimg.com/card_img/1631203618358534144/oFPtf1Pl?format=jpg&name=small"
          avatar="https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png"
        ></Post>
        <Post
          displayname="Tesla"
          username="@tesla"
          verified={true}
          text="Our residential energy ecosystem provides all software & hardware pieces to reduce electricity bills, make the grid cleaner & enable customers to be their own utility"
          image="https://pbs.twimg.com/card_img/1631203618358534144/oFPtf1Pl?format=jpg&name=small"
          avatar="https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png"
        ></Post>
        <Post
          displayname="Tesla"
          username="@tesla"
          verified={true}
          text="Our residential energy ecosystem provides all software & hardware pieces to reduce electricity bills, make the grid cleaner & enable customers to be their own utility"
          image="https://pbs.twimg.com/card_img/1631203618358534144/oFPtf1Pl?format=jpg&name=small"
          avatar="https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png"
        ></Post>
        <Post
          displayname="Tesla"
          username="@tesla"
          verified={true}
          text="Our residential energy ecosystem provides all software & hardware pieces to reduce electricity bills, make the grid cleaner & enable customers to be their own utility"
          image="https://pbs.twimg.com/card_img/1631203618358534144/oFPtf1Pl?format=jpg&name=small"
          avatar="https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png"
        ></Post>
        <Post
          displayname="Tesla"
          username="@tesla"
          verified={true}
          text="Our residential energy ecosystem provides all software & hardware pieces to reduce electricity bills, make the grid cleaner & enable customers to be their own utility"
          image="https://pbs.twimg.com/card_img/1631203618358534144/oFPtf1Pl?format=jpg&name=small"
          avatar="https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png"
        ></Post>
        <Post
          displayname="Tesla"
          username="@tesla"
          verified={true}
          text="Our residential energy ecosystem provides all software & hardware pieces to reduce electricity bills, make the grid cleaner & enable customers to be their own utility"
          image="https://pbs.twimg.com/card_img/1631203618358534144/oFPtf1Pl?format=jpg&name=small"
          avatar="https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png"
        ></Post>
    </div>
  )
}

export default Feed