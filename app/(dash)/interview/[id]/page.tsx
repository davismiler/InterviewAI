
import GetInterview from "@/components/GetInterview"
import DisplayTechicons from "@/components/DisplayTechicons";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewById } from "@/lib/actions/generate.action";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async ({ params }: RouteParams)  => {
    const {id} = await params;
    const user = await getCurrentUser();
    const interview = await getInterviewById(id);
    if(!interview) redirect('/dashboard')
  return (
    <>
    <div className="flex flex-row gap-4 justify-between ">
       <div className="flex flex-row gap-4  items-center  max-sm:flex-col">
        <div className="flex flex-row gap-4 items-center">
            <Image src={getRandomInterviewCover()} alt="cover-image" width={40} height={40} className="rounded-full hidden sm:block   object-cover  size-[40px] "/>
         <h3 className="capitalize">{interview.role}</h3>
        </div><div className="hidden sm:block ">
        <DisplayTechicons techStack={interview.techstack} />
        </div>
        
       </div>   
       
    <div className="bg-dark-200 px-5 rounded-lg   sm:h-auto hidden sm:block  capitalize"><p className="mt-2">{interview.type}</p></div>
    
    <div className="sm:hidden ">
        <DisplayTechicons techStack={interview.techstack} /></div>
        
    </div>
    
    <GetInterview  userName={user?.name || ''}
    userId={user?.id}
           interviewId={id}
           type="interview"
           questions={interview.questions}

    />
    </>
  )
}

export default page