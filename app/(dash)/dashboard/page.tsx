
import InterviewCard from "@/components/InterviewCard"
import { Button } from "@/components/ui/button"
import { dummyInterviews } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <>
     <section className="card-cta">
     <div className='flex flex-col gap-6 text-center items-center w-full'>
     
         <div  className="text-[120%] sm:text-3xl font-bold" >Get Interview-Ready with Smart Practice and Real Feedback</div>
         
         <p className="text-[110%] max-sm:hidden  max-md:hidden sm:text-lg">Because every word counts when the job’s on the line</p>
         <Image src="/kara.webp" alt='Kara' width={210} height={200} className="block md:hidden "/>
         <Button asChild className="btn-primary  w-full sm:w-[30%]"><Link href="/interview">Start an Interview</Link>
         </Button>
        
     </div>
     
     <Image src="/kara.webp" alt='Kara' width={280} height={280} className="max-sm:hidden max-md:hidden "/>
     </section>
     <section className="flex flex-col gap-3 sm:gap-6 mt-6 ">
      <h2>Your Interviews</h2>
      <div className="w-full px-4">
         <div className="interview-section grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{dummyInterviews.map((interview) => (
          
          <div key={interview.id} className="interview-wrapper flex justify-center">
          <InterviewCard {...interview}  /></div>
         ))}
          {/*<p> You haven’t taken any Interviews yet</p>*/}
          </div>
         </div>
     </section>
     <section className="flex flex-col gap-3 sm:gap-6 mt-6">
      <h2 > Take an Interview</h2>
      <div className="w-full px-4">
      <div className="interview-section grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {dummyInterviews.map((interview) => (
          <div key={interview.id} className="interview-wrapper flex justify-center">
          <InterviewCard {...interview}  /> </div>
         ))}
        {/*<p>There are no interviews available</p>*/}
      </div>
      </div>
     </section>
    </>
  )
}

export default page