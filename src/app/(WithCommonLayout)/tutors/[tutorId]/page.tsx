/* eslint-disable @typescript-eslint/no-explicit-any */
import TutorDetails from "@/components/modules/tutors/TutorDetails";
import { getTutorById } from "@/services/tutor";

const TutorProfilePage = async ({ params }: any) => {
  const tutorParams = await params;
  const { tutorId } = tutorParams;
  console.log( tutorId);
  const tutorInfo = await getTutorById(tutorId);
  console.log(tutorInfo, tutorId);
  return <TutorDetails tutor={tutorInfo.data} />;
};

export default TutorProfilePage;
