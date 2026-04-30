"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Settings, BookOpenIcon } from "lucide-react"

import { NavMain } from "@/components/nav-main"
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
  return (
    <Sidebar collapsible="icon" {...props}>

      {/* 🔥 LOGO */}
      <SidebarHeader>
        <div className="flex items-center h-16">

          <Image
            src="/images/logoBlack.png"
            alt="logo"
            width={140}
            height={40}
            className="dark:hidden"
            priority
          />

          <Image
            src="/images/logoWhite.png"
            alt="logo"
            width={140}
            height={40}
            className="hidden dark:block"
            priority
          />

        </div>
      </SidebarHeader>

      {/* 🔥 MENU */}
      <SidebarContent>

        {/* SETTINGS BUTTON */}
        <div className="px-2 py-2">
          <Link href="/dashboard/settings">
            <button
              className="
                w-full flex items-center gap-2 px-3 py-2
                rounded-xl hover:bg-muted transition
              "
            >
              <Settings className="w-4 h-4" />
              <span>Ustawienia</span>
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