import { Button, Input } from 'antd';
import { useCallback, useState } from 'react';
import ChatBox from '../../components/chat/chatbox';
import { processMessage } from '../../services/api';

export interface Message {
  role: Role;
  content: string;
}

export enum Role {
  'USER' = 'user',
  'SYSTEM' = 'system',
}

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const [dialog, setDialog] = useState<Message[]>([]);

  console.log(dialog);

  const onAsk = useCallback(() => {
    processMessage(message)
      .then((data) => {
        setDialog([
          ...dialog,
          {
            role: Role.USER,
            content: message,
          },
          {
            role: Role.SYSTEM,
            content: data,
          },
        ]);
        setMessage('');
      })
      .catch(() => {});
  }, [message, setMessage, dialog]);

  return (
    <div
      style={{
        width: '1400px',
        display: 'flex',
        gap: '8px',
        flexDirection: 'column',
      }}
    >
      <ChatBox dialog={dialog} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <Input
          width={1000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onPressEnter={() => onAsk()}
        />
        <Button type='primary' onClick={() => onAsk()}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
