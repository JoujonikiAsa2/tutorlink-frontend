import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import defaultProfile from "@/assets/photo/default-profile.png";
import { TTutor } from "@/types/tutor";

const TutorCard = ({ tutor }: { tutor: TTutor }) => {
  return (
    <div
      key={tutor.id}
      className="bg-secondary/20 dark:bg-slate-800 rounded-lg shadow-md overflow-hidden max-h-96"
    >
      <div className="p-6 h-full">
        <div className="flex items-start">
          <div className="relative h-16 w-16 rounded-full border border-primary overflow-hidden mr-4 flex-shrink-0">
            <Image
              src={
                tutor?.profileImage !== undefined
                  ? (tutor?.profileImage as string)
                  : defaultProfile
              }
              alt={tutor.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {tutor.name}
            </h3>
            <div className="flex items-center mt-1">
              <svg
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300 ml-1">
                {tutor?.rating?.ratingValue} (
                {(tutor?.rating?.totalStudent ?? 0) > 0
                  ? tutor?.rating?.totalStudent
                  : 0}
                )
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-4">
                BDT {(tutor?.hourlyRate ?? 0) > 0 ? tutor.hourlyRate : 0}/hr
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 h-[55%]">
          <div className="flex flex-wrap gap-2 mb-3">
            {tutor?.subjects?.map((subject: string, index: number) => (
              <span
                key={index}
                className=" capitalize inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/30 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
              >
                {subject}
              </span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {tutor?.bio?.slice(0, 300)}....
          </p>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <Link
            href={`/tutors/${tutor.id}`}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm"
          >
            View Profile
          </Link>
          <Button className="btn-primary text-sm py-1.5">Book Session</Button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
