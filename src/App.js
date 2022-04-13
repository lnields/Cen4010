import React from 'react';
import VideoPlayer from './Components/VideoPlayer/videoPlayerApp';
import 'stream-chat-react/dist/css/index.css';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
		<div>
		<Navbar/>
		<VideoPlayer/>
		</div>
  );
	}
export default App;
