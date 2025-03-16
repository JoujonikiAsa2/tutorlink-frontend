/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Only this small part is client-side

import { TSubject } from "@/types/subject";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { TiStarOutline } from "react-icons/ti";

const TutorFilter = ({ subjects }: { subjects: TSubject[] }) => {
  const router = useRouter();
  const [filters, setFilters] = useState<Record<string, string>>({
    minHourlyRate: "",
    maxHourlyRate: "",
    preferedLocation: "",
    subject: "",
    rating: "",
    availability: "",
  });

  const handleChange = (e: any) => {
    console.log("i am here")
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  Object.entries(filters).forEach(([key, value]) => {
    if (value === "") {
      delete filters[key];
    }
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(filters);
    router.push(`/tutors?${queryParams}`);
  };

  console.log(filters);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 rounded-lg p-4 mt-10 lg:mt-0 lg:bg-primary/5"
    >
      <div>
        <h1 className="mb-2 text-base text-primary font-semibold">
          Hourly Rate
        </h1>
        <div className="w-full flex gap-2">
          <input
            type="number"
            name="minHourlyRate"
            value={filters.minHourlyRate}
            onChange={handleChange}
            placeholder="Min Hourly Rate"
            className="w-1/2 p-2 border rounded-md"
          />
          <input
            type="number"
            name="maxHourlyRate"
            value={filters.maxHourlyRate}
            onChange={handleChange}
            placeholder="Max Hourly Rate"
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
      </div>
      <div>
        <h1 className="mb-2 text-base text-primary font-semibold">Subjects</h1>
        <select
          name="subject"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
        >
          <option value="">Select subjects</option>
          {subjects.map((subject) => (
            <option key={subject.name} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <h1 className="mb-2 text-base text-primary font-semibold">Rating</h1>
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
          value={filters.preferedLocation}
          onChange={handleChange}
          placeholder="Prefered Location"
          className="w-full border rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="col-span-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Filter
      </button>
    </form>
  );
};

export default TutorFilter;
