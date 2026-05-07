"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useSidebar } from "@/components/ui/sidebar"

import { Settings, BookOpenIcon, LayoutDashboard } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { usePathname } from "next/navigation"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// 🔥 MENU
const data = {
  navMain: [
    {
      title: "Egzamin",
      icon: <BookOpenIcon />,
      items: [
        {
          title: "INF 03",
          items: [
            { title: "HTML", url: "/dashboard/inf03/html" },
            { title: "CSS", url: "/dashboard/inf03/css" },
            { title: "JavaScript", url: "/dashboard/inf03/js" },
            { title: "PHP", url: "/dashboard/inf03/php" },
            { title: "SQL", url: "/dashboard/inf03/sql" },
          ],
        },
        {
          title: "INF 04",
          items: [
            { title: "React", url: "#" },
            { title: "Node.js", url: "#" },
            { title: "C++", url: "#" },
            { title: "WPF", url: "#" },
            { title: "Python", url: "#" },
            { title: "Java", url: "#" },
          ],
        },
      ],
    },
  ],
}


export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user: any }) {
  const pathname = usePathname()
const { isMobile, setOpenMobile } = useSidebar()
  return (
    <Sidebar collapsible="icon" 
    className="bg-transparent"
    {...props} >

      {/* 🔥 LOGO */}
<SidebarHeader>
  <div
    className="
      flex items-center
      mt-2 mb-5 h-16

      px-2

      group-data-[collapsible=icon]:justify-center
    "
  >

    {/* NORMAL LOGO */}
    <Image
      src="/logo.png"
      alt="logo"
      width={90}
      height={40}
      priority
      className="
        block
        group-data-[collapsible=icon]:hidden
      "
    />

    {/* ICON LOGO */}
  <Image
  src="/logo2.png"
  alt="icon"
  width={52}
  height={52}
  priority
  className="
    hidden

    min-w-[35px]
    min-h-[35px]

    group-data-[collapsible=icon]:block
  "
/>

  </div>
</SidebarHeader>

      {/* 🔥 MENU */}
<SidebarContent>

  {/* DASHBOARD */}
  <div className="px-2 py-1">

    <Link
      href="/dashboard"
      onClick={() => {
        if (isMobile) {
          setOpenMobile(false)
        }
      }}
    >

      <button
        className={`
          flex w-full items-center gap-3

          rounded-xl

          px-10 py-2

          transition-all

          group-data-[collapsible=icon]:justify-center
          group-data-[collapsible=icon]:px-2

          ${
            pathname === "/dashboard"
              ? "bg-muted font-medium"
              : "hover:bg-muted"
          }
        `}
      >

        <LayoutDashboard className="h-4 w-4 shrink-0" />

        <span
          className="
            truncate

            group-data-[collapsible=icon]:hidden
          "
        >
          Dashboard
        </span>

      </button>

    </Link>

  </div>

  {/* SETTINGS */}
  <div className="px-2 py-1">

    <Link
      href="/dashboard/settings"
      onClick={() => {
        if (isMobile) {
          setOpenMobile(false)
        }
      }}
    >

      <button
        className={`
          flex w-full items-center gap-3

          rounded-xl

          px-10 py-2

          transition-all

          group-data-[collapsible=icon]:justify-center
          group-data-[collapsible=icon]:px-2

          ${
            pathname === "/dashboard/settings"
              ? "bg-muted font-medium"
              : "hover:bg-muted"
          }
        `}
      >

        <Settings className="h-4 w-4 shrink-0" />

        <span
          className="
            truncate

            group-data-[collapsible=icon]:hidden
          "
        >
          Ustawienia
        </span>

      </button>

    </Link>

  </div>

  <NavMain items={data.navMain} />

</SidebarContent>

      {/* USER */}
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}