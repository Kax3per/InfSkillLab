"use client"

import { supabase } from "@/lib/supabase"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Settings,
  User,
  Lock,
  Palette,
} from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function SettingsPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const [avatar, setAvatar] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [loading, setLoading] = useState(false)
  const [provider, setProvider] = useState<string | null>(null)

  // LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  // LOAD USER
  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser()
      const user = data.user
      if (!user) return

      setProvider(user.app_metadata?.provider || "email")

      const { data: profile } = await supabase
        .from("profiles")
        .select("avatar_url")
        .eq("id", user.id)
        .single()

      if (profile?.avatar_url) {
        setAvatar(profile.avatar_url)
      } else if (user.user_metadata?.avatar_url) {
        setAvatar(user.user_metadata.avatar_url)
      }
    }

    loadUser()
  }, [])

  // UPLOAD AVATAR
  // UPLOAD AVATAR
const handleFileChange = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0]
  if (!file) return

  const previewUrl = URL.createObjectURL(file)
  setPreview(previewUrl)

  const { data } = await supabase.auth.getUser()
  const user = data.user
  if (!user) return

  const filePath = `${user.id}/${Date.now()}.png`

  const { error } = await supabase.storage
    .from("avatars")
    .upload(filePath, file)

  if (error) {
    toast.error("Błąd uploadu")
    return
  }

  const { data: urlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath)

  const publicUrl = urlData.publicUrl

  await supabase
    .from("profiles")
    .update({ avatar_url: publicUrl })
    .eq("id", user.id)

  setAvatar(publicUrl)

  toast.success("Zdjęcie profilowe zostało zmienione")

  // 🔥 PEŁNY RELOAD
  setTimeout(() => {
    window.location.replace("/dashboard/settings")
  }, 500)
}

  // RESET PASSWORD
  const handleSendReset = async () => {
    const { data } = await supabase.auth.getUser()
    const email = data.user?.email

    if (!email) {
      toast.error("Brak emaila")
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://infskillslab.vercel.app/reset-password",
    })

    setLoading(false)

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success("Sprawdź email, aby zmienić hasło")
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12">

      {/* BACKGROUND GLOW */}
     

      {/* HEADER */}
      <div className="relative mb-10 md:mb-14">

        <div className="flex flex-col sm:flex-row sm:items-center gap-5">

          <div className="
            flex items-center justify-center
            w-16 h-16 rounded-3xl
            bg-gradient-to-br from-blue-500 to-blue-700
            text-white
            shadow-2xl shadow-blue-500/20
            shrink-0
          ">
            <Settings className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ustawienia
            </h1>

            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              Zarządzaj profilem, bezpieczeństwem i wyglądem platformy
            </p>
          </div>

        </div>
      </div>

      {/* ACCORDION */}
    {/* ACCORDION */}
<Accordion
  type="single"
  collapsible
  className="relative space-y-6"
>

  {/* APPEARANCE */}
  <AccordionItem
    value="appearance"
    className="
      group
      overflow-hidden
      rounded-[30px]
      border border-white/10
      bg-gradient-to-br
      from-background/80
      to-background/40
      backdrop-blur-2xl
      shadow-[0_10px_50px_rgba(0,0,0,0.08)]
      transition-all duration-500
      hover:border-blue-500/30
      hover:shadow-blue-500/10
      hover:-translate-y-1
    "
  >

    <AccordionTrigger
      className="
        px-5 md:px-7
        py-5 md:py-6
        hover:no-underline
      "
    >

      <div className="flex items-center gap-5 flex-1">

        <div className="
          relative
          flex items-center justify-center
          w-14 h-14
          rounded-2xl
          bg-gradient-to-br
          from-blue-500
          to-cyan-500
          text-white
          shadow-xl shadow-blue-500/20
        ">
          <Palette className="w-6 h-6" />
        </div>

        <div className="text-left">

          <p className="
            text-lg md:text-xl
            font-semibold
            tracking-tight
          ">
            Wygląd
          </p>

          <p className="
            text-sm text-muted-foreground
            mt-1
          ">
            Motyw i personalizacja interfejsu
          </p>

        </div>

      </div>

    </AccordionTrigger>

    <AccordionContent className="px-5 md:px-7 pb-6">

      <div className="
        rounded-3xl
        border border-white/10
        bg-black/[0.03]
        dark:bg-white/[0.03]
        p-5 md:p-6
      ">

        <div className="
          flex items-center justify-between
          gap-5
        ">

          <div>

            <p className="font-semibold text-base md:text-lg">
              Tryb ciemny
            </p>

            <p className="
              text-sm text-muted-foreground
              mt-1
            ">
              Włącz ciemny motyw aplikacji
            </p>

          </div>

          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) =>
              setTheme(checked ? "dark" : "light")
            }
          />

        </div>

      </div>

    </AccordionContent>
  </AccordionItem>

  {/* PROFILE */}
  <AccordionItem
    value="profile"
    className="
      group
      overflow-hidden
      rounded-[30px]
      border border-white/10
      bg-gradient-to-br
      from-background/80
      to-background/40
      backdrop-blur-2xl
      shadow-[0_10px_50px_rgba(0,0,0,0.08)]
      transition-all duration-500
      hover:border-blue-500/30
      hover:shadow-blue-500/10
      hover:-translate-y-1
    "
  >

    <AccordionTrigger
      className="
        px-5 md:px-7
        py-5 md:py-6
        hover:no-underline
      "
    >

      <div className="flex items-center gap-5 flex-1">

        <div className="
          relative
          flex items-center justify-center
          w-14 h-14
          rounded-2xl
          bg-gradient-to-br
          from-violet-500
          to-indigo-500
          text-white
          shadow-xl shadow-violet-500/20
        ">
          <User className="w-6 h-6" />
        </div>

        <div className="text-left">

          <p className="
            text-lg md:text-xl
            font-semibold
            tracking-tight
          ">
            Profil
          </p>

          <p className="
            text-sm text-muted-foreground
            mt-1
          ">
            Zarządzaj zdjęciem profilowym
          </p>

        </div>

      </div>

    </AccordionTrigger>

    <AccordionContent className="px-5 md:px-7 pb-6">

      <div className="
        rounded-3xl
        border border-white/10
        bg-black/[0.03]
        dark:bg-white/[0.03]
        p-5 md:p-6
      ">

        <div className="
          flex flex-col md:flex-row
          md:items-center
          gap-6
        ">

          <Avatar className="
            w-24 h-24
            border-4 border-background
            shadow-2xl
          ">
            <AvatarImage src={preview || avatar || ""} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="flex-1">

            <p className="
              font-semibold
              text-lg
            ">
              Zdjęcie profilowe
            </p>

            <p className="
              text-sm text-muted-foreground
              mt-1
            ">
              PNG lub JPG • maksymalnie 2MB
            </p>

          </div>

          <div className="w-full md:w-auto">

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            <Button
              variant="outline"
              className="
                w-full md:w-auto
                h-12
                rounded-2xl
                px-6
                border-white/10
                bg-background/50
                hover:bg-blue-500
                hover:text-white
                hover:border-blue-500
                transition-all duration-300
              "
              onClick={() => fileInputRef.current?.click()}
            >
              Wybierz zdjęcie
              
            </Button>

          </div>

        </div>

      </div>

    </AccordionContent>
  </AccordionItem>

  {/* SECURITY */}
  {provider !== "github" && (
    <AccordionItem
      value="security"
      className="
        group
        overflow-hidden
        rounded-[30px]
        border border-white/10
        bg-gradient-to-br
        from-background/80
        to-background/40
        backdrop-blur-2xl
        shadow-[0_10px_50px_rgba(0,0,0,0.08)]
        transition-all duration-500
        hover:border-blue-500/30
        hover:shadow-blue-500/10
        hover:-translate-y-1
      "
    >

      <AccordionTrigger
        className="
          px-5 md:px-7
          py-5 md:py-6
          hover:no-underline
        "
      >

        <div className="flex items-center gap-5 flex-1">

          <div className="
            relative
            flex items-center justify-center
            w-14 h-14
            rounded-2xl
            bg-gradient-to-br
            from-emerald-500
            to-teal-500
            text-white
            shadow-xl shadow-emerald-500/20
          ">
            <Lock className="w-6 h-6" />
          </div>

          <div className="text-left">

            <p className="
              text-lg md:text-xl
              font-semibold
              tracking-tight
            ">
              Bezpieczeństwo
            </p>

            <p className="
              text-sm text-muted-foreground
              mt-1
            ">
              Hasło i sesja logowania
            </p>

          </div>

        </div>

      </AccordionTrigger>

      <AccordionContent className="px-5 md:px-7 pb-6">

        <div className="
          rounded-3xl
          border border-white/10
          bg-black/[0.03]
          dark:bg-white/[0.03]
          p-5 md:p-6
          space-y-5
        ">

          <div>

            <p className="
              font-semibold
              text-base md:text-lg
            ">
              Zmiana hasła
            </p>

            <p className="
              text-sm text-muted-foreground
              mt-1
            ">
              Wyślemy Ci link do resetu hasła
            </p>

          </div>

          <Button
            onClick={handleSendReset}
            disabled={loading}
            className="
              h-12
              rounded-2xl
              px-6
              shadow-lg
            "
          >
            {loading ? "Wysyłanie..." : "Zmień hasło"}
          </Button>

        </div>

        {/* LOGOUT */}
        <div className="mt-8 border-t border-white/10 pt-8">

          <AlertDialog>

            <AlertDialogTrigger asChild>

              <Button
                variant="destructive"
                className="
                  w-full
                  h-12
                  rounded-2xl
                  text-base
                  shadow-2xl shadow-red-500/20
                "
              >
                Wyloguj się
              </Button>

            </AlertDialogTrigger>

            <AlertDialogContent className="rounded-3xl">

              <AlertDialogHeader>

                <AlertDialogTitle>
                  Czy na pewno chcesz się wylogować?
                </AlertDialogTitle>

                <AlertDialogDescription>
                  Zostaniesz wylogowany z konta.
                </AlertDialogDescription>

              </AlertDialogHeader>

              <AlertDialogFooter>

                <AlertDialogCancel className="rounded-xl">
                  Anuluj
                </AlertDialogCancel>

                <AlertDialogAction
                  className="rounded-xl"
                  onClick={handleLogout}
                >
                  Wyloguj
                </AlertDialogAction>

              </AlertDialogFooter>

            </AlertDialogContent>

          </AlertDialog>

        </div>

      </AccordionContent>
    </AccordionItem>
  )}

</Accordion>
    </div>
  )
}