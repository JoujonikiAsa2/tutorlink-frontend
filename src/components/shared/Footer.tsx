import Link from "next/link"
import Image from "next/image"
import logo from '@/assets/photo/logo.png'
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur px-4 md:px-0">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
          <Image src ={logo} alt="logo" width={40} height={40}/>
            <span className="text-2xl font-bold text-secondary"><span className="text-primary">Tutor</span>Link</span>
          </Link>
            <p className="text-sm text-muted-foreground">
              Connecting students with qualified tutors for a better learning experience.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FaFacebookF className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <TiSocialTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <IoLogoInstagram  className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tutors" className="text-muted-foreground hover:text-primary">
                  Find a Tutor
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">For Tutors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-primary">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link href="/tutor-faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TutorLink. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/terms" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer