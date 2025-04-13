'use client';

import { cn } from '@/lib/utils';
import { vapi } from '@/lib/vapi.sdk';


import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface SavedMessage {
  role: 'user' | 'system' | 'assistant';
  content: string;
}
const Agent = ({userName, userId, type}: AgentProps) => {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
  const [messages, setMessages] = useState<SavedMessage[]>([]);

   // const callStatus = CallStatus.ACTIVE;
    //const isSpeaking = true;
    //const messages = [
     //   'Whats your name?',
     //   'My name is John Doe, nice to meet you!'
    //];

    useEffect(() => {
   const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
   const onCallEnd = () => setCallStatus(CallStatus.FINISHED);
   const onMessage = (message: Message) => {
    if(message.type === 'transcript' && message.transcriptType === 'final'){
      const newMessage = { role: message.role, content: message.transcript}
      setMessages((prev) => [...prev,newMessage]);
    }
   }
   const onSpeechStart = () => setIsSpeaking(true);
   const onSpeechEnd = () => setIsSpeaking(false);
  const onError = (error: Error) => console.log('Error',error);
  vapi.on('call-start',onCallStart);
  vapi.on('call-end',onCallEnd);
  vapi.on('message',onMessage)
  vapi.on('speech-start',onSpeechStart);
  vapi.on('speech-end',onSpeechEnd);
  vapi.on('error',onError);

  return () => {
    vapi.off('call-start',onCallStart);
    vapi.off('call-end',onCallEnd);
    vapi.off('message',onMessage)
    vapi.off('speech-start',onSpeechStart);
    vapi.off('speech-end',onSpeechEnd);
    vapi.off('error',onError);
  }
    }, [])
    useEffect(() => {
      if(callStatus === CallStatus.FINISHED) {
        setIsRedirecting(true); // Trigger loader before navigation
        router.push('/dashboard');
      }
      
    },[callStatus, router]); // ✅ include dependencies)
    
    const handleCall = async () => {
      setCallStatus(CallStatus.CONNECTING);
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!,{
        variableValues:{
          username: userName,
          userid:userId,
        }
      })
    }
    const handleDisconnect = async () => {
      setCallStatus(CallStatus.FINISHED);
      vapi.stop();
    }
                      
    const latestMessage = messages[messages.length - 1]?.content;

    const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED;

  return (
    <>
    <div className='call-view'>
    {isRedirecting && (
  <div >
    <Loading />
  </div>
)}
        <div className='card-interviewer'>
            <div className='avatar' ><Image src="/Connor.webp" alt="connor" width={114} height={65} className='object-cover rounded-full'/>{isSpeaking && <span className='animate-speak'/>}</div>
            <h3>Connor </h3>
            <h4>Interview Architect

</h4>
        </div>
        <div className='card-border'>
            <div className='card-content'>
                <Image src="/user-avatar.png" width={540} height={540}  className="rounded-full object-cover size-[120px]" alt="user" /> <h3>{userName}</h3>
            </div>
        </div>
    </div>

      {messages.length > 0 && (
        <div className='transcript-border' >
            <div className='transcript'>
                <p key={latestMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>{latestMessage}</p>
            </div>
        </div>
      )}

    <div className='w-full flex justify-center'>
    {callStatus !== 'ACTIVE' ? (
  <button className='realtive btn-call' onClick={handleCall}>
    <span className={cn( 'absolute animate-ping rounded-full opacity-75', callStatus !== 'CONNECTING' && 'hidden' )}
       />
      <span>
      { isCallInactiveOrFinished ? 'Call' : '. . .'}
      </span>
    
  </button>
) : (
  <button className='btn-disconnect' onClick={handleDisconnect}>
    End
  </button>
)}

    </div>
    </>
  )
}

export default Agent