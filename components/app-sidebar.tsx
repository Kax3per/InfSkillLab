"use client"

import * as React from "react"
import Image from "next/image"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { BookOpenIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// 🔥 TWOJE MENU
const data = {
  navMain: [
    {
      title: "Egzamin",
      icon: <BookOpenIcon/>,
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
  <div className="flex items-center justify-center p-2">
    <Image
      src="/images/infskillslab.png"
      alt="logo"
      width={90}
      height={90}
      className="object-contain"
    />
  </div>
</SidebarHeader>

      {/* 🔥 MENU */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* 🔥 USER (email / github) */}
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}