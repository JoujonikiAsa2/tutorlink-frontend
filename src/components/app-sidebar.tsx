"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
  } from "@/components/ui/sidebar"
import { Edit2Icon, Home, Users } from "lucide-react"
import { RiPassPendingFill } from "react-icons/ri"
import { Button } from "./ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { FaBackward } from "react-icons/fa"
import { removeCookies } from "@/services/AuthService"
import { useAppDispatch } from "@/redux/hooks"
import { logout } from "@/redux/features/auth/authSlice"

  const items = [
      {
          title: "Dashboard",
          icon: Home,
          url: "/tutor/dashboard",
      },
      {
          title: "Update Profile",
          icon: Edit2Icon,
          url: "/tutor/update-profile",
      },
      {
          title: "Students",
          icon: Users,
          url: "/tutor/students",
      },
      {
          title: "Requests",
          icon: RiPassPendingFill,
          url: "/tutor/tution-request",
      },
      {
          title: "Home",
          icon: FaBackward,
          url: "/",
      },
  ]


  export function AppSidebar() {
const dispatch = useAppDispatch()
    const router = useRouter()
      
   const handleLogout = async() => {
    await removeCookies();
    dispatch(logout())
    toast.success("Logout Successfully");
    router.push("/");
  };

    return (
      <Sidebar collapsible="icon">
        <SidebarHeader />
        <SidebarContent>
         <SidebarGroup>
          <SidebarGroupContent>
          {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarGroupContent>
         </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="">
          <SidebarMenuItem className="w-full flex justify-end">
            <Button variant="outline" size="sm" onClick={handleLogout}>Logout</Button>
          </SidebarMenuItem>
        </SidebarFooter>
        <SidebarRail/>
      </Sidebar>
    )
  }
  