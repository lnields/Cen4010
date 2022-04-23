import React from "react";
import io from 'socket.io-client';

const VideoPlayer = () =>{
	var socket=io();

	socket.on('')
	return(
		<div>
			<body>
				
				<video id = "video" width="100%" height="100%" controls>
					<source src = "/videos/video.mp4" type = "video/mp4" />
				</video>
				
			</body>
		</div>
	)
}
export default VideoPlayer