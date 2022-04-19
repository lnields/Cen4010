import React, { useEffect, useState } from "react";
import io from 'socket.io-client';

const ENDPOINT = "http://127.0.0.1:3000";




const VideoPlayer = () =>{
	const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("FromAPI", data => {
      console.log('connected');
    });
  }, []);
	var socket=io();

	socket.on('')
	return(
		<div>
			<body>
				<video id = "video" width="100%" height="100%" controls>
					<source src = "../../assests/iPhone_745_MOV_AdobeCreativeCloudExpress.mp4" type = "video/mp4" 
					onCanPlay={socket.emit('video loaded')} 
					onPlay={socket.emit('video playing')} 
					onPause={socket.emit('video paused')}/>
				</video>
			</body>
		</div>
	)
}
export default VideoPlayer