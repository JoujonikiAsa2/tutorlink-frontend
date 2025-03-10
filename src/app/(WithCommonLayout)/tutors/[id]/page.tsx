/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import { tutors } from "@/lib/tutors";
import Image from "next/image";
import React from "react";

const TutorProfilePage = async ({ params }: any) => {
  const tutor = await params;
  const { id } = tutor;
  const tutorInfo = tutors.filter((tutor) => tutor.id === Number(id))[0];
  console.log(tutorInfo);
  return (
    <div className="py-12 md:py-24">
      <section>
        <div className="container mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="md:col-span-1 max-w-96 flex justify-center lg:justify-end border-primary/10 rounded-xl">
              <Image
                src={tutorInfo?.image}
                width={450}
                height={450}
                alt="Hero"
                className="w-[300px] sm:w-[450px] max-w-full rounded-xl"
              />
            </div>

            {/* Tutors Grid */}
            <div className="md:col-span-3 space-y-6">
              <Card>
                <CardContent>
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold text-secondary">
                      {tutorInfo?.bio?.name}
                    </h3>
                    <p>
                      <span>Email: </span>
                      {tutorInfo?.bio?.email}
                    </p>
                    <p>
                      <span>Phone: </span>
                      {tutorInfo?.bio?.phone}
                    </p>
                    <p>
                      <span>Gender: </span>
                      {tutorInfo?.bio?.gender}
                    </p>
                    <p>
                      <span>Experience: </span>
                      {tutorInfo?.bio?.experience}
                    </p>
                    <p>
                      <span>Language: </span>
                      {tutorInfo?.bio?.languagesSpoken[0]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorProfilePage;
