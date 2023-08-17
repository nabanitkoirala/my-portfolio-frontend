
import { Navigate, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Qualifications from "./components/Qualifications";
import Dashboard from './Dashboard';
import Login from './admin/pages/LoginPage';
import Homepage from './admin/pages/HomePage';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const TRACKING_ID = import.meta.env.VITE_APP_GOOGLE_ANALYTICS_TRACKING_ID;
const App = () => {

  const { pathname, search } = useLocation();
  ReactGA.initialize(TRACKING_ID);
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
  useEffect(() => {
    ReactGA.set({ page: pathname, title: 'Homepage' });
    ReactGA.pageview(pathname + search);
  }, [pathname, search]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
