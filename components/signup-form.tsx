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
import { Eye, EyeOff } from "lucide-react"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
  if (error.message.includes("rate limit")) {
    toast.error("Za dużo prób. Spróbuj za chwilę." , {position: "top-center"})
    return
  }

  toast.error(error.message)
}

    if (!data.user) {
      toast.error("Błąd tworzenia użytkownika" , {position: "top-center"})
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

    toast.success("📩 Sprawdź email i potwierdź konto" , {position: "top-center"})

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
      toast.error("Błąd logowania GitHub", {position: "top-center"} )
    }
  }

  const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    },
  })

  if (error) {
    toast.error("Błąd logowania Google", { position: "top-center" })
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

  <div className="relative">
    <Input
      type={showPassword ? "text" : "password"}
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

  <FieldDescription>Min. 8 znaków</FieldDescription>
</Field>

       <Field>
  <FieldLabel>Powtórz hasło</FieldLabel>

  <div className="relative">
    <Input
      type={showConfirmPassword ? "text" : "password"}
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="pr-10"
    />

    <button
      type="button"
      onClick={() =>
        setShowConfirmPassword(!showConfirmPassword)
      }
      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
    >
      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 
                0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 
                1.205.084 1.838 1.236 1.838 1.236 
                1.07 1.835 2.809 1.305 3.495.998 
                .108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 
                1.02.006 2.04.138 3 .405 
                2.28-1.552 3.285-1.23 3.285-1.23 
                .645 1.653.24 2.873.12 3.176 
                .765.84 1.23 1.91 1.23 3.22 
                0 4.61-2.805 5.625-5.475 5.92 
                .42.36.81 1.096.81 2.22 
                0 1.606-.015 2.896-.015 3.286 
                0 .315.21.69.825.57 
                C20.565 22.092 24 17.592 24 12.297 
                c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Sign up with Github
          </Button>
          <Button
  variant="outline"
  type="button"
  onClick={handleGoogleLogin}
>
  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M21.35 11.1H12v2.8h5.35c-.23 1.3-1.4 3.8-5.35 3.8
      -3.22 0-5.85-2.66-5.85-5.94s2.63-5.94 5.85-5.94
      c1.83 0 3.05.78 3.75 1.45l2.55-2.48
      C16.95 3.3 14.7 2.3 12 2.3
      6.9 2.3 2.8 6.5 2.8 11.76
      s4.1 9.46 9.2 9.46
      c5.3 0 8.8-3.7 8.8-8.9
      0-.6-.05-1.05-.15-1.22z"
    />
  </svg>
  Kontynuuj z Google
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