import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    location,
    description,
    jobType,
    company,
    category,
    requirements,
    salaryRange,
  } = job;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="flex gap-10 items-center justify-center">
          <figure>
            <img src={company_logo} className="w-16" alt="Shoes" />
          </figure>
          <div>
            <h3>{company}</h3>
            <p className="flex gap-1 items-center">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            Salary : {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </p>
          <p>{description}</p>

          <div className="card-actions ">
            {requirements?.map((skill, index) => (
              <div key={index} className="badge badge-outline bg-red-100">
                {skill}
              </div>
            ))}
          </div>
          <div className="card-actions justify-end">
            <Link to={`/jobs/${_id}`} className="btn btn-primary">Show Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
