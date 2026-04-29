"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { useSidebar } from "@/components/ui/sidebar"
type NavItem = {
  title: string
  url?: string
  icon?: React.ReactNode
  isActive?: boolean
  items?: NavItem[]
}

// 🔥 REKURENCJA
function RenderItem(item: NavItem) {
  const hasChildren = item.items && item.items.length > 0
const { setOpen } = useSidebar()
  if (hasChildren) {
    return (
      <Collapsible key={item.title} className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton   onClick={() => setOpen(true)}>
              {item.icon}
              <span>{item.title}</span>
              <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items!.map((sub) => (
                <RenderItem key={sub.title} {...sub} />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    )
  }

  // 🔹 najniższy poziom (link)
  return (
    <SidebarMenuSubItem key={item.title}>
      <SidebarMenuSubButton asChild>
        <Link href={item.url || "#"}>
          <span>{item.title}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  )
}

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Materiały</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => (
          <RenderItem key={item.title} {...item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}