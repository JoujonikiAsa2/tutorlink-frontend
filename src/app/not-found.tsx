import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 bg-background">
      <div className="flex flex-col max-w-3xl w-full text-center space-y-8">
      
        <h1 className="text-9xl font-bold text-primary animate-pulse">404</h1>
        
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved,
            deleted, or maybe never existed in the first place.
          </p>
        </div>
        
        <div className="relative h-64 w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-secondary/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/40"></div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild variant="outline" className="gap-2 w-full sm:w-auto">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go to Home
            </Link>
          </Button>
          <Button asChild className="gap-2 w-full sm:w-auto">
            <Link href="javascript:history.back()">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 