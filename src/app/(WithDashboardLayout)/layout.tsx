import { AppSidebar } from "@/components/app-sidebar";
import { CustomTrigger } from "@/components/CustomTrigger";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <div ><AppSidebar /></div>
        <main className="w-full min-h-screen">
          <div className="bg-secondary/20 w-full">
            <CustomTrigger />
          </div>
          <div className="p-4">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
