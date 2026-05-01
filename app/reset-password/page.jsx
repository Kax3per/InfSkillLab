 "use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Lock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ResetPasswordPage() {
  const router = useRouter()

  const [password, setPassword] = useState("")
  const [repeat, setRepeat] = useState("")
  const [loading, setLoading] = useState(false)
  const [ready, setReady] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeat, setShowRepeat] = useState(false)

  // 🔥 KLUCZOWE – pobranie sesji z linka
useEffect(() => {
  const init = async () => {
    const { error } = await supabase.auth.exchangeCodeForSession(
      window.location.href
    )

    if (error) {
      toast.error("Link wygasł lub niepoprawny")
      return
    }

    setReady(true)
  }

  init()
}, [])
  const handleReset = async () => {
    if (password.length < 8) {
      toast.error("Hasło musi mieć min. 8 znaków")
      return
    }

    if (password !== repeat) {
      toast.error("Hasła nie są takie same")
      return
    }

    setLoading(true)

    const { error } =await supabase.auth.updateUser(
  { password },
  { accessToken: window.location.hash.split("access_token=")[1].split("&")[0] }
)

    setLoading(false)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success("Hasło zmienione 🎉")

    setTimeout(() => {
      router.push("/login")
    }, 1500)
  }

  // 🔥 loading zanim sesja się ustawi
  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Ładowanie...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md space-y-6 border rounded-2xl p-8 shadow-sm">

        {/* LOGO / HEADER */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
              <Lock size={20} />
            </div>
          </div>

          <h1 className="text-2xl font-semibold">
            Ustaw nowe hasło
          </h1>

          <p className="text-sm text-muted-foreground">
            Wprowadź nowe hasło do swojego konta
          </p>
        </div>

        {/* HASŁO */}
        <div className="space-y-4">

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Nowe hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* POWTÓRZ */}
          <div className="relative">
            <Input
              type={showRepeat ? "text" : "password"}
              placeholder="Powtórz hasło"
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
              className="pr-10"
            />

            <button
              type="button"
              onClick={() => setShowRepeat(!showRepeat)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showRepeat ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

        </div>

        {/* BUTTON */}
        <Button
          onClick={handleReset}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Zmienianie..." : "Zmień hasło"}
        </Button>

      </div>
    </div>
  )
}