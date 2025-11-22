import { getRandomInterviewCover } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";

import DisplayTechicons from "./DisplayTechicons";
import { getFeedbackByInterviewId } from "@/lib/actions/generate.action";
import CheckFeedbackInterviewButton from "./CheckFeedbackInterviewButton";

const InterviewCard =  async ({ id, userId, role, type, techstack, createdAt}: InterviewCardProps) =>  {
  const feedback = userId && id ? await getFeedbackByInterviewId({interviewId : id, userId}) : null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
   
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
  return (
    <div className="card-border w-[360px]  max-sm:w-full h-88 sm:h-83 ">
      
    <div className="card-interview ">
      
      <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg" style={{
        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(139, 92, 246, 0.8) 50%, rgba(236, 72, 153, 0.8) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}>
     
     <p className="badge-text text-white">
      {normalizedType}</p>
      </div>
     
      <Image src={getRandomInterviewCover()} alt='cover' width={90} height={90} className="rounded-full object-fit mt-[-5%] size-[50px]" />

      <h3 className="mt-[-10%] capitalize">{role} Position</h3>

      <div className="flex flex-row  mt-[-10%]">

        <div className="flex flex-row gap-2">

          <Image src="/calendar.svg" alt="calender" width={22} height={22} />
        <p>{formattedDate}</p>

        <div className="flex flex-row gap-2 items-center j"><Image src="/star.svg" alt="star" width={22} height={22} className="" />
        <p>{feedback?.totalScore || '---'}/100</p>
        </div>
        </div> 
      </div>
      <p className="line-clamp-2 mt-[-10%]">{feedback?.finalAssessment || "Start this interview to practice your skills and receive personalized feedback on your performance." }</p>
    
    <div className="flex flex-row justify-between">
      <DisplayTechicons techStack={techstack} />
      <CheckFeedbackInterviewButton hasFeedback={!!feedback} interviewId={id} />

      </div>
    </div>
  </div>

  )
}

export default InterviewCard;