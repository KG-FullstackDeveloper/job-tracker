import { Link } from "react-router-dom";
import { useState } from "react";

function JobCard({
  id,
  title,
  company,
  status,
  location,
}) {

  const [saved, setSaved] = useState(() => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    return savedJobs.some(job => job.id === id);
  });

  function handleSave() {

    let savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (saved) {

      savedJobs = savedJobs.filter(job => job.id !== id);

    } else {

      savedJobs.push({
        id,
        title,
        company,
        status,
        location,
      });

    }

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(savedJobs)
    );

    setSaved(!saved);

  }

  return (

    <div className="job-card">

      <div>

        <h2>{title}</h2>

        <p>{company}</p>

        <span>{location}</span>

      </div>

      <div className="job-status">

        <span className="status">

          {status}

        </span>

        <button
          className="heart-btn"
          onClick={handleSave}
        >

          {saved ? "❤️" : "🤍"}

        </button>

        <button>

          View Details

        </button>

      </div>

    </div>

  );

}

export default JobCard;