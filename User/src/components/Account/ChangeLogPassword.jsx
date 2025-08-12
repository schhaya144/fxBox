import React, { useState } from 'react';
import NavPramotion from '../pramotion/NavPramotion';
import rightgray from '../../assets/right-gray.png';
import EditPasswordIcon from '../../Svg/EditPasswordIcon';
import eyeopen from '../../assets/eyevisible.png';
import eyeclose from '../../assets/eyeclose.png';
import SummaryApi from '../../common/SummaryApi.jsx';

const ChangeLogPassword = () => {
  const [forgetForm, setForgetForm] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleforgetInputChange = (e) => {
    const { name, value } = e.target;
    setForgetForm((prevData) => ({ ...prevData, [name]: value }));
    setCheckedforget(!checkedforget);
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordReset = async () => {
    console.log('Password Reset Data:', forgetForm);
    try {
      const response = await fetch(
        SummaryApi.Changeuserpassword.url,
        {
          method: 'POST',
          body: JSON.stringify(forgetForm),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await response.json();
      console.log('Server Response:', result);

      if (result.success) {
        localStorage.setItem('showAppInfoModal', 'true');
        navigate('/home'); // Navigate to the home page on successful login
      } else {
        alert(result.message); // Show an error message if login fails
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <NavPramotion
        heading="Change Login password"
        linkPath="/accountSetting"
        className="text-[18.7px] font-[400]"
      />
      <div className="p-[20.7px]">
        <div className="mt-[41.9px]">
          <div className="flex flex-col mb-4 font-normal relative">
            <label className="py-2 text-[#1e2637] text-lg flex items-center">
              <EditPasswordIcon className="w-6 h-6 text-red-500" />
              <span className="ms-2 text-[15.6px]">Login Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Login password"
              className="px-4 py-3 rounded-lg"
              name="newPassword"
              value={forgetForm.newPassword}
              onChange={handleforgetInputChange}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute inset-y-0 right-0 flex items-center px-3 mt-10  text-gray-500"
            >
              {showPassword ? (
                <img src={eyeclose} className="h-5 w-5" aria-hidden="true" />
              ) : (
                <img src={eyeopen} className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-col mb-4 font-normal relative">
            <label className="py-2 text-lg flex items-center text-[#1e2637]">
              <EditPasswordIcon className="w-6 h-6 text-red-500" />
              <span className="ms-2 text-[15.6px]">New login Password</span>
            </label>
            <input
              type="password"
              placeholder="New login password"
              className="px-4 py-3 rounded-lg"
              name="newPassword"
              value={forgetForm.newPassword}
              onChange={handleforgetInputChange}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute inset-y-0 right-0 flex items-center px-3 mt-10  text-gray-500"
            >
              {showPassword ? (
                <img src={eyeclose} className="h-5 w-5" aria-hidden="true" />
              ) : (
                <img src={eyeopen} className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="flex flex-col mb-4 font-normal relative">
            <label className="py-2 text-lg flex items-center text-[#1e2637]">
              <EditPasswordIcon className="w-6 h-6 text-red-500" />
              <span className="ms-2 text-[15.6px]">Confirm new Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="px-4 py-3 rounded-lg"
              name="newPassword"
              value={forgetForm.newPassword}
              onChange={handleforgetInputChange}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute inset-y-0 right-0 flex items-center px-3 mt-10  text-gray-500"
            >
              {showPassword ? (
                <img src={eyeclose} className="h-5 w-5" aria-hidden="true" />
              ) : (
                <img src={eyeopen} className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="text-[13.5px] applebahnschrift text-[#768096] flex justify-end items-center">
            <span>Forget original login password</span>
            <img src={rightgray} className="w-4 h-3 object-fill bg-cover" />
          </div>
          <div className="px-8">
            <div
              className="mt-[50px] text-[19.72px]   applebahnschrift BlinkMacSystemFont text-white font-[600] py-[6px] px-[1px] bg-gamenav-gradient flex justify-center items-center rounded-full"
              onClick={() => {
                handlePasswordReset();
              }}
            >
              Save changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeLogPassword;
