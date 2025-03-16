import Tutors from "@/components/modules/tutors/Tutors";
import { getAllSubjects } from "@/services/subject";
import { getAllTutors } from "@/services/tutor";

interface TutorPageProps {
  searchParams: Record<string, string | undefined>;
}


const TutorPage = async({ searchParams }: TutorPageProps) => {
  const filters = {
    searchTerm: searchParams.searchTerm || "",
    availability: searchParams.availability || "",
    minHourlyRate: searchParams.minHourlyRate || "",
    maxHourlyRate: searchParams.maxHourlyRate || "",
    preferedLocation: searchParams.preferedLocation || "",
    subject: searchParams.subject || "",
    rating: searchParams.rating || "",
    sort: searchParams.sort || "",
    page: searchParams.page ? Number(searchParams.page) : 1,
    limit: searchParams.limit ? Number(searchParams.limit) : 10,
  };

  const tutors = await getAllTutors(filters);
  const subjects = await getAllSubjects()
  console.log("subjects",subjects)

  return (
    <div>
      <Tutors tutors={tutors?.data} subjects={subjects?.data}/>
    </div>
  );
};

export default TutorPage;