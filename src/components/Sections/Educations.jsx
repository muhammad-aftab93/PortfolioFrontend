import React from "react";
import Education from "../Items/Education";

const educationData = [
  {
    id: 1,
    year: "2019 - Present",
    degree: "Academic Degree",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  },
  {
    id: 2,
    year: "2018 - 2015",
    degree: "Bachelor’s Degree",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  },
  {
    id: 3,
    year: "2015 - 2012",
    degree: "Honours Degree",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {educationData.map((experience) => (
        <Education experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
