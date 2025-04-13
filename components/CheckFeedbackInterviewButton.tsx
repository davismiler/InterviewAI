"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import Loading from "./Loading"

interface Props {
  hasFeedback: boolean
  interviewId: string
}

const CheckFeedbackInterviewButton = ({ hasFeedback, interviewId }: Props) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setLoading(true)
    const url = hasFeedback
      ? `/interview/${interviewId}/feedback`
      : `/interview/${interviewId}`
    router.push(url)
  }

  return (
    <Button onClick={handleClick} className="btn-primary">
      {loading ? <Loading /> : ""}
      <p className="text-black">{hasFeedback ? "Check Feedback" : "View Interview"}</p>
    </Button>
  )
}

export default CheckFeedbackInterviewButton
