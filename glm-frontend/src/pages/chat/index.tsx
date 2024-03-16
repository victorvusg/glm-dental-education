import { Button, Input, Space } from 'antd';
import { useCallback } from 'react';
import ChatBox from '../../components/chat/chatbox';

const Chat = () => {
  const onAsk = useCallback(() => {}, []);

  return (
    <div
      style={{
        width: '1400px',
        display: 'flex',
        gap: '8px',
        flexDirection: 'column',
      }}
    >
      <ChatBox />
      <Input width={1000} defaultValue='Ask something' />
      <Button type='primary' onClick={() => onAsk()}>
        Submit
      </Button>
    </div>
  );
};

export default Chat;
