"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Loading from "@/components/Loading"

const BackToDashboardButton = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setLoading(true)
    router.push("/dashboard")
  }

  return (
    <Button onClick={handleClick} className="btn-secondary flex-1">
      {loading ? <Loading /> : null}
      <p className="text-sm font-semibold text-primary-200 text-center">
        Back to dashboard
      </p>
    </Button>
  )
}

export default BackToDashboardButton
