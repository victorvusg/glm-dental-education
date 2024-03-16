import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Skeleton } from 'antd';
import { Message, Role } from '../../../pages/chat';

interface Props {
  dialog: Message[];
}

const ChatBox = ({ dialog }: Props) => {
  return (
    <div
      id='scrollableDiv'
      style={{
        height: 800,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={dialog.length}
        next={() => {}}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        scrollableTarget='scrollableDiv'
        hasMore={false}
        inverse={false}
      >
        <List
          dataSource={dialog}
          renderItem={(message: Message) => (
            <List.Item
              style={{
                display: 'flex',
                flexDirection:
                  message.role === Role.USER ? 'row-reverse' : 'row',
              }}
            >
              <List.Item.Meta />
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div>
                  <p style={{ fontWeight: 'bold' }}>{message.role}:</p>
                </div>
                <div>{message.content}</div>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ChatBox;
