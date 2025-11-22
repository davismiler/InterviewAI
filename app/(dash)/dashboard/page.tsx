
import InterviewCard from "@/components/InterviewCard"
import StartInterviewButton from "@/components/StartInterviewButton"
import { Button } from "@/components/ui/button"
import {getCurrentUser} from "@/lib/actions/auth.action"
import {  getInterviewByUserId, getLatestInterviews } from "@/lib/actions/generate.action"
import Image from "next/image"


const page = async () => {
  const user = await getCurrentUser();
  const [ userInterviews,latestInterviews ] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({userId: user?.id! })
  ])

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
     <section className="card-cta">
     <div className='flex flex-col gap-6 text-center items-center w-full'>
     
         <div  className="text-[120%] sm:text-3xl font-bold" >Prepare for Success with AI-Powered Interview Practice</div>
         
         <p className="text-[110%] max-sm:hidden  max-md:hidden sm:text-lg">Practice with confidence and receive detailed feedback to improve your performance</p>
         <Image src="/kara.webp" alt='Kara' width={210} height={200} className="block md:hidden "/>
         <Button asChild className="btn-primary  w-full sm:w-[30%]"><StartInterviewButton />
         </Button>
        
     </div>
     
     <Image src="/kara.webp" alt='Kara' width={280} height={280} className="max-sm:hidden max-md:hidden "/>
     </section>
     <section className="flex flex-col z-10 gap-3 sm:gap-6 mt-6 ">
      <h2>My Interview History</h2>
      <div className="w-full px-4">
         <div className="interview-section z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{
          hasPastInterviews ? (
         userInterviews?.map((interview) => (
          <div key={interview.id} className="interview-wrapper z-10 flex justify-center">
          <InterviewCard {...interview}  /></div>
         ))) : (<p>You haven't completed any interviews yet. Start your first practice session to begin improving your skills.</p>) }
          {/**/}
          </div>
         </div>
     </section>
     <section className="flex flex-col gap-3 z-10 sm:gap-6 mt-6">
      <h2>Available Practice Interviews</h2>
      <div className="w-full z-10 px-4">
      <div className="interview-section z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
          hasUpcomingInterviews ? (
         latestInterviews?.map((interview) => (
          <div key={interview.id} className="interview-wrapper z-10 flex justify-center">
          <InterviewCard {...interview}  /></div>
         ))) : (<p>No practice interviews are currently available. Check back soon for new opportunities.</p>) }
          {/**/}
      </div>
      </div>
     </section>
    </>
  )
}

export default page