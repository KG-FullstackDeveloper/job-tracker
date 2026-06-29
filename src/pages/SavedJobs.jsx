import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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

            <div
              className="job-card"
              key={job.id}
            >

              <div>

                <h2>{job.title}</h2>

                <p>{job.company}</p>

                <span>{job.location}</span>

              </div>

              <div className="job-status">

                <span className="status">

                  {job.status}

                </span>

                <Link
                  to="/find-job-details"
                  state={{ job }}
                >

                  <button>

                    View Details

                  </button>

                </Link>

              </div>

            </div>

          ))

        )}

      </div>

    </>
  );
}

export default SavedJobs;