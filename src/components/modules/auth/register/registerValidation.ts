import { z } from "zod";

const educationSchema = z.object({
  group: z.string().optional(),
  institute: z.string().optional(),
  passingYear: z.string().optional(),
  result: z.string().optional(),
});

const graduationSchema = z.object({
  studyType: z.string().optional(),
  institute: z.string().optional(),
  department: z.string().optional(),
  passingYear: z.string().optional(),
  result: z.string().optional(),
});

export const tutorSchema = z.object({

  name: z.string({ message: "Name is required" }),
  email: z.string({ message: "Invalid email format" }),
  phone: z.string({ message: "Phone number is required" }),
  age: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: "Age must be a positive number" }),
  gender: z.enum(["male", "female", "other"], { message: "Gender required" }),
  
  hourlyRate: z
  .string()
  .transform((val) => Number(val))
  .refine((val) => val > 0, { message: "Hourly Rate must be a positive number" }),
  password: z
    .string({ message: "Password required" })
    .min(6, "Minimum 6 character is required"),
  bio: z.string({ message: "Bio is required" }),
  profileImage: z.string().optional(),
  experience: z.number().min(0).optional(),
  medium: z.string().optional(),
  rating: z
    .object({
      totalStudent: z.number().default(0),
      ratingValue: z.number().default(0),
    })
    .optional(),
  yourLocation: z.string({ message: "Location is required" }),
  secondaryEducation: educationSchema.optional(),
  higherEducation: educationSchema.optional(),
  graduation: graduationSchema.optional(),
  classes: z.array(z.string()).min(1, "At least one class is required"),
  subjects: z.array(z.string()).min(1, "At least one subject is required"),
  preferedLocation: z.string().min(1, "At least one preferred location is required"),
  availability: z.enum(["available", "unavailable"]).default("available"),
});

export const studentSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  profileImage: z.string().optional(),
  age: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: "Age must be a positive number" }),

  gender: z.enum(["male", "female", "other"], { message: "Gender is required" }),

  phone: z.string().min(1, { message: "Phone number is required" }),

  class: z.string().min(1, { message: "Class is required" }),

  yourLocation: z.string().min(1, { message: "Location is required" }),

  subject: z
    .array(z.string())
    .min(1, { message: "At least one subject must be selected" }),

  email: z.string().email({ message: "Invalid email format" }),

  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
