import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"

import React from 'react'

function Single() {
  return (
    <div className="single">
        {/* post */}
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single