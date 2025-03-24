/* eslint-disable @typescript-eslint/no-explicit-any */
import TutorDetails from "@/components/modules/tutors/TutorDetails";

const TutorProfilePage = async({ params }: any) => {
  const tutorParams = await params;
  const { tutorId } = tutorParams;
  console.log(tutorId);
  return <TutorDetails tutorId={tutorId} />;
};

export default TutorProfilePage;
