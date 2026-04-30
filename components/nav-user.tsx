"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { ChevronsUpDownIcon, LogOutIcon } from "lucide-react"
import { useEffect, useState } from "react"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  const router = useRouter()

  const [avatar, setAvatar] = useState(user.avatar)

  const loadAvatar = async () => {
    const { data } = await supabase.auth.getUser()
    const u = data.user
    if (!u) return

    const { data: profile } = await supabase
      .from("profiles")
      .select("avatar_url")
      .eq("id", u.id)
      .single()

    if (profile?.avatar_url) {
      setAvatar(profile.avatar_url)
    } else if (u.user_metadata?.avatar_url) {
      setAvatar(u.user_metadata.avatar_url)
    }
  }

  useEffect(() => {
    loadAvatar()

    // 🔥 nasłuchiwanie zmiany avatara
    const handler = () => loadAvatar()

    window.addEventListener("avatar-updated", handler)

    return () => {
      window.removeEventListener("avatar-updated", handler)
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>

          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg">

              {/* 🔥 TU OK */}
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={avatar} alt={user.name} />
                <AvatarFallback>INF</AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {user.email}
                </span>
              </div>

              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
          >

            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-2 py-2">

                {/* 🔥 TU TEŻ POPRAWIONE */}
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={avatar} alt={user.name} />
                  <AvatarFallback>INF</AvatarFallback>
                </Avatar>

                <div className="grid text-sm">
                  <span className="truncate font-medium">
                    {user.email}
                  </span>
                </div>

              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleLogout}>
              <LogOutIcon className="mr-2 h-4 w-4" />
              Wyloguj
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}