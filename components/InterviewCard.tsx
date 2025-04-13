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
      
      <div className="absolute  top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
     
     <p className="badge-text">
      {normalizedType}</p>
      </div>
     
      <Image src={getRandomInterviewCover()} alt='cover' width={90} height={90} className="rounded-full object-fit mt-[-5%] size-[50px]" />

      <h3 className="mt-[-10%] capitalize">{role} Interview</h3>

      <div className="flex flex-row  mt-[-10%]">

        <div className="flex flex-row gap-2">

          <Image src="/calendar.svg" alt="calender" width={22} height={22} />
        <p>{formattedDate}</p>

        <div className="flex flex-row gap-2 items-center j"><Image src="/star.svg" alt="star" width={22} height={22} className="" />
        <p>{feedback?.totalScore || '---'}/100</p>
        </div>
        </div> 
      </div>
      <p className="line-clamp-2 mt-[-10%]">{feedback?.finalAssessment || "You haven't taken interview yet. Take it now to improve your skills." }</p>
    
    <div className="flex flex-row justify-between">
      <DisplayTechicons techStack={techstack} />
      <CheckFeedbackInterviewButton hasFeedback={!!feedback} interviewId={id} />

      </div>
    </div>
  </div>

  )
}

export default InterviewCard;