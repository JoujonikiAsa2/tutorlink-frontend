import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Shield, Clock } from "lucide-react"

const Features = () => {
    return (
        <div>
                 {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose TutorLink</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We connect students with qualified tutors for a personalized learning experience
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-8">
            <Card className="bg-secondary/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Verified Profiles</h3>
                <p className="text-muted-foreground">
                  All tutors undergo a thorough verification process to ensure quality and safety
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Expert Tutors</h3>
                <p className="text-muted-foreground">
                  Connect with tutors who are experts in their fields with proven teaching experience
                </p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/20">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Book sessions at times that work for you with our easy-to-use scheduling system
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> 
        </div>
    );
};

export default Features;