import React, { useState, useEffect, useContext } from 'react';
import UserContext from './Context';


const Profile = () => {
  const { user } = useContext(UserContext);

  console.log('User:', user); // Log the user object
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="relative bg-red-200 rounded-lg shadow-lg p-8 max-w-md w-full uppercase px-10">
        {/* Profile details here */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome, {user.name}!
        </h2>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Name:</span> {user.name}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Name:</span> {user.phone}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Name:</span> {user.u_id}
        </p>
     
 
      </div>
      {/* <LeaderBoard
        course={user.course}
        batch={user.batch}
        studentId={user.s_id}
      /> */}
    </div>
  );
};
export default Profile;
