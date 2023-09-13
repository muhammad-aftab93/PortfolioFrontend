import {useEffect} from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Items/SectionHeading";
import Educations from "../components/Sections/Educations";

function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="Education" />
        <Educations />
      </section>
    </Layout>
  );
}

export default Education;
