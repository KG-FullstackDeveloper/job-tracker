import { Link } from "react-router-dom";

function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "All Jobs", path: "/jobs" },
    { name: "Add Job", path: "/add-job" },
    { name: "Saved Jobs", path: "/saved" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="logo">Job Tracker</h2>

      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;