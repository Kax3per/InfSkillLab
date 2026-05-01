"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🔥 WALIDACJA
    if (!name.trim()) return toast.info("Podaj imię")
    if (!email.trim()) return toast.info("Podaj email")
    if (!email.includes("@")) return toast.warning("Niepoprawny email")
    if (!password.trim()) return toast.info("Podaj hasło")
    if (password.length < 8) return toast.error("Min. 8 znaków")
    if (password !== confirmPassword)
      return toast.warning("Hasła nie są takie same")

    setLoading(true)

    // 🔥 SIGNUP (TYLKO SUPABASE)
const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    emailRedirectTo: `${window.location.origin}/auth/callback`,
  },
})
    if (error) {
      toast.error(error.message)
      setLoading(false)
      return
    }

    if (!data.user) {
      toast.error("Błąd tworzenia użytkownika")
      setLoading(false)
      return
    }

    // 🔥 KLUCZOWE — wyloguj po signup
    await supabase.auth.signOut()

    // 🔥 opcjonalnie zapis do profiles
    try {
      await supabase.from("profiles").upsert({
        id: data.user.id,
        email: data.user.email,
      })
    } catch (err) {
      console.log("Profile error (ignored):", err)
    }

    toast.success("📩 Sprawdź email i potwierdź konto")

    router.push("/verify-email")

    setLoading(false)
  }

  // 🔥 GITHUB LOGIN
  const handleGithubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      toast.error("Błąd logowania GitHub")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Zarejestruj się</h1>
          <p className="text-sm text-muted-foreground">
            Wypełnij formularz, aby utworzyć konto
          </p>
        </div>

        <Field>
          <FieldLabel>Imię</FieldLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        <Field>
          <FieldLabel>Hasło</FieldLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FieldDescription>Min. 8 znaków</FieldDescription>
        </Field>

        <Field>
          <FieldLabel>Powtórz hasło</FieldLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Field>

        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? "Tworzenie..." : "Stwórz konto"}
          </Button>
        </Field>

        <FieldSeparator>Zaloguj się za pomocą</FieldSeparator>

        <Field>
          <Button
            variant="outline"
            type="button"
            onClick={handleGithubLogin}
          >
            GitHub
          </Button>

          <div className="px-6 text-sm text-center">
            Masz już konto?{" "}
            <a href="/login" className="underline underline-offset-4">
              Zaloguj się
            </a>
          </div>
        </Field>
      </FieldGroup>
    </form>
  )
}