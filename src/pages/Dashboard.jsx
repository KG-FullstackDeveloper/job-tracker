import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import JobCard from "../components/JobCard";

function Dashboard() {
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  return (
    <>

      <Navbar />

      <div className="dashboard">

        <DashboardCards />

        <div className="hero">

          <div>

            <h1>Welcome Back 👋</h1>

            <p>

              Track your applications,
              prepare for interviews,
              and land your dream job.

            </p>

          </div>

          <button>

            + Add New Job

          </button>

        </div>

        <div className="recent">

          <h2>

            Recent Applications

          </h2>

    {jobs.length === 0 ? (

        <h3 className="empty-state">
          No Jobs Added Yet
        </h3>

) : (

  jobs.slice(0, 5).map((job) => (

    <JobCard
      id={job.id}
      key={job.id}
      title={job.title}
      company={job.company}
      status={job.status}
      location={job.location}
    />

  ))

)}

        </div>

      </div>

    </>
  );
}

export default Dashboard;