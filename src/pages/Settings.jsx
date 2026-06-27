import Navbar from "../components/Navbar";

function Settings() {

  return (

    <div className="page">

      <Navbar />

      <h1>Settings</h1>

      <div className="settings-box">

        <h3>Profile Settings</h3>

        <label>

          Full Name

          <input
            type="text"
            placeholder="Ashorin"
          />

        </label>

        <label>

          Email

          <input
            type="email"
            placeholder="example@gmail.com"
          />

        </label>

        <button>
          Save Changes
        </button>

      </div>

    </div>

  );

}

export default Settings;