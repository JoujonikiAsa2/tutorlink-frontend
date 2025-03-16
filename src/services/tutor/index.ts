/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
export const getAllTutors = async (filters: Record<string, any> = {}) => {
  console.log(filters);
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, String(value));
    }
  });

  const queryString = params.toString();
  const url = `${process.env.NEXT_PUBLIC_BASE_API}/tutors${
    queryString ? `?${queryString}` : ""
  }`;

  const result = await fetch(url, {
    cache: "no-store",
  });

  return result.json();
};
export const getTutorById = async (tutorId: string) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutors/${tutorId}`
    );
    return result.json();
  } catch (error) {
    console.log(error);
  }
};
