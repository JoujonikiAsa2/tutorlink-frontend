import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="flex flex-col">
        <Navbar session={session} />
        <main className="flex-1 min-h-screen">{children}</main>
        <Footer />
    </div>
  );
};

export default CommonLayout;
