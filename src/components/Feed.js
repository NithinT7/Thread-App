import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import Post from './Post';
import "../component-styles/Feed.css"

const Feed = () => {
  const { user } = useContext(AppContext);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (user) {
      setUserId(user.substring(0, user.indexOf('@')));
    }
  }, [user])
  return (
    <div className="Feed">
      <h1>Welcome to the Feed, {userId}</h1>
        <Post />
    </div>
  )
}

export default Feed