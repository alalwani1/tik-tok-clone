import React, {useRef, useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song, likes, messages, shares}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">

          <video 
            className="video__player" 
            loop 
            onClick={onVideoPress}
            ref={videoRef} 
            src={url} type="video/mp4"> </video>
            
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} messages={messages} shares={shares}/>
            {/* Video Footer */}
            {/* Video SideBar */}
        </div>
    )
}

export default Video
