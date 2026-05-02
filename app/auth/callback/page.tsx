"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const run = async () => {
      const url = new URL(window.location.href)

      const code = url.searchParams.get("code")

      if (!code) {
        router.replace("/login")
        return
      }

      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error(error)
        router.replace("/login")
        return
      }

      router.replace("/dashboard")
    }

    run()
  }, [router])

  return (
    <div className="h-screen flex items-center justify-center">
      Logowanie...
    </div>
  )
}