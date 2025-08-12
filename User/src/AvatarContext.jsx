import React, { createContext, useState, useContext } from 'react';
import av12 from './assets/av12.png';

// Create a context
const AvatarContext = createContext();

// Create a provider component
export const AvatarProvider = ({ children }) => {
  const [avatar, setAvatar] = useState(av12); // Initial avatar is av12

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

// Custom hook to use the avatar context
export const useAvatar = () => {
  return useContext(AvatarContext);
};
