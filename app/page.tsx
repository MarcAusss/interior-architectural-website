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

      <div className="">
        <ShowcaseSection />
      </div>

      <div className="">
        <ProjectSection />
      </div>

      <div className="">
        <TeamSection />
      </div>

      <div className="">
        <ProcessSection />
      </div>

      <div className="">
        <AboutSection />
      </div>

      <div className="">
        <SubFooter/>
      </div>
    </>
  );
}
