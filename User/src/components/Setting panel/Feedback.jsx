import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import NavPramotion from '../pramotion/NavPramotion';
import feedbackimg from '../../assets/feedbackImg.png';
import { BsExclamationLg } from "react-icons/bs";
import { GiCheckMark } from 'react-icons/gi';

const Feedback = () => {
  const [feedback, setFeedback] = useState(''); // State to store user feedback
  const [showToast, setShowToast] = useState(false); // State to show/hide toast
  const [toastMessage, setToastMessage] = useState(''); // State for dynamic toast message
  const navigate = useNavigate(); // For navigation

  const handleSubmit = () => {
    if (!feedback.trim()) {
      // If feedback is empty, show error toast
      setToastMessage('Please enter a comment');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } else {
      // If feedback is provided, show success toast
      setToastMessage('Successfully submitted');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/account'); // Redirect to account page
      }, 2000);
    }
  };

  return (
    <div>
      <NavPramotion heading={'Feedback'} linkPath={'/account'} />
      <div className="p-4 mx-3 my-3 bg-white rounded-lg text-12px">
        <textarea
          className="w-full p-2 rounded"
          name="feedback"
          cols="44"
          rows="15"
          placeholder="Welcome to feedback, please give feedback - please describe the problem in detail when providing feedback. Preferably attach a screenshot of the problem you encountered, we will immediately process your feedback!"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)} // Update feedback state
        ></textarea>
      </div>
      <div className="my-10 text-center">
        <div className="text 13px">
          <h5>Send helpful feedback</h5>
          <h5>Chance to win Mystery Rewards</h5>
        </div>
        <div className="flex justify-center my-6 text-center">
          <img src={feedbackimg} alt="" className="w-64 h-43 " />
        </div>
      </div>
      <div className="mx-4 my-5">
        <button
          className="w-full p-2.5 text-white bg-timer-gradient rounded-3xl"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed inline-block px-7 py-5 text-white transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.7)] rounded-lg shadow top-1/2 left-1/2"
          style={{
            zIndex: 9999,
            transition: 'opacity 0.5s ease-in-out',
            '--van-toast-max-width': '70%',
          }}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Check Icon for error or success */}
            {toastMessage === 'Please enter a comment' ? (
              <BsExclamationLg className="pb-2 text-4xl font-extrabold text-white" />
            ) : (
              < GiCheckMark className="pb-2 text-4xl font-extrabold text-white" />
            )}
            <span className="text-sm font-custom2">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
