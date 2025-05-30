import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
      const {_id,title,company_logo,location,description,jobType,company,category,requirements,salaryRange} = job;
    console.log(job)
    return (
        <div>
                <img src={company_logo} alt="" />
                <h2>{title}</h2>
               <Link>
                 <p>{description}</p>
               </Link>
                <Link to={`/jobApply/${_id}`}>
                    <button className='btn btn-primary'>Apply Now</button>
                </Link>
        </div>
    );
};

export default JobDetails;