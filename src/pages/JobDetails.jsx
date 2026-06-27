import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function JobDetails() {

  const { id } = useParams();

  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {

    return (
      <>
        <Navbar />

        <div className="dashboard">

          <h1>Job Not Found</h1>

          <Link to="/jobs">
            Back
          </Link>

        </div>
      </>
    );

  }

  return (

    <>

      <Navbar />

      <div className="dashboard">

        <div className="details-card">

          <h1>{job.title}</h1>

          <h3>{job.company}</h3>

          <p>

            <strong>Location:</strong>

            {job.location}

          </p>

          <p>

            <strong>Status:</strong>

            {job.status}

          </p>

          <p>

            <strong>Job Type:</strong>

            {job.type}

          </p>

          <p>

            <strong>Salary:</strong>

            {job.salary}

          </p>

          <p>

            <strong>Applied:</strong>

            {job.appliedDate}

          </p>

          <div className="details-buttons">

            <Link to={`/edit-job/${job.id}`}>

              <button className="edit-btn">

                Edit

              </button>

            </Link>

            <button className="delete-btn"  onClick={() => {

                const confirmDelete = window.confirm(
                "Delete this job?"
            );

if(confirmDelete){

const updatedJobs = jobs.filter(

item => item.id !== Number(id)

);

localStorage.setItem(
"jobs",
JSON.stringify(updatedJobs)
);

window.location.href="/jobs";

}

}}
>

Delete

</button>

          </div>

        </div>

      </div>

    </>

  );

}

export default JobDetails;