import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id:jobId } = useParams();
  // console.log(id);
  const { user } = useAuth();
  // console.log(user)

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkdin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin,github,resume);
    const applicant = { 
      jobId,
      applicant: user.email,
      linkedin,
      github, resume

    }
            //AXIOS POST     
    axios.post("http://localhost:5000/applicants",applicant)
    .then(res =>{
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire("Application has been submitted");
      }
    })
    .catch(error =>{
      console.log(error)
    })
 
  };
  return (
    <div>
      <h3 className="text-4xl">Apply job For <Link to={`/jobs/:id`}>Details</Link></h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">lINDIN LINK</label>
          <input type="url" name="linkdin"  className="input" placeholder="lINDIN LINK" />

          <label className="label">gitHub LInk</label>
          <input type="url" name="github" className="input" placeholder="gitHub LInk" />

          <label className="Resume LInk">Author</label>
          <input type="url" name="resume" className="input" placeholder="Resume LInk" />
          <input
            type="submit"
            className="input btn cursor-pointer"
            placeholder="Resume LInk"
            value="apply"
          ></input>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
