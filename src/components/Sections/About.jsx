import { Link as ScrollLink } from "react-scroll";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchPersonalDetails} from "../../redux/actions/personalDetailsActions";

function About() {
  const dispatch = useDispatch();
  const personalDetails = useSelector((state) => state.personalDetails.data);
  console.log(personalDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchPersonalDetails());

  }, []);

  return (
    <div className="row">
      <div className="col-md-3">
        <img src={personalDetails?.image} alt={personalDetails?.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{personalDetails?.personalStatement}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{personalDetails?.firstName} {personalDetails?.lastName}</span>
            </p>
            <p className="mb-0">
              Phone Number: <span className="text-dark">{personalDetails?.phoneNumber}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{personalDetails?.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{personalDetails?.email}</span>
            </p>
          </div>
        </div>
        <a href={personalDetails?.cvpath} className="btn btn-default mr-3">
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
