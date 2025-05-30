import React from "react";
import useAuth from './../../Hooks/useAuth';
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const {user} = useAuth();
  console.log(user)

  const handleAddJob= (e) =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

          //process salary range data
    const {min,max,currency,...newJob} = data;
    newJob.salaryRange = {min, max,currency};
  
            //process requirements
    newJob.job_requirements = newJob.job_requirements.split(",").map(requirement => requirement.trim());
         // process responsibilities
    newJob.job_responsibilities = newJob.job_responsibilities.split(",").map(respon => respon.trim())

     console.log(newJob);
     console.log(Object.keys(newJob).length);
        // newJob object e status name arekta property dhukabo
        newJob.status = "active";
      axios.post("http://localhost:5000/jobs", newJob)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire("Your Job has been saved successfully.")
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  return (
    <div className="max-w-11/12 mx-auto">
      <h2>Add a Job</h2>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>
          <label className="label">Job Title</label>
          <input type="text" name="title" className="input" placeholder="Job Title" />
          <label className="label">Company</label>
          <input type="text" name="company" className="input" placeholder="Company Name" />
          <label className="label">Location</label>
          <input type="text" name="location" className="input" placeholder="job Location" />
          <label className="label">Company Logo</label>
          <input type="text" name="company_logo" className="input" placeholder="Company Logo" />
        </fieldset>
            {/* job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
            <div className="filter">
                <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
                <input className="btn" type="radio" name="jobType" value="On-Site" aria-label="On-Site"/>
                <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote"/>
                <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid"/>
            </div>
        </fieldset>
             {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
                <select defaultValue="Job Category" name="category" className="select">
                    <option disabled={true}>Job Category</option>
                    <option>Engineering</option>
                    <option>Commerce</option>
                    <option>Arts</option>
                </select>
        </fieldset>
             {/* application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application deadline </legend>
            <input type="date" name="application_deadline" className="input" />
        </fieldset>
             {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
            <div className="flex flex-col sm:flex-row">
                <div>
                    <label className="label">Minimum Salary</label>
                    <input type="text" name="min" className="input" placeholder="Minimum Salary" />
                </div>
                <div>
                    <label className="label">Maximum Salary</label>
                    <input type="text" name="max" className="input" placeholder="Maximum Salary" />
                </div>
                <div>  
                    <label className="label">Currency</label>
                    <select defaultValue="Select a currency" name="currency" className="select">
                        <option disabled={true}>Select a currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>EU</option>
                    </select>
                </div>
            </div>
        </fieldset>
             {/* job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea className="textarea" name="job_description" placeholder="Job Description"></textarea>
        </fieldset>
             {/* job Requirement */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea className="textarea" name="job_requirements" placeholder="Job Requirements separate by comma"></textarea>
        </fieldset>
             {/* job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea className="textarea" name="job_responsibilities" placeholder="Job Responsibilities separate by comma"></textarea>
        </fieldset>
             {/* jHr info*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Info.</legend>
          <label className="label">HR_Name</label>
          <input type="text" name="hr_name" className="input" placeholder="HR_Name" />

          <label className="label">HR_email</label>
          <input type="email" name="hr_email" defaultValue={user.email} className="input" placeholder="HR_email" />
        </fieldset>
          <button type="submit" className="btn btn-primary btn-outline">Add Job</button>  
      </form>
    </div>
  );
};


export default AddJob;
