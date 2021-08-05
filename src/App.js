import React, { useState, useEffect } from 'react';
import Video from './Video.js';
import db  from './firebase.js';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>
        setPosts(snapshot.docs.map(doc => doc.data())))
  }, []);


  return (
    <div className="app">
        
        <div className="app__videos">
          {
            posts.map(({url, channel, description, song, likes, messages, shares}) => (
            <Video url={url} channel={channel} description={description} song={song} likes={likes} messages={messages} shares={shares}/>
          ))}

        </div>

    </div>
  );
}

export default App;
