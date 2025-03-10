import { Card, CardContent } from "@/components/ui/card";
import { ourValues } from "@/lib/tutors";

const OurValues = () => {
  return (
    <div className="py-12 md:py-24 bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur">
      <section>
        <div className="container px-4 md:px-0 mx-auto ">
          <div className="flex flex-col items-center justify-center">
            <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-primary">
              Our Values
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight pt-6">
              What We Stand For
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our core values guide everything we do at TutorLink
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-12">
              {ourValues.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurValues;
