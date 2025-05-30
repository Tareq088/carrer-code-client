import React, { use } from "react";
import JobCard from "../../Shared/JobCard";
import { div } from "motion/react-client";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  // console.log(jobs)
  return (
    <div>
        <h2 className="text-4xl text-center my-10">Hot jobs of the Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
