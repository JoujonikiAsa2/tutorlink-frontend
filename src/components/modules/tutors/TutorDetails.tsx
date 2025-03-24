"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import defaultProfile from "@/assets/photo/default-profile.png";
import { Button } from "@/components/ui/button";
import { useGetTutorDetailsQuery } from "@/redux/features/tutor/tutorApi";

const TutorDetails = ({ tutorId }: { tutorId: string }) => {
  const { data: tutorInfo, isLoading } = useGetTutorDetailsQuery(tutorId);
  const tutor = tutorInfo?.data;
  console.log(tutor);
  return (
    <div className=" py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="w-full h-screen flex justify-center items-center ">
            <div className="relative h-10 w-10 mb-6">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur px-6 py-8 sm:p-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-primary mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={
                      tutor?.profileImage !== undefined
                        ? (tutor?.profileImage as string)
                        : defaultProfile
                    }
                    alt={tutor?.name}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl font-bold text-white">
                    {tutor?.name}
                  </h1>
                  <div className="flex items-center justify-center md:justify-start mt-2">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white ml-1">
                        {tutor?.rating?.ratingValue}
                      </span>
                    </div>
                    <span className="text-white mx-3">|</span>
                    <span className="text-white font-semibold">
                      ${tutor?.hourlyRate}/hr
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-auto">
                  <Button className="">Book Session</Button>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-10">
              {/* Left Column - About */}
              <div className="lg:col-span-2">
                <section className="mb-10">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    About Me
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {tutor?.bio}
                  </p>
                </section>
              </div>

              {/* Right Column - Booking Info */}
              <div>
                <section className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Subjects
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {tutor?.subjects?.map((subject: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorDetails;
