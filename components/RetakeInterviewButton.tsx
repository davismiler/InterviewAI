"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Loading from "@/components/Loading"

interface Props {
  interviewId: string
}

const RetakeInterviewButton = ({ interviewId }: Props) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setLoading(true)
    router.push(`/interview/${interviewId}`)
  }

  return (
    <Button onClick={handleClick} className="btn-primary flex-1">
      {loading ? <Loading /> : null}
      <p className="text-sm font-semibold text-black text-center">
        Retake Interview
      </p>
    </Button>
  )
}

export default RetakeInterviewButton
