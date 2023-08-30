import {useEffect} from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Items/SectionHeading";
import ServicesSection from "../components/Sections/Services";
import PricingTable from "../components/Sections/PricingTable";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="Services" />
        <ServicesSection />
      </section>
      <section className="shadow-blue white-bg padding">
        <SectionHeading title="Pricing table" />
        <PricingTable />
      </section>
    </Layout>
  );
}

export default Services;
