import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);
  const handleStatusChange =(e, app_id) =>{
    console.log(e.target.value, app_id);
            // patch kore status ta update korbo
    axios.patch(`http://localhost:5000/applications/${app_id}`,{status: e.target.value})
    .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount){
        Swal.fire("applications updated");
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div>
      <h2 className="text-4xl">
        {applications.length} Application for: {job_id}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                  onChange={(e)=>handleStatusChange(e,application._id)}
                    defaultValue={application.status}
                    className="select select-ghost"
                  >
                    <option disabled={true}>{application.status}</option>
                    <option>Pending</option>
                    <option>interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
