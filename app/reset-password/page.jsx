"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [repeat, setRepeat] = useState("")
  const [loading, setLoading] = useState(false)

  const handleReset = async () => {
    if (password.length < 8) {
      toast.error("Min. 8 znaków")
      return
    }

    if (password !== repeat) {
      toast.error("Hasła nie są takie same")
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.updateUser({
      password,
    })

    setLoading(false)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success("Hasło zmienione")
  }

  import { useEffect } from "react"
useEffect(() => {
  const handleSession = async () => {
    const hash = window.location.hash

    if (hash.includes("access_token")) {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href)

      if (error) {
        console.error(error)
      }
    }
  }

  handleSession()
}, [])

  return (
    <div className="max-w-md mx-auto mt-20 space-y-4">
      <Input
        type="password"
        placeholder="Nowe hasło"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Powtórz hasło"
        onChange={(e) => setRepeat(e.target.value)}
      />

      <Button onClick={handleReset} disabled={loading}>
        Ustaw nowe hasło
      </Button>
    </div>
  )
}