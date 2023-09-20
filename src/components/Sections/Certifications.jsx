import React from "react";
import Service from "../Items/Service";
import Certification from "../Items/Certification";

const certificationData = [
    {
        id: 1,
        name: "MCSA",
        content: "Microsoft Certified Solutions Associate"
    },
    {
        id: 2,
        name: "MCSD",
        content: "Microsoft Certified Solutions Developer"
    },
    {
        id: 3,
        name: "AZ-900",
        content: "Microsoft Certified: Azure Fundamentals"
    },
];

function Certifications() {
    return (
        <div className="row -mt-20">
            {certificationData.map((certification) => (
                <div className="col-md-4 col-sm-6 mt-20" key={certification.id}>
                    <Certification certification={certification} />
                </div>
            ))}
        </div>
    );
}

export default Certifications;
