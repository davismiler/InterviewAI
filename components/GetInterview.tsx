'use client';
import {  interviewer } from '@/constants';
import { createFeedback } from '@/lib/actions/generate.action';
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
const GetInterview = ({userName, userId, type, interviewId, questions}: GetInterviewProps) => {
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
    const handleGenerateFeedback = async (messages: SavedMessage[] ) => {
      console.log('Generate feedback here.');
      const { success, feedbackId: id } = await createFeedback({
        interviewId: interviewId!,
        userId: userId!,
        transcript: messages,
       
      });
      

      if (success && id ) {
        router.push(`/interview/${interviewId}/feedback`)
        setIsRedirecting(true) // Start loading before route change
      } else {
        console.log('Error saving feedback')
        router.push('/dashboard');
      }
    }
    useEffect(() => {
      if(callStatus === CallStatus.FINISHED) {
        if(type === 'generate'){
          router.push('/')
        } else {
          handleGenerateFeedback(messages);
        }
      };
    })
    
    const handleCall = async () => {
      setCallStatus(CallStatus.CONNECTING);
  
      if (type === "generate") {
        await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
          variableValues: {
            username: userName,
            userid: userId,
          },
        });
      } else {
        let formattedQuestions = "";
        if (questions) {
          formattedQuestions = questions
            .map((question) => `- ${question}`)
            .join("\n");
        }
  
        await vapi.start(interviewer, {
          variableValues: {
            questions: formattedQuestions,
          },
        });
      }
    };
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
            <div className='avatar size-[130px]' ><Image src="/Chloe RT600.webp" alt="connor" width={123} height={65} className='object-cover rounded-full'/>{isSpeaking && <span className='animate-speak'/>}</div>
            <h3>Chloe</h3>
            <h4>Virtual Interviewer</h4>
        </div>
        <div className='card-border'>
            <div className='card-content'>
                <Image src="/user-avatar.png" width={543} height={540}  className="rounded-full object-cover size-[120px]" alt="user" /> <h3>{userName}</h3>
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

export default GetInterview