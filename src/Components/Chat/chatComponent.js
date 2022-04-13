import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('u6pt66gzaxd5');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicmVkLWhpbGwtMyJ9.3ui6dt4Fk6g1eMrAc-fcrV-y_ar15zIqall6mKEket0';

chatClient.connectUser(
  {
    id: 'red-hill-3',
    name: 'red-hill-3',
    image: 'https://getstream.io/random_png/?id=red-hill-3&name=red-hill-3',
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'spacex', {
  image: 'https://goo.gl/Zefkbx',
  name: 'SpaceX launch discussion',
});

const ChatApp = () => (
  <Chat client={chatClient} theme='livestream dark'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader live />
        <VirtualizedMessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
    </Channel>
  </Chat>
);

export default ChatApp;
