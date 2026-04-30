"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error(error)
        router.push("/login")
        return
      }

      if (data.session) {
        router.push("/dashboard")
      } else {
        router.push("/login")
      }
    }

    handleAuth()
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-muted-foreground">Logowanie...</p>
    </div>
  )
}