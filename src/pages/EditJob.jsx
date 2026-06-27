import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function EditJob() {

    const navigate = useNavigate();

    const { id } = useParams();

    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    const existingJob = jobs.find(job => job.id === Number(id));

    const [job, setJob] = useState(existingJob);

    function handleChange(e){

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    }

    function handleSubmit(e){

        e.preventDefault();

        const updatedJobs = jobs.map(item =>

            item.id === Number(id)

            ? job

            : item

        );

        localStorage.setItem("jobs", JSON.stringify(updatedJobs));

        alert("Job Updated Successfully!");

        navigate("/jobs");

    }

    return(

<>
<Navbar/>

<div className="dashboard">

<h1>Edit Job</h1>

<form className="job-form" onSubmit={handleSubmit}>

<input
name="title"
value={job.title}
onChange={handleChange}
/>

<input
name="company"
value={job.company}
onChange={handleChange}
/>

<input
name="location"
value={job.location}
onChange={handleChange}
/>

<input
name="salary"
value={job.salary}
onChange={handleChange}
/>

<select
name="status"
value={job.status}
onChange={handleChange}
>

<option>Applied</option>
<option>Interview</option>
<option>Offer</option>
<option>Rejected</option>

</select>

<select
name="type"
value={job.type}
onChange={handleChange}
>

<option>Remote</option>
<option>Hybrid</option>
<option>On-site</option>

</select>

<button>

Save Changes

</button>

</form>

</div>

</>

)

}

export default EditJob;