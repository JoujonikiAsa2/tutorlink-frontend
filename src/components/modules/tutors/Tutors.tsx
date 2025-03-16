/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Search, Filter } from "lucide-react";
import { TTutor } from "@/types/tutor";
import TutorCard from "./TutorCard";
import TutorFilter from "./TutorFilter";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TSubject } from "@/types/subject";

const AllTutors = ({
  tutors,
  subjects,
}: {
  tutors: TTutor[];
  subjects: TSubject[];
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const route = useRouter();
  const searchParams = { searchTerm: searchTerm};
  const query = new URLSearchParams(searchParams);

  const applySearch = () => {
    console.log(query);
    route.push(`/tutors?${query}`);
  };

  const handleOnChange = async(e: any) => {
    const sort = {
      sort: e.target.value as string
    }
    const sortQuery = await new URLSearchParams(sort);
    console.log(e.target.value);
    route.push(`/tutors?${sortQuery}`);
  };
  return (
    <div>
      {/* banner section*/}
      <section className="w-full py-12 md:py-16 bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur">
        <div className="container px-4 md:px-0 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-primary">
                Browse Tutors
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find the perfect tutor to help you achieve your academic goals
              </p>
            </div>
            <div className="w-full max-w-[500px] mx-auto flex gap-2">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search by subject, class, or location"
                  className="w-full pl-8 rounded-r-none border border-primary h-full"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button onClick={applySearch} className="rounded-l-none">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="space-y-6 hidden lg:block">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Filters</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-xs"
                  onClick={() => {
                    new URLSearchParams(searchParams);
                    console.log("clicked");
                    route.push(`/tutors`);
                  }}
                >
                  Clear all
                </Button>
              </div>
              {/* subject filtering */}
              <TutorFilter subjects={subjects} />
            </div>

            {/* Tutors Grid */}
            <div className="sm:col-span-2 md:col-span-3 space-y-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {tutors?.length} tutors found
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-2 text-xs"
                    onClick={() => {
                      console.log("clicked");
                      route.push(`/tutors`);
                    }}
                  >
                    Show All
                  </Button>
                  <div className="block lg:hidden">
                    <Sheet>
                      <SheetTrigger>
                        <Button variant="outline">Filter</Button>
                      </SheetTrigger>
                      <SheetContent side="left">
                        <TutorFilter subjects={subjects} />
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <select onChange={handleOnChange} className="border rounded-sm p-1">
                    <option value="relevance">Relevance</option>
                    <option value="-rating">Rating (High to low)</option>
                    <option value="hourlyRate">Hourly Rate (Low to High)</option>
                    <option value="-hourlyRate">Hourly Rate (High to Low)</option>
                    <option value="-createdAt">Newest Profiles</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 min-h-[500px]">
                {tutors?.length > 0 ? (
                  tutors?.map((tutor: TTutor) => (
                    <TutorCard key={tutor?._id} tutor={tutor} />
                  ))
                ) : (
                  <div className=" col-span-3  w-full h-full flex justify-center items-center">
                    <p className="text-muted-foreground text-center">
                      No tutors found
                    </p>
                  </div>
                )}
              </div>

              {tutors?.length > 0 && (
                <div className="flex justify-center pt-6">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" disabled>
                      <span className="sr-only">Previous page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      <span className="sr-only">Next page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTutors;
