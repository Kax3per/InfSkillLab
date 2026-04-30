"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function VerifyEmailPage() {
  const router = useRouter()

  const [email, setEmail] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(true)

  // 🔥 sprawdź usera
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()
      const user = data.user

      if (!user) {
        setChecking(false)
        return
      }

      setEmail(user.email || null)

      // 🔥 jeśli już potwierdzony → dashboard
      if (user.email_confirmed_at) {
        router.push("/dashboard")
        return
      }

      setChecking(false)
    }

    checkUser()
  }, [router])

  // 🔥 AUTO REFRESH co 3 sekundy
  useEffect(() => {
    const interval = setInterval(async () => {
      const { data } = await supabase.auth.getUser()
      const user = data.user

      if (user?.email_confirmed_at) {
        toast.success("Email potwierdzony 🎉")
        router.push("/dashboard")
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [router])

  // 🔥 resend email
  const handleResend = async () => {
    if (!email) return

    setLoading(true)

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    })

    setLoading(false)

    if (error) {
      toast.error("Nie udało się wysłać ponownie")
      return
    }

    toast.success("Email wysłany ponownie 📩")
  }

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

          <div className="text-4xl">📩</div>

          <h1 className="text-2xl font-semibold">
            Potwierdź swój email
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Wysłaliśmy link aktywacyjny na:
            <br />
            <span className="font-medium">{email}</span>
            <br /><br />
            Kliknij w mailu, aby aktywować konto.
          </p>

          <Button
            variant="outline"
            onClick={handleResend}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Wysyłanie..." : "Wyślij ponownie"}
          </Button>

          <p className="text-xs text-muted-foreground">
            Po potwierdzeniu zostaniesz automatycznie przekierowany
          </p>

        </CardContent>
      </Card>

    </div>
  )
}