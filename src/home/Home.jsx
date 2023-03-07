import Sidebar from "../sidebar/SideBar";
import React from 'react'
import Statics from "./Statics";
import Feed from "./Feed";

function Home() {
  return (
   <div className="app">
    <Sidebar></Sidebar>
    <Feed></Feed>
    <Statics></Statics>
   </div>
  )
}

export default Home