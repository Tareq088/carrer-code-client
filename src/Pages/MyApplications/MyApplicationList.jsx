import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const MyApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
 
  console.log(applications);
  return (
    <div>
      <h3 className="text-3xl">jobs applied for: {applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  SL No.
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
                {
                    applications.map((application,index) => 
                            <JobApplicationRow 
                            key={application._id}
                            index={index}
                                application={application}></JobApplicationRow>)
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplicationList;
