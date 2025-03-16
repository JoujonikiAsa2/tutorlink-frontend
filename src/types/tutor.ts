export type TTutor = {
  _id: string;
  id: string;
  user: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  bio?: string;
  age: number;
  gender: "male" | "female" | "other";
  profileImage?: string;
  experience?: number;
  medium?: string;
  rating?: {
    totalStudent: number;
    ratingValue: number;
  };
  yourLocation: string;
  secondaryEducation?: {
    group: string;
    institute: string;
    passingYear: string;
    result: string;
  };
  higherEducation?: {
    group: string;
    institute: string;
    passingYear: string;
    result: string;
  };
  graduation?: {
    studyType: string;
    institute: string;
    department: string;
    passingYear: string;
    result: string;
  };
  classes?: string[];
  subjects?: string[];
  availability: "available" | "anavailable";
  preferedLocation?: string[];
  hourlyRate?: number;
  createdAt: Date;
  updatedAt: Date;
};