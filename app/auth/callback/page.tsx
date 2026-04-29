"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function Callback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      const { data } = await supabase.auth.getUser()

      if (data.user) {
        router.push("/dashboard")
      } else {
        router.push("/login")
      }
    }

    handleAuth()
  }, [])

  return <p>Logowanie...</p>
}