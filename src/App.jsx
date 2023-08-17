
import { BrowserRouter, Navigate, useLocation, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const TRACKING_ID = import.meta.env.VITE_APP_GOOGLE_ANALYTICS_TRACKING_ID;
const MyComponent = () => {
  const { pathname, search } = useLocation();
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.set({ page: pathname, title: 'Homepage' });
    ReactGA.pageview(pathname + search);
  }, [pathname, search]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard />

        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
const App = () => {


  return (
    <BrowserRouter>
      <MyComponent />
    </BrowserRouter>
  );
}

export default App;
