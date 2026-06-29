import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

function FindJobs() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  function saveJob(job) {

  const saved =
    JSON.parse(localStorage.getItem("savedJobs")) || [];

  const exists = saved.find(
    item => item.id === job.id
  );

  if (exists) {
    alert("Job already saved!");
    return;
  }

  saved.push(job);
  localStorage.setItem(
    "savedJobs",
    JSON.stringify(saved)
  );
  alert("❤️ Job Saved!");
}

  async function searchJobs() {
    if (!search.trim()) {
      alert("Enter a job title.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
  "https://remotive.com/api/remote-jobs"
);

      const data = await response.json();

const words = search
  .toLowerCase()
  .split(" ")
  .filter(Boolean);

const filteredJobs = data.jobs.filter((job) => {

  const text = `
    ${job.title}
    ${job.company_name}
    ${job.category}
    ${job.description}
    ${job.candidate_required_location}
  `.toLowerCase();

  return words.every(word => text.includes(word));

});

setJobs(filteredJobs);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>🔍 Find Real Jobs</h1>

        <div className="search-box">
          <input
  type="text"
  placeholder="React Developer"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      searchJobs();
    }
  }}
/>

          <button onClick={searchJobs}>Search</button>
        </div>

        {loading && <h2>Searching...</h2>}

        {!loading && jobs.length === 0 && (
          <h2>No jobs found.</h2>
        )}

        {!loading && jobs.length > 0 && (
  <h3 style={{ marginTop: "20px" }}>
    {jobs.length} Job{jobs.length > 1 ? "s" : ""} Found
  </h3>
)}

        <div className="jobs-grid">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
                <div className="company-avatar">
  {job.company_name.charAt(0)}
</div>
              <h2>{job.title}</h2>

              <h4>{job.company_name}</h4>

              <p>📍 {job.candidate_required_location}</p>

              <div className="job-badges">

  <span className="badge blue">
    {job.category}
  </span>

  <span className="badge green">
    {job.candidate_required_location}
  </span>

</div>

              <div className="job-buttons">

                <button
                className="save-btn"
                onClick={() => saveJob(job)}
                >
                ❤️ Save
                </button>

  <Link
    to="/find-job-details"
    state={{ job }}
  >
    <button>
      👁 View
    </button>
  </Link>

</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FindJobs;