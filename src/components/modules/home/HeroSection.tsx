import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import girl from "@/assets/photo/svg-01.svg";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]" style={{
        backgroundImage: "url('/bg-01.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      >
      {/* hero section */}
      <section className="w-full h-full min-h-[calc(100vh-4rem)] py-12 md:py-24 lg:py-32 bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur flex items-center">
        <div className="container px-4 md:px-0 mx-auto">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-6">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Find Your Perfect Tutor Today
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Connect with qualified tutors who can help you achieve your
                  academic goals. brPersonalized learning, flexible scheduling,
                  and verified experts.
                </p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Math, Science, English..."
                      className="pl-8 rounded-r-none"
                    />
                  </div>
                  <Button type="submit" className="rounded-l-none">
                    Search
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-white">
                    Math
                  </Badge>
                  <Badge variant="secondary" className="text-white">
                    Science
                  </Badge>
                  <Badge variant="secondary" className="text-white">
                    English
                  </Badge>
                  <Badge variant="secondary" className="text-white">
                    History
                  </Badge>
                  <Badge variant="secondary" className="text-white">
                    Languages
                  </Badge>
                  <Badge variant="secondary" className="text-white">
                    Test Prep
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-fit">
                <Button size="lg" asChild>
                  <Link href="/tutors">Find a Tutor</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">Become a Tutor</Link>
                </Button>
              </div>
            </div>
            <div className="max-w-96 flex justify-center lg:justify-end border-primary/10 rounded-xl">
              <Image
                src={girl}
                width={450}
                height={450}
                alt="Hero"
                className="w-[300px] sm:w-[450px] max-w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
