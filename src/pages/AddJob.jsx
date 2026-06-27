import { useState } from "react";
import Navbar from "../components/Navbar";

function AddJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    status: "Applied",
    type: "Remote",
  });

  function handleChange(e) {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!job.title || !job.company) {
      alert("Please fill in all required fields.");
      return;
    }

    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    const newJob = {
      id: Date.now(),
      ...job,
      appliedDate: new Date().toLocaleDateString(),
    };

    jobs.push(newJob);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    alert("Job Added Successfully!");

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      status: "Applied",
      type: "Remote",
    });
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Add Job</h1>

        <form className="job-form" onSubmit={handleSubmit}>

          <input
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
          />

          <input
            name="company"
            placeholder="Company"
            value={job.company}
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
          />

          <input
            name="salary"
            placeholder="Salary"
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

          <button>Add Job</button>

        </form>

      </div>
    </>
  );
}

export default AddJob;