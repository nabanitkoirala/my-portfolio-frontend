
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Qualifications from "./components/Qualifications";
import Dashboard from './Dashboard';
import Login from './admin/pages/LoginPage';
import Homepage from './admin/pages/HomePage';
const App = () => {
  const router = createBrowserRouter([
    // {
    //   path: '/',
    //   element: (
    //     <Layout
    //       handlePrompt={handlePrompt}
    //       deferredPrompt={deferredPrompt}
    //     >
    //       <Dashboard

    //       />
    //     </Layout>
    //   ),
    // },
    // {
    //   path: '/',
    //   element: (
    //     <Login />
    //   ),
    // },
    {
      path: '/',
      children: [
        {
          index: true,
          path: '',
          element: (

            <Dashboard />

          ),
        },

      ],
    },
    {
      path: '/login',
      children: [
        {
          index: true,
          path: '',
          element: (

            <Login />

          ),
        },

      ],
    },
    {
      path: '/dashboard',
      children: [
        {
          index: true,
          path: '',
          element: (

            <Homepage />

          ),
        },

      ],
    },
    // {
    //   path: '/all-students',
    //   children: [
    //     {
    //       index: true,
    //       path: '',
    //       element: (
    //         <Layout>
    //           <AllStudents />
    //         </Layout>
    //       ),
    //     },

    //   ],
    // },
    { path: '*', element: <Navigate to="/" /> },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
