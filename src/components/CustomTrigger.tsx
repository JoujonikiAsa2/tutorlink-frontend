"use client"
import { useSidebar } from "@/components/ui/sidebar"
import { MenuIcon} from "lucide-react"
import { Button } from "./ui/button"

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar()

  return <Button variant="ghost" className="m-2"  onClick={toggleSidebar}><MenuIcon/></Button>
}
