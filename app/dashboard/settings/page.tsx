"use client"

import { supabase } from "@/lib/supabase"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
  LogOut,
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

  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [provider, setProvider] = useState<string | null>(null)

  // 🔥 LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  // 🔥 LOAD USER + AVATAR
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

  // 🔥 UPLOAD AVATAR
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

    window.dispatchEvent(new Event("avatar-updated"))
    setTimeout(() => setPreview(null), 1500)
  }

  // 🔥 PASSWORD
  const handleChangePassword = async () => {
    if (password.length < 6) {
      toast.error("Min. 6 znaków")
      return
    }

    if (password !== repeatPassword) {
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

    setPassword("")
    setRepeatPassword("")
  }

  return (
    <div className="w-full max-w-5xl px-12 py-10 ml-6">

      {/* 🔥 HEADER */}
      <div className="flex items-center gap-4 mb-12">
        <Settings className="w-7 h-7" />
        <h1 className="text-4xl font-semibold tracking-tight">
          Ustawienia
        </h1>
      </div>

      <Accordion type="single" collapsible className="space-y-6">

        {/* 🔥 WYGLĄD */}
        <AccordionItem value="appearance" className="border rounded-2xl px-5">
          <AccordionTrigger className="text-lg py-6 flex items-center gap-3">
            <Palette className="w-5 h-5" />
            Wygląd
          </AccordionTrigger>

          <AccordionContent>
            <Card className="border-0 shadow-none">
              <CardContent className="flex justify-between items-center py-6">

                <div>
                  <p className="font-medium">Tryb ciemny</p>
                  <p className="text-sm text-muted-foreground">
                    Zmień wygląd aplikacji
                  </p>
                </div>

                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* 🔥 PROFIL */}
        <AccordionItem value="profile" className="border rounded-2xl px-5">
          <AccordionTrigger className="text-lg py-6 flex items-center gap-3">
            <User className="w-5 h-5" />
            Profil
          </AccordionTrigger>

          <AccordionContent>
            <Card className="border-0 shadow-none">
              <CardContent className="py-6">

                <div className="flex items-center">

                  <div className="flex items-center gap-6">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={preview || avatar || ""} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium">
                        Zdjęcie profilowe
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PNG, JPG max 2MB
                      </p>
                    </div>
                  </div>

                  <div className="ml-auto">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />

                    <Button
                      variant="outline"
                      className="min-w-[150px]"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Wybierz zdjęcie
                    </Button>
                  </div>

                </div>

              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* 🔥 HASŁO */}
        {provider !== "github" && (
          <AccordionItem value="security" className="border rounded-2xl px-5">
            <AccordionTrigger className="text-lg py-6 flex items-center gap-3">
              <Lock className="w-5 h-5" />
              Bezpieczeństwo
            </AccordionTrigger>

            <AccordionContent>
              <Card className="border-0 shadow-none">
                <CardContent className="py-8 space-y-6 max-w-xl">

                  <div className="space-y-2">
                    <Label>Nowe hasło</Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Powtórz hasło</Label>
                    <Input
                      type="password"
                      value={repeatPassword}
                      onChange={(e) =>
                        setRepeatPassword(e.target.value)
                      }
                    />
                  </div>

                  <Button
                    onClick={handleChangePassword}
                    disabled={loading}
                  >
                    Zmień hasło
                  </Button>

                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        )}

        {/* 🔥 KONTO */}
       <div className="mt-10 border-t pt-6">

  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button
        variant="destructive"
        className="w-full h-12 text-base"
      >
        Wyloguj się
      </Button>
    </AlertDialogTrigger>

    <AlertDialogContent>

      <AlertDialogHeader>
        <AlertDialogTitle>
          Czy na pewno chcesz się wylogować?
        </AlertDialogTitle>

        <AlertDialogDescription>
          Zostaniesz wylogowany z konta i będziesz musiał zalogować się ponownie.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>

        <AlertDialogCancel>
          Anuluj
        </AlertDialogCancel>

        <AlertDialogAction
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600"
        >
          Wyloguj
        </AlertDialogAction>

      </AlertDialogFooter>

    </AlertDialogContent>
  </AlertDialog>

</div>

      </Accordion>
    </div>
  )
}