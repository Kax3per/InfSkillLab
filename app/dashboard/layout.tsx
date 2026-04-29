"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { usePathname } from "next/navigation"
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
  const [userData, setUserData] = useState<any>(null)
    const pathname = usePathname()

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()

      if (!data.user) {
        router.push("/login")
        return
      }

      const user = data.user

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
    }

    checkUser()
  }, [router])

  if (!userData) return null


const segments = pathname.split("/").filter(Boolean)



const current = segments[segments.length - 1]
  return (
    <SidebarProvider>
      <AppSidebar user={userData} />

      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger />
<Breadcrumb>
  <BreadcrumbList>

    {segments
      .filter((seg) => seg !== "inf03" && seg !== "inf04") // 🔥 wywalamy inf03
      .map((segment, index, arr) => {
        const href = "/" + segments.slice(0, segments.indexOf(segment) + 1).join("/")

        const labels: Record<string, string> = {
          dashboard: "Dashboard",
          html: "HTML",
          css: "CSS",
          js: "JavaScript",
          php: "PHP",
          sql: "SQL",
        }

        const label =
          labels[segment] ||
          (Number(segment) ? `Lekcja ${segment}` : segment)

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
  <Link href={href}>
    {label}
  </Link>
</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        )
      })}

  </BreadcrumbList>
</Breadcrumb>
        </header>

        {/* 🔥 TU ŁADUJĄ SIĘ LEKCJE */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}