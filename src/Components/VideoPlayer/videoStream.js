import React from "react";
import io from 'socket.io-client';
const VideoPlayer = () =>{
	var socket=io();

	socket.on('')
	return(
		<div>
			<body>
				<video id = "video" width="100%" height="100%" controls>
					<source src = "../../assests/iPhone_745_MOV_AdobeCreativeCloudExpress.mp4" type = "video/mp4" onCanPlay={socket.emit('video loaded')} onPlay={socket.emit('video playing')}/>
					<source src="movie.ogg" type="video/ogg" />
				</video>
				
			</body>
		</div>
	)
}
export default VideoPlayer