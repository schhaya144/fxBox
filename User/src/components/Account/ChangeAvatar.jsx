// import av1 from '../../assets/av1.png';
// import av2 from '../../assets/av2.png';
// import av3 from '../../assets/av3.png';
// import av4 from '../../assets/av4.png';
// import av5 from '../../assets/av5.png';
// import av6 from '../../assets/av6.png';
// import av7 from '../../assets/av7.png';
// import av8 from '../../assets/av8.png';
// import av9 from '../../assets/av9.png';
// import av10 from '../../assets/av10.png';
// import av11 from '../../assets/av11.png';
// import av12 from '../../assets/av12.png';
// import av13 from '../../assets/av13.png';
// import av14 from '../../assets/av14.png';
// import av15 from '../../assets/av15.png';
// import av16 from '../../assets/av16.png';
// import av18 from '../../assets/av18.png';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAvatar } from '../../AvatarContext'; // Import the context hook

// Import avatar images
import av1 from '../../assets/av1.png';
import av2 from '../../assets/av2.png';
import av3 from '../../assets/av3.png';
import av4 from '../../assets/av4.png';
import av5 from '../../assets/av5.png';
import av6 from '../../assets/av6.png';
import av7 from '../../assets/av7.png';
import av8 from '../../assets/av8.png';
import av9 from '../../assets/av9.png';
import av10 from '../../assets/av10.png';
import av11 from '../../assets/av11.png';
import av12 from '../../assets/av12.png';
import av13 from '../../assets/av13.png';
import av14 from '../../assets/av14.png';
import av15 from '../../assets/av15.png';
import av16 from '../../assets/av16.png';
import av18 from '../../assets/av18.png';

const initialAvatars = [
  av1, av2, av3, av4, av5, av6, av7, av8, av9, av10, av11, av12, av13, av14, av15, av16, av18
];

const ChangeAvatar = () => {
  const { avatar, setAvatar } = useAvatar(); // Get the avatar and setAvatar function from context
  const navigate = useNavigate(); // For navigation after selection
  const [selectedAvatar, setSelectedAvatar] = useState(null); // State for selected avatar

  const swapWithAvatar12 = (clickedIndex) => {
    const avatar12Index = 11; // Fixed index for av12
    if (clickedIndex !== avatar12Index) {
      const updatedAvatars = [...initialAvatars];
      // Swap clicked avatar with av12
      [updatedAvatars[clickedIndex], updatedAvatars[avatar12Index]] = [updatedAvatars[avatar12Index], updatedAvatars[clickedIndex]];
      setAvatar(updatedAvatars[avatar12Index]); // Update the avatar in context
      setSelectedAvatar(clickedIndex); // Set the selected avatar index

      // Redirect after a slight delay to let the border change be visible
      setTimeout(() => navigate(-1), 300); // Redirect to the previous page
    }
  };

  return (
    <>
      <div className="">
        {/* Header Section */}
        <div className="sticky top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-2 bg-white text-black shadow-sm">
          <Link to="/accountSetting" className="text-3xl md:text-2xl text-black">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
            </svg>
          </Link>
          <div className="flex-1 text-center text-xl font-semibold py-3 pr-3">
            Change Avatar
          </div>
        </div>
      </div>

      {/* Avatar Grid Section */}
      <div className="grid grid-cols-3 gap-3 p-4">
        {initialAvatars.map((avatar, index) => (
          <div
            key={index}
            className={`flex items-center justify-center cursor-pointer ${
              selectedAvatar === index ? 'border-4 border-red-500' : '' // Red border if selected
            }`}
            onClick={() => swapWithAvatar12(index)}
          >
            <img
              src={avatar}
              alt={`Avatar ${index + 1}`}
              className="w-28 h-28 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ChangeAvatar;
