import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/tutors";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-0 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-primary">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Meet the People Behind TutorLink
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our diverse team of education enthusiasts and technology experts
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden p-0 bg-secondary/20">
                <div className="w-full h-40 relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
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

export default OurTeam;
