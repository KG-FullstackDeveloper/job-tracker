import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

function AllJobs() {

  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

const [search, setSearch] = useState("");

const [filter, setFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {

    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || job.status === filter;

    return matchesSearch && matchesFilter;

  });

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="dashboard">

        <h1>All Jobs</h1>

        <div className="filter-buttons">

          <button
            onClick={() => setFilter("All")}
            className={filter === "All" ? "active-filter" : ""}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Applied")}
            className={filter === "Applied" ? "active-filter" : ""}
          >
            Applied
          </button>

          <button
            onClick={() => setFilter("Interview")}
            className={filter === "Interview" ? "active-filter" : ""}
          >
            Interview
          </button>

          <button
            onClick={() => setFilter("Offer")}
            className={filter === "Offer" ? "active-filter" : ""}
          >
            Offer
          </button>

          <button
            onClick={() => setFilter("Rejected")}
            className={filter === "Rejected" ? "active-filter" : ""}
          >
            Rejected
          </button>

        </div>

        {filteredJobs.length === 0 ? (

          <h2>No Jobs Found</h2>

        ) : (

          filteredJobs.map(job => (

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

export default AllJobs;