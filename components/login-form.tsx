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
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      toast.info("Podaj email", {position:"top-center"})
      return
    }

    if (!password.trim()) {
      toast.info("Podaj hasło", {position:"top-center"})
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      toast.error("Nieprawidłowe dane logowania", {position:"top-center"})
      setLoading(false)
      return
    }

    toast.success("Zalogowano!" , {position: "top-center"})
    router.push("/dashboard")
  }

  const handleGithubLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })

  if (error) {
    toast.error("Błąd logowania GitHub")
  }
}

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Zaloguj się na konto</h1>
        </div>

        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="janusz@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Hasło</FieldLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Field>

        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? "Logowanie..." : "Zaloguj się"}
          </Button>
        </Field>

        <FieldSeparator>Zaloguj się za pomocą</FieldSeparator>

        <Field>
          <Button variant="outline" type="button" onClick={handleGithubLogin}>
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
            Sign up with GitHub
          </Button>

          <FieldDescription className="px-6 text-center">
            Nie masz konta?{" "}
            <a href="/signup" className="underline underline-offset-4">
              Zarejestruj się
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}