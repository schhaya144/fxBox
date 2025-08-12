import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoLogoWhatsapp } from "react-icons/io";
import SummaryApi from './common/SummaryApi.jsx';
import { setUserDetails } from './store/UserSlice.js';
import Context from './Login_registration/Context.jsx';
import Tapbar from './components/Tapbar.jsx';

function App() {
  const dispatch = useDispatch();
  const location = useLocation(); // Hook to get the current location

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: 'include',
    });
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
  };

  useEffect(() => {
    // Fetch user details on mount
    fetchUserDetails();
  }, []);

  // Define routes where the Tapbar should not be displayed
  const hideTapbarRoutes = ['/', '/signup'];

  return (
    <Context.Provider
      value={{
        fetchUserDetails,
      }}
    >
      <div className="flex flex-col justify-center items-center bg-[#9195A3] min-h-screen">
        <div className="lg:w-[400px] xl:w-[400px] sm:w-8/12 w-full shadow-md bg-black shadow-zinc-300 relative">
          {/* Service Icon */}
          <Link to="/customer-service" className="fixed z-50 bottom-28 right-2">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <IoLogoWhatsapp className="w-20 h-16 text-fxbt-blue" />
            </div>
          </Link>
          <Outlet />
          {/* Conditionally render Tapbar */}
          {!hideTapbarRoutes.includes(location.pathname) && (
            <div className="sticky bottom-0 left-0 right-0 z-20">
              <Tapbar />
            </div>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
