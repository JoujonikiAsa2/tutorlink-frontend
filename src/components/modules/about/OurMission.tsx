import Image from "next/image";
import sideImage from "@/assets/photo/vector-01.jpg";
const OurMission = () => {
  return (
    <div className="h-[700px] flex items-center justify-center">
      <section>
        <div className="container px-4 md:px-0">
          <div className="grid grid-cols-1 gap-8 py-12 md:py-24 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-primary">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Empowering Students Through Personalized Learning
              </h2>
              <p>
                At TutorLink, we believe that every student deserves access to
                quality education and personalized support. Our mission is to
                connect students with qualified tutors who can help them achieve
                their academic goals and develop a love for learning.
              </p>
              <p>
                We&apos;re committed to creating a platform that makes finding
                the right tutor simple, transparent, and effective. By
                leveraging technology, we aim to break down barriers to
                education and create opportunities for both students and
                educators.
              </p>
            </div>
            <div className="flex justify-center justify-end">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src={sideImage}
                  alt="Students learning with a tutor"
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
