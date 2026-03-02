import SubFooter from "./components/sub-footer";
import AboutSection from "./Landing/about";
import LandingPage from "./Landing/landing";
import ProcessSection from "./Landing/process";
import ProjectSection from "./Landing/project";
import ShowcaseSection from "./Landing/showcase";
import TeamSection from "./Landing/team";

export default function Home() {
  return (
    <>
      <div className="">
        <LandingPage />
      </div>

      <div className=" max-w-365 mx-auto">
        <ShowcaseSection />
      </div>

      <div className="">
        <ProjectSection />
      </div>

      <div className="border-b-4 max-w-365 mx-auto">
        <TeamSection />
      </div>

      <div className="border-b-4 max-w-365 mx-auto">
        <ProcessSection />
      </div>

      <div className="border-b-4 max-w-365 mx-auto">
        <AboutSection />
      </div>

      <div className="border-b-4">
        <SubFooter/>
      </div>
    </>
  );
}
