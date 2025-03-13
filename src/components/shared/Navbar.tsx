"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/photo/logo.png";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { logout } from "@/service/AuthService";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  const { user, setIsLoading } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    { href: "/", label: "Home" },
    { href: "/tutors", label: "Browse Tutors" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/blogs", label: "Blog" },
  ];

  const handleLogout = async() => {
    await logout();
    router.push("/");
    router.refresh();
    setIsLoading(false);
  };
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
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tutors..."
              className="w-[200px] pl-8"
            />
          </div>
          {user?.email ? (
            <Button
              className="hover:bg-red-300 hover:"
              variant="outline"
              onClick={handleLogout}
            >
              <RiLogoutCircleLine />
            </Button>
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
            </nav>
            {user?.email ? (
              <Button
                className="hover:bg-red-300 hover:"
                variant="outline"
                onClick={handleLogout}
              >
                <RiLogoutCircleLine />
              </Button>
            ) : (
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
