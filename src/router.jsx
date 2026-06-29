import FindJobDetails from "./pages/FindJobDetails";
import FindJobs from "./pages/FindJobs";
import EditJob from "./pages/EditJob";
import JobDetails from "./pages/JobDetails";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AllJobs from "./pages/AllJobs";
import AddJob from "./pages/AddJob";
import SavedJobs from "./pages/SavedJobs";
import Settings from "./pages/Settings";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout>
          <Dashboard />
        </Layout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/jobs",
    element: (
      <ProtectedRoute>
        <Layout>
          <AllJobs />
        </Layout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/add-job",
    element: (
      <ProtectedRoute>
        <Layout>
          <AddJob />
        </Layout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/saved",
    element: (
      <ProtectedRoute>
        <Layout>
          <SavedJobs />
        </Layout>
      </ProtectedRoute>
    ),
  },

    {
path:"/job/:id",

element:(

<ProtectedRoute>

<Layout>

<JobDetails/>

</Layout>

</ProtectedRoute>

)

},

{

path:"/edit-job/:id",

element:(

<ProtectedRoute>

<Layout>

<EditJob/>

</Layout>

</ProtectedRoute>

)

},

{
  path: "/find-jobs",
  element: (
    <ProtectedRoute>
      <Layout>
        <FindJobs />
      </Layout>
    </ProtectedRoute>
  ),
},

{
  path: "/find-job-details",
  element: (
    <ProtectedRoute>
      <Layout>
        <FindJobDetails />
      </Layout>
    </ProtectedRoute>
  ),
},

  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <Layout>
          <Settings />
        </Layout>
      </ProtectedRoute>
    ),
  },
]);

export default router;