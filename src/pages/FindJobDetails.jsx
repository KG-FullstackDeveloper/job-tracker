import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function FindJobDetails() {

  const { state } = useLocation();

  const job = state?.job;

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="dashboard">
          <h2>Job not found.</h2>

          <Link to="/find-jobs">
            Back
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details-card">

        <div className="company-avatar">
          {job.company_name.charAt(0)}
        </div>

        <h1>{job.title}</h1>

        <h3>{job.company_name}</h3>

        <div className="job-badges">

          <span className="badge blue">
            {job.category}
          </span>

          <span className="badge green">
            {job.candidate_required_location}
          </span>

        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: job.description,
          }}
        />

        <div className="details-buttons">

          <Link to="/find-jobs">
            <button>
              ← Back
            </button>
          </Link>

          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
          >
            <button className="edit-btn">
              🚀 Apply Now
            </button>
          </a>

        </div>

      </div>

    </>
  );
}

export default FindJobDetails;