import {useEffect} from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Items/SectionHeading";
import CertificationSection from "../components/Sections/Certifications";

function Certifications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="Certifications" />
        <CertificationSection />
      </section>
      <section className="shadow-blue white-bg padding">
        <SectionHeading title="Certifications" />
      </section>
    </Layout>
  );
}

export default Certifications;

