import React from "react";

function Certification({ certification: { name, content, icon } }) {
    return (
        <div className="service-item text-center">
            <h4 className="my-3">{name}</h4>
            <p className="mb-0">{content}</p>
        </div>
    );
}

export default Certification;
