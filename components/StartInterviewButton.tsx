"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import Loading from "./Loading"
import { useRouter } from "next/navigation"

const StartInterviewButton = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setLoading(true)
    router.push("/interview")
  }

  return (
    <Button onClick={handleClick} className="btn-primary w-full sm:w-[30%]">
      {loading ? <Loading /> : ""}
      <p className="text-black">Start an Interview</p>
    </Button>
  )
}

export default StartInterviewButton
