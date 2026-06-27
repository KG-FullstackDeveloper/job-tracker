import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

function SavedJobs() {

  const [jobs] = useState(() => {
    return JSON.parse(localStorage.getItem("savedJobs")) || [];
  });

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Saved Jobs ❤️</h1>

        {jobs.length === 0 ? (

          <h2>No Saved Jobs</h2>

        ) : (

          jobs.map((job) => (

            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              status={job.status}
            />

          ))

        )}

      </div>

    </>
  );
}

export default SavedJobs;