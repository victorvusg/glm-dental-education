import { Input, Select } from 'antd';
import { useCallback, useState } from 'react';
import ChatBox from '../../components/chat/chatbox';
import { processMessage } from '../../services/api';
import TextArea from 'antd/es/input/TextArea';

export interface Message {
  role: Role;
  content: string;
}

export enum Role {
  'USER' = 'user',
  'SYSTEM' = 'assistant',
}

const Chat = () => {
  const [message, setMessage] = useState<string>('');
  const [dialog, setDialog] = useState<Message[]>([]);
  const [options, setOptions] = useState<string[]>(
    (JSON.parse(localStorage.getItem('tags') || '[]') as string[]) || []
  );
  const [patientName, setPatientName] = useState<string>(
    localStorage.getItem('patientName') || ''
  );
  const [patientContext, setPatientContext] = useState<string>(
    localStorage.getItem('context') || ''
  );

  const onAsk = useCallback(() => {
    processMessage(message, dialog, options, patientContext, patientName)
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
  }, [message, setMessage, dialog, options, patientContext, patientName]);

  const onChangeTags = (values: string[]) => {
    console.log(values, 'values');

    setOptions(values);
    localStorage.setItem('tags', JSON.stringify(values));
  };

  const onChangeContext = (value: string) => {
    setPatientContext(value);
    localStorage.setItem('context', value);
  };

  const onChangePatientName = (value: string) => {
    setPatientName(value);
    localStorage.setItem('patientName', value);
  };

  const onSave = () => {
    setDialog([]);
  };

  return (
    <div
      style={{
        width: '1400px',
        display: 'flex',
        gap: '8px',
        flexDirection: 'row',
      }}
    >
      <div className='mr-24'>
        <div className='flex flex-col'>
          <h2 className='text-[24px] mb-24'>Configuration</h2>
          <p className='mt-8 mb-2'>Patient's name:</p>
          <Input
            className='mb-6'
            value={patientName}
            onChange={(e) => onChangePatientName(e.target.value)}
          />
          <p className='mb-2'>Patient's symptoms:</p>
          <Select
            defaultValue={options}
            mode='tags'
            style={{ maxWidth: '200px', width: '200px' }}
            placeholder='Tags Mode'
            onChange={onChangeTags}
            options={
              options?.map((v) => {
                return { label: v, value: v };
              }) || []
            }
          />

          <p className='mt-8 mb-2'>Patient's context:</p>
          <TextArea
            value={patientContext}
            onChange={(e) => onChangeContext(e.target.value)}
          />

          <div className='mt-8 justify-items-end'>
            <button className='bg-blue-500 text-white' onClick={onSave}>
              Save
            </button>
          </div>
        </div>
      </div>
      <div className='grow'>
        <ChatBox dialog={dialog} />
        <div className='flex gap-8 mt-2'>
          <Input
            width={1000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onPressEnter={() => onAsk()}
          />
          <button className='bg-blue-500 text-white ' onClick={() => onAsk()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
