import "./../styles/navbar.css";

function Navbar({ search, setSearch }) {

  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <nav className="navbar">

      <div>

        <h2>Job Tracker</h2>

        <span>Track your dream career 🚀</span>

      </div>

      <div className="nav-right">

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="profile">

          <img
            src="https://ui-avatars.com/api/?name=KG"
            alt=""
          />

          <div>

            <h4>{user.email || "Guest"}</h4>

            <small>Frontend Developer</small>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;