import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import student1 from "@/assets/photo/girl-01.jpg";

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur">
      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Students Say
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Read testimonials from students who have achieved their academic
                goals with TutorLink
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="italic">
                      &ldquo;TutorLink helped me find the perfect math tutor. My
                      grades improved significantly after just a few sessions!&quot;
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full overflow-hidden h-10 w-10">
                        <Image
                          src={student1}
                          alt="Student"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Rita Khan</p>
                        <p className="text-xs text-muted-foreground">
                          High School Student
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
