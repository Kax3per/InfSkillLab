"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

import {
  useRouter,
  usePathname,
} from "next/navigation"

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

  const [userData, setUserData] =
    useState<any>(null)

  const [loading, setLoading] =
    useState(true)

  // 🔥 LESSON PAGE DETECTION
  const isLessonPage =
    pathname.includes("/html/") ||
    pathname.includes("/css/") ||
    pathname.includes("/js/") ||
    pathname.includes("/php/") ||
    pathname.includes("/sql/")

  useEffect(() => {
    const bootstrap = async () => {
      try {
        // PKCE
        const url = new URL(
          window.location.href
        )

        const code =
          url.searchParams.get("code")

        if (code) {
          await supabase.auth.exchangeCodeForSession(
            code
          )

          window.history.replaceState(
            {},
            document.title,
            "/dashboard"
          )
        }

        // HASH TOKENS
        const hash =
          window.location.hash

        if (
          hash &&
          hash.includes("access_token")
        ) {
          const params =
            new URLSearchParams(
              hash.substring(1)
            )

          const access_token =
            params.get("access_token")

          const refresh_token =
            params.get("refresh_token")

          if (
            access_token &&
            refresh_token
          ) {
            await supabase.auth.setSession({
              access_token,
              refresh_token,
            })

            window.history.replaceState(
              {},
              document.title,
              "/dashboard"
            )
          }
        }

        // SESSION
        const { data } =
          await supabase.auth.getSession()

        handleUser(data.session?.user)
      } catch (error) {
        console.error(error)
      }
    }

    const handleUser = (user: any) => {
      if (!user) {
        router.push("/login")
        return
      }

      if (
        !user.email_confirmed_at &&
        user.app_metadata.provider ===
          "email"
      ) {
        router.push("/verify-email")
        return
      }

      setUserData({
        email: user.email,

        name:
          user.user_metadata
            ?.full_name ||
          user.user_metadata?.name ||
          user.email,

        avatar:
          user.user_metadata
            ?.avatar_url ||
          "/avatars/default.png",
      })

      setLoading(false)
    }

    bootstrap()

    const {
      data: { subscription },
    } =
      supabase.auth.onAuthStateChange(
        (event, session) => {
          if (
            event === "SIGNED_IN" &&
            session?.user
          ) {
            handleUser(session.user)
          }
        }
      )

    return () => {
      subscription.unsubscribe()
    }
  }, [router])

  if (loading || !userData) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
        <p className="text-muted-foreground">
          Ładowanie...
        </p>
      </div>
    )
  }

  const rawSegments = pathname
    .split("/")
    .filter(Boolean)

  return (
    <div className="relative min-h-screen bg-white dark:bg-black lesson-scroll">

      {/* BACKGROUND */}

      <SidebarProvider>

        <AppSidebar user={userData} />

        <SidebarInset
          className="
            relative
            z-10
            bg-transparent
            flex
            flex-col
            min-h-screen
          "
        >

          {/* HEADER */}
          <header
            className="
              sticky
              top-0
              z-50
              h-16
              shrink-0
              flex
              items-center
              gap-3
              px-4
              border-b
              border-black/10
              dark:border-white/10
              bg-white/70
              dark:bg-black/60
              backdrop-blur-2xl
            "
          >

            <SidebarTrigger />

            <Breadcrumb>

              <BreadcrumbList>

                {rawSegments.map(
                  (segment, index) => {
                    if (
                      segment === "inf03" ||
                      segment === "inf04"
                    ) {
                      return null
                    }

                    const href =
                      "/" +
                      rawSegments
                        .slice(0, index + 1)
                        .join("/")

                    const labels: Record<
                      string,
                      string
                    > = {
                      dashboard:
                        "Dashboard",

                      settings:
                        "Ustawienia",

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

                    const visibleSegments =
                      rawSegments.filter(
                        (seg) =>
                          seg !==
                            "inf03" &&
                          seg !==
                            "inf04"
                      )

                    const visibleIndex =
                      visibleSegments.indexOf(
                        segment
                      )

                    const isLast =
                      visibleIndex ===
                      visibleSegments.length -
                        1

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2"
                      >

                        {visibleIndex !==
                          0 && (
                          <BreadcrumbSeparator />
                        )}

                        <BreadcrumbItem>

                          {isLast ? (
                            <BreadcrumbPage className="font-semibold">
                              {label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild>
                              <Link href={href}>
                                {label}
                              </Link>
                            </BreadcrumbLink>
                          )}

                        </BreadcrumbItem>

                      </div>
                    )
                  }
                )}

              </BreadcrumbList>

            </Breadcrumb>

          </header>

          {/* CONTENT */}
          <main
            className={`
              flex-1
              min-h-0
              p-10
              

              ${
                isLessonPage
                  ? "overflow-hidden"
                  : "overflow-y-auto"
              }
            `}
          >

            <div
              className={`
                ${
                  isLessonPage
                    ? "h-full"
                    : "min-h-full"
                }
              `}
            >
              {children}
            </div>

          </main>

        </SidebarInset>

      </SidebarProvider>

    </div>
  )
}