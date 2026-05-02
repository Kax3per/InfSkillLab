"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AppSidebar } from "@/components/app-sidebar"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const checkUser = async () => {
  //     const { data } = await supabase.auth.getSession()
  //     const session = data.session
  //     const user = session?.user

  //     // ❌ brak sesji → login
  //     if (!user) {
  //       router.push("/login")
  //       return
  //     }

  //     // ❌ brak potwierdzenia → verify
  //     if (!user.email_confirmed_at) {
  //       router.push("/verify-email")
  //       return
  //     }

  //     // ✅ OK
  //     setUserData({
  //       email: user.email,
  //       name:
  //         user.user_metadata?.full_name ||
  //         user.user_metadata?.name ||
  //         user.email,
  //       avatar:
  //         user.user_metadata?.avatar_url ||
  //         "/avatars/default.png",
  //     })

  //     setLoading(false)
  //   }

  //   checkUser()
  // }, [router])

//   useEffect(() => {
//   let mounted = true

//   const init = async () => {
//     const { data } = await supabase.auth.getSession()
//     const user = data.session?.user

//     if (user && mounted) {
//       handleUser(user)
//     }
//   }

//   const handleUser = (user: any) => {
// if (!user) {
//   // ⏳ daj czas Supabase ustawić sesję po OAuth
//   setTimeout(async () => {
//     const { data } = await supabase.auth.getSession()
//     const retryUser = data.session?.user

//     if (!retryUser) {
//       router.push("/login")
//     } else {
//       handleUser(retryUser)
//     }
//   }, 500)

//   return
// }

//     if (!user.email_confirmed_at) {
//       router.push("/verify-email")
//       return
//     }

//     setUserData({
//       email: user.email,
//       name:
//         user.user_metadata?.full_name ||
//         user.user_metadata?.name ||
//         user.email,
//       avatar:
//         user.user_metadata?.avatar_url ||
//         "/avatars/default.png",
//     })

//     setLoading(false)
//   }

//   init()

//   const {
//     data: { subscription },
//   } = supabase.auth.onAuthStateChange((event, session) => {
//     if (event === "SIGNED_IN" && session?.user) {
//       handleUser(session.user)
//     }
//   })

//   return () => {
//     mounted = false
//     subscription.unsubscribe()
//   }
// }, [router])

useEffect(() => {
  let mounted = true

  const bootstrap = async () => {
    // 🔥 1. obsłuż OAuth z URL
    const url = new URL(window.location.href)

    // przypadek PKCE (code w query)
    const code = url.searchParams.get("code")

    if (code) {
      await supabase.auth.exchangeCodeForSession(code)
      // wyczyść URL (żeby nie powtarzać)
      window.history.replaceState({}, document.title, "/dashboard")
    }

    // przypadek implicit (tokeny w hash)
    const hash = window.location.hash
    if (hash && hash.includes("access_token")) {
      const params = new URLSearchParams(hash.substring(1))
      const access_token = params.get("access_token")
      const refresh_token = params.get("refresh_token")

      if (access_token && refresh_token) {
        await supabase.auth.setSession({ access_token, refresh_token })
        window.history.replaceState({}, document.title, "/dashboard")
      }
    }

    // 🔥 2. teraz dopiero sprawdź sesję
    const { data } = await supabase.auth.getSession()
    handleUser(data.session?.user)
  }

  const handleUser = (user: any) => {
    if (!user) {
      router.push("/login")
      return
    }

    // przy Google to i tak będzie true, ale zostaw jeśli chcesz
if (!user.email_confirmed_at && user.app_metadata.provider === "email") {
  router.push("/verify-email")
  return
}

    setUserData({
      email: user.email,
      name:
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.email,
      avatar:
        user.user_metadata?.avatar_url ||
        "/avatars/default.png",
    })

    setLoading(false)
  }

  bootstrap()

  // 🔥 3. listener (gdy sesja pojawi się chwilę później)
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session?.user) {
      handleUser(session.user)
    }
  })

  return () => {
    mounted = false
    subscription.unsubscribe()
  }
}, [router])

  if (loading || !userData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-muted-foreground">Ładowanie...</p>
      </div>
    )
  }

  const segments = pathname.split("/").filter(Boolean)

  return (
    <SidebarProvider>
      <AppSidebar user={userData} />

      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger />

          <Breadcrumb>
            <BreadcrumbList>
              {segments
                .filter((seg) => seg !== "inf03" && seg !== "inf04")
                .map((segment, index, arr) => {
                const href =
                "/" +
                segments.slice(0, index + 1).join("/")

                  const labels: Record<string, string> = {
                    dashboard: "Dashboard",
                    settings: "Ustawienia",
                    html: "HTML",
                    css: "CSS",
                    js: "JavaScript",
                    php: "PHP",
                    sql: "SQL",
                  }

                  const label =
                    labels[segment] ||
                    (Number(segment)
                      ? `Lekcja ${segment}`
                      : segment)

                  return (
                    <div key={index} className="flex items-center gap-2">
                      {index !== 0 && <BreadcrumbSeparator />}

                      <BreadcrumbItem>
                        {index === arr.length - 1 ? (
                          <BreadcrumbPage className="font-semibold">
                            {label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link href={href}>{label}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </div>
                  )
                })}
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}