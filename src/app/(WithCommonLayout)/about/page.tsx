import OurMission from "@/components/modules/about/OurMission";
import OurTeam from "@/components/modules/about/OurTeam";
import OurValues from "@/components/modules/about/OurValues";

const AboutPage = () => {
  return (
    <div>
      {/* banner section*/}
      <section className="w-full py-12 md:py-24 bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur">
        <div className="container px-4 md:px-0 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-primary">
                About TutorLink
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Learn more about our mission and vision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurMission/>
      <OurValues/>
      <OurTeam/>
    </div>
  );
};

export default AboutPage;
