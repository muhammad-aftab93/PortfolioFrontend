import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from 'react';
import { PersonalDetailsEndpoint } from '../../constants/endpoints';

function About() {

  const [aboutData, setAboutData] = useState({
    cvpath: 'media/empty.pdf',
    image: 'images/about.png',
    name: '',
    location: '',
    phoneNumber: '',
    email: '',
    personalStatement: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(PersonalDetailsEndpoint)
    .then((response) => { return response.json(); })
    .then(result => {
      setAboutData({
        cvpath: 'media/empty.pdf',
        image: result.picture,
        name: result.firstName + ' ' + result.middleName,
        location: result.location,
        phoneNumber: result.phoneNumber,
        email: result.email,
        personalStatement: result.personalStatement,
      });
    })
    .catch(error => alert(error.message));
  }, []);

  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.personalStatement}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Phone Number: <span className="text-dark">{aboutData.phoneNumber}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
