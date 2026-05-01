"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function VerifyEmailPage() {
  const router = useRouter()

  const [email, setEmail] = useState<string | null>(null)
  const [checking, setChecking] = useState(true)

  // 🔥 sprawdz usera
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()
      const user = data.user

      if (!user) {
        setChecking(false)
        return
      }

      setEmail(user.email || null)

      // ✅ jeśli już potwierdzony → dashboard
      if (user.email_confirmed_at) {
        router.replace("/dashboard")
        return
      }

      setChecking(false)
    }

    checkUser()
  }, [router])

  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-muted-foreground">Ładowanie...</p>
      </div>
    )
  }

  return (
    <div className="flex h-screen items-center justify-center px-4">

      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center text-center gap-6 py-10">

          {/* ICON */}
          <div className="text-4xl">📩</div>

          {/* TITLE */}
          <h1 className="text-2xl font-semibold">
            Potwierdź swój email. 
          </h1>
          <p className="text-sm">Jesli nie ma go w skrzynce, Sprawdź spam!</p>

          {/* DESC */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            Wysłaliśmy link aktywacyjny na:
            <br />
            <span className="font-medium">{email}</span>
            <br /><br />
            Kliknij w mailu, aby aktywować konto.
          </p>

          {/* BUTTON */}
          <Button
            onClick={() => router.push("/login")}
            className="w-full"
          >
            Wróć do logowania
          </Button>

          {/* HINT */}
          <p className="text-xs text-muted-foreground">
            Po potwierdzeniu możesz się zalogować
          </p>

        </CardContent>
      </Card>

    </div>
  )
}