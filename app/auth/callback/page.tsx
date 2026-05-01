"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const run = async () => {
      // 🔥 NAJWAŻNIEJSZE — zapisuje session z linka
      const { error } = await supabase.auth.exchangeCodeForSession(
        window.location.href
      )

      if (error) {
        console.error(error)
        router.replace("/login")
        return
      }

      // 🔥 daj chwilę na zapis session
      setTimeout(() => {
        router.replace("/dashboard")
      }, 300)
    }

    run()
  }, [router])

  return (
    <div className="h-screen flex items-center justify-center">
      Logowanie...
    </div>
  )
}