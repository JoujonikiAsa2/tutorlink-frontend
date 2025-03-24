/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/photo/logo.png";
import Image from "next/image";
// import { logout } from "@/services/AuthService";
// import { RiLogoutCircleLine } from "react-icons/ri";
// import { toast } from "sonner";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import defaultProfile from "@/assets/photo/default-profile.png";
import {
  logout,
  selectCurrentUser,
  TUser,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { removeCookies } from "@/services/AuthService";
import { useGetUserByEmailQuery } from "@/redux/features/user/userApi";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser) as TUser | null;
  const dispatch = useAppDispatch();
  const { data: userInfo } = useGetUserByEmailQuery(user?.email as string);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    { href: "/", label: "Home" },
    { href: "/tutors", label: "Browse Tutors" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/blogs", label: "Blog" },
  ];

  const handleLogout = async () => {
    dispatch(logout());
    await removeCookies();
    toast.success("Logout Successfully");
    router.push("/");
    router.refresh();
  };

  console.log(userInfo);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur px-4 md:px-0">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="logo" width={30} height={30} />
            <span className="text-xl font-bold text-secondary">
              <span className="text-primary">Tutor</span>Link
            </span>
          </Link>
        </div>

        {/* dekstop navbar design */}
        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
          {user !== null && (
            <Link
              href={`/${user?.role}/dashboard`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === `/${user?.role}/dashboard`
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search tutors..."
              className="w-[200px]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="hover:cursor-pointer absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => router.push(`/tutors?searchTerm=${searchTerm}`)}
            />
          </div>
          {user !== null ? (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarFallback className="AvatarFallback hover:cursor-pointer">
                    {`${user?.name?.split(" ")[0]?.[0]?.toUpperCase() || ""}`}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="mt-4 ">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="relative h-16 w-16 rounded-full border border-primary overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={
                        userInfo?.data?.profileImage !== undefined
                          ? (userInfo?.data?.profileImage as string)
                          : defaultProfile
                      }
                      alt={user?.name as string}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">{user?.name}</h3>
                    <small>({userInfo?.data?.id})</small>
                  </div>
                </div>
                <div onClick={handleLogout} className="py-2 border-t-1 hover:cursor-pointer text-primary hover:text-secondary">My Profile</div>
                <div onClick={handleLogout} className="py-2 border-t-1 hover:cursor-pointer text-primary hover:text-secondary">Setting</div>
                <div onClick={handleLogout} className="py-2 border-t-1 hover:cursor-pointer text-primary hover:text-red-500">Logout</div>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Button variant="outline">
                <Link href="/login">Log in</Link>
              </Button>
              <Button>
                <Link href="/register">Sign up</Link>
              </Button>
            </>
          )}
        </div>

        {/* mobile mode design */}
        <div className="flex lg:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          {user !== null && (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarFallback className="AvatarFallback hover:cursor-pointer">
                    {user?.name?.split(" ")[0].slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="mt-4">
              <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="relative h-16 w-16 rounded-full border border-primary overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={
                        userInfo?.data?.profileImage !== undefined
                          ? (userInfo?.data?.profileImage as string)
                          : defaultProfile
                      }
                      alt={user?.name as string}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">{user?.name}</h3>
                    <small>({userInfo?.data?.id})</small>
                  </div>
                </div>
                <div onClick={handleLogout} className="py-2 border-t-1 hover:cursor-pointer text-primary hover:text-secondary">My Profile</div>
                <div onClick={handleLogout} className="py-2 border-t-1 hover:cursor-pointer text-primary hover:text-secondary">Setting</div>
                <div onClick={handleLogout} className="py-2 border-t-1 hover:cursor-pointer text-primary hover:text-secondary">Logout</div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      {/* mobile menu desing*/}
      {isMenuOpen && (
        <div className="lg:hidden border-t p-4">
          <div className="container py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search tutors..."
                className="w-full pl-8"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              {user?.email && (
                <Link
                  href={`/${user?.role}/dashboard`}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === `/${user?.role}/dashboard`
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
            </nav>
            {!user?.email && (
              <div className="flex flex-col gap-2">
                <Button variant="outline">
                  <Link href="/login">Log in</Link>
                </Button>
                <Button>
                  <Link href="/register">Sign up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
