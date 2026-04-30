"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const run = async () => {
      await supabase.auth.getSession()
      router.push("/dashboard")
    }

    run()
  }, [router])

  return <div className="h-screen flex items-center justify-center">Logowanie...</div>
}