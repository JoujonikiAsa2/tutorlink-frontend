/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Search, Filter } from "lucide-react";
import { TTutor } from "@/types/tutor";
import TutorCard from "./TutorCard";
import { useState } from "react";
import { useGetAllTutorsQuery } from "@/redux/features/tutor/tutorApi";
import { useGetAllSubjectsQuery } from "@/redux/features/subjects/subjectsApi";
import { useRouter } from "next/navigation";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { TiStarOutline } from "react-icons/ti";
import { TSubject } from "@/types/subject";
const AllTutors = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [params, setParams] = useState<Record<string, unknown>[]>([
    { name: "searchTerm", value: "" },
  ]);
  // const [filters, setFilters] = useState<{ name: string; value: any }[]>([]);

  const { data: tutors, isLoading, isError } = useGetAllTutorsQuery(params);
  const { data: subjects } = useGetAllSubjectsQuery(undefined);
  const applySearch = () => {
    setParams(
      params.map((p) =>
        p.name === "searchTerm" ? { ...p, value: searchTerm } : p
      )
    );
  };

  const handleOnChange = async (e: any) => {
    const sort = {
      name: "sort",
      value: e.target.value,
    };
    setParams(() => [{ name: "searchTerm", value: "" }, sort]);
  };
  const handleChange = (e: any) => {
    console.log("i am here");
    const { name, value } = e.target;
    setParams((item) => [...item, { name: name, value: value }]);
  };

  console.log(isError);
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
                    setParams([{}]);
                  }}
                >
                  Clear all
                </Button>
              </div>
              {/* subject filtering */}
              <form className="flex flex-col gap-2 rounded-lg p-4 mt-10 lg:mt-0 lg:bg-primary/5">
                <div>
                  <h1 className="mb-2 text-base text-primary font-semibold">
                    Hourly Rate
                  </h1>
                  <div className="w-full flex gap-2">
                    <input
                      type="number"
                      name="minHourlyRate"
                      onChange={handleChange}
                      placeholder="Min Hourly Rate"
                      className="w-1/2 p-2 border rounded-md"
                    />
                    <input
                      type="number"
                      name="maxHourlyRate"
                      onChange={handleChange}
                      placeholder="Max Hourly Rate"
                      className="w-1/2 p-2 border rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="mb-2 text-base text-primary font-semibold">
                    Subjects
                  </h1>
                  <select
                    name="subject"
                    className="w-full p-2 border rounded-md"
                    onChange={handleChange}
                  >
                    <option value="">Select subjects</option>
                    {subjects?.data?.map((subject: TSubject) => (
                      <option key={subject.name} value={subject.name}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <h1 className="mb-2 text-base text-primary font-semibold">
                    Rating
                  </h1>
                  <div className="flex gap-2 items-center">
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={4.5}
                        onChange={handleChange}
                        className="border rounded-md "
                      />{" "}
                      &nbsp;
                      <div className="flex">
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <RiStarHalfFill color="orange" />
                      </div>{" "}
                    </label>
                    <p className="text-sm text-muted-foreground">(4.5 & up)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={4}
                        onChange={handleChange}
                        className="border rounded-md "
                      />{" "}
                      &nbsp;
                      <div className="flex">
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <TiStarOutline color="orange" />
                      </div>{" "}
                    </label>
                    <p className="text-sm text-muted-foreground">(4 & up)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={3.5}
                        onChange={handleChange}
                        className="border rounded-md "
                      />{" "}
                      &nbsp;
                      <div className="flex">
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <RiStarHalfFill color="orange" />
                        <TiStarOutline color="orange" />
                      </div>{" "}
                    </label>
                    <p className="text-sm text-muted-foreground">(3.5 & up)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={3}
                        onChange={handleChange}
                        className="border rounded-md "
                      />{" "}
                      &nbsp;
                      <div className="flex">
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <RiStarFill color="orange" />
                        <TiStarOutline color="orange" />
                        <TiStarOutline color="orange" />
                      </div>{" "}
                    </label>
                    <p className="text-sm text-muted-foreground">(3 & up)</p>
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="mb-2 text-base text-primary font-semibold">
                    Availability
                  </h1>
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="availability"
                      value="available"
                      onChange={handleChange}
                      className="border rounded-md "
                    />{" "}
                    &nbsp; Available
                  </label>
                </div>
                <div className="w-full">
                  <h1 className="mb-2 text-base text-primary font-semibold">
                    Prefered Location
                  </h1>
                  <input
                    type="text"
                    name="preferedLocation"
                    onChange={handleChange}
                    placeholder="Prefered Location"
                    className="w-full border rounded-md p-2"
                  />
                </div>
              </form>
            </div>

            {/* Tutors Grid */}
            <div className="sm:col-span-2 md:col-span-3 space-y-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {(tutors?.data ?? []).length} tutors found
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-2 text-xs"
                    onClick={() => {
                      router.push(`/tutors`);
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
                        <form className="flex flex-col gap-2 rounded-lg p-4 mt-10 lg:mt-0 lg:bg-primary/5">
                          <div>
                            <h1 className="mb-2 text-base text-primary font-semibold">
                              Hourly Rate
                            </h1>
                            <div className="w-full flex gap-2">
                              <input
                                type="number"
                                name="minHourlyRate"
                                onChange={handleChange}
                                placeholder="Min Hourly Rate"
                                className="w-1/2 p-2 border rounded-md"
                              />
                              <input
                                type="number"
                                name="maxHourlyRate"
                                onChange={handleChange}
                                placeholder="Max Hourly Rate"
                                className="w-1/2 p-2 border rounded-md"
                              />
                            </div>
                          </div>
                          <div>
                            <h1 className="mb-2 text-base text-primary font-semibold">
                              Subjects
                            </h1>
                            <select
                              name="subject"
                              className="w-full p-2 border rounded-md"
                              onChange={handleChange}
                            >
                              <option value="">Select subjects</option>
                              {subjects?.data?.map((subject: TSubject) => (
                                <option key={subject.name} value={subject.name}>
                                  {subject.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="w-full">
                            <h1 className="mb-2 text-base text-primary font-semibold">
                              Rating
                            </h1>
                            <div className="flex gap-2 items-center">
                              <label className="flex gap-2 items-center">
                                <input
                                  type="radio"
                                  name="rating"
                                  value={4.5}
                                  onChange={handleChange}
                                  className="border rounded-md "
                                />{" "}
                                &nbsp;
                                <div className="flex">
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <RiStarHalfFill color="orange" />
                                </div>{" "}
                              </label>
                              <p className="text-sm text-muted-foreground">
                                (4.5 & up)
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <label className="flex gap-2 items-center">
                                <input
                                  type="radio"
                                  name="rating"
                                  value={4}
                                  onChange={handleChange}
                                  className="border rounded-md "
                                />{" "}
                                &nbsp;
                                <div className="flex">
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <TiStarOutline color="orange" />
                                </div>{" "}
                              </label>
                              <p className="text-sm text-muted-foreground">
                                (4 & up)
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <label className="flex gap-2 items-center">
                                <input
                                  type="radio"
                                  name="rating"
                                  value={3.5}
                                  onChange={handleChange}
                                  className="border rounded-md "
                                />{" "}
                                &nbsp;
                                <div className="flex">
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <RiStarHalfFill color="orange" />
                                  <TiStarOutline color="orange" />
                                </div>{" "}
                              </label>
                              <p className="text-sm text-muted-foreground">
                                (3.5 & up)
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <label className="flex gap-2 items-center">
                                <input
                                  type="radio"
                                  name="rating"
                                  value={3}
                                  onChange={handleChange}
                                  className="border rounded-md "
                                />{" "}
                                &nbsp;
                                <div className="flex">
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <RiStarFill color="orange" />
                                  <TiStarOutline color="orange" />
                                  <TiStarOutline color="orange" />
                                </div>{" "}
                              </label>
                              <p className="text-sm text-muted-foreground">
                                (3 & up)
                              </p>
                            </div>
                          </div>
                          <div className="w-full">
                            <h1 className="mb-2 text-base text-primary font-semibold">
                              Availability
                            </h1>
                            <label className="flex gap-2 items-center">
                              <input
                                type="radio"
                                name="availability"
                                value="available"
                                onChange={handleChange}
                                className="border rounded-md "
                              />{" "}
                              &nbsp; Available
                            </label>
                          </div>
                          <div className="w-full">
                            <h1 className="mb-2 text-base text-primary font-semibold">
                              Prefered Location
                            </h1>
                            <input
                              type="text"
                              name="preferedLocation"
                              onChange={handleChange}
                              placeholder="Prefered Location"
                              className="w-full border rounded-md p-2"
                            />
                          </div>
                        </form>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <select
                    onChange={handleOnChange}
                    className="border rounded-sm p-1"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="-rating">Rating (High to low)</option>
                    <option value="hourlyRate">
                      Hourly Rate (Low to High)
                    </option>
                    <option value="-hourlyRate">
                      Hourly Rate (High to Low)
                    </option>
                    <option value="-createdAt">Newest Profiles</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 min-h-[500px]">
                {isLoading ? (
                  <div className="col-span-full flex justify-center items-center ">
                    <div className="relative h-10 w-10 mb-6">
                      <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-200 rounded-full"></div>
                      <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full animate-spin"></div>
                    </div>
                  </div>
                ) : isError === false ? (
                  tutors?.data?.map((tutor: TTutor) => (
                    <TutorCard key={tutor?._id} tutor={tutor} />
                  ))
                ) : (
                  <div className="col-span-full flex justify-center items-center ">
                    <h2>No filtered data available</h2>
                  </div>
                )}
              </div>

              {(tutors?.data ?? []).length > 0 && (
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
