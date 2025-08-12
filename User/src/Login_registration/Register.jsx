import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import buttonarrow from '../assets/right-arrowBW.png';
import logo from '../assets/fxlogo.webp';
import { Link } from 'react-router-dom';
import PhoneIcon from '../Svg/PhoneIcon';
import EditPasswordIcon from '../Svg/EditPasswordIcon';
import InvitationIcon from '../Svg/InvitationIcon';
import SummaryApi from '../common/SummaryApi.jsx';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '', // Added name field
    phone: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
    privacyAgreement: false,
    referralCode: '',
    p_id: '',
    otp: '',      
    email: '',  
  });
  const [checked, setChecked] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // State to track OTP status

  const [otpVerified, setOtpVerified] = useState(false);
  const [userId, setUserId] = useState(() => {
    const stotealId = localStorage.getItem('u_id');
    return stotealId ? parseInt(stotealId) : 6000010;
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setChecked(checked);
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };


  
  const handleRegister = async () => {
    console.log(formData);
 if (!otpVerified) {
    alert('Please verify your email first');
    return;
  }
    const newUserId = (userId + 1).toString();

    const requestData = {
      ...formData,
      u_id: newUserId,
    };

    try {
      const response = await fetch(SummaryApi.Signup.url, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(requestData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.text();
      console.log('Server Response:', result);

      if (!response.ok) {
        throw new Error(`Server Error: ${result}`);
      }

      const newStudentId = parseInt(newUserId);
      setUserId(newStudentId);
      localStorage.setItem('s_id', newStudentId);

      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const toggleForm = () => {
    navigate('/'); // Redirect to the /login route
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full flex justify-between items-center bg-gradient-to-r from-[#1A4C78] to-[#2BC6FF] z-10">
        <Link to="/" className="pb-1 text-white cursor-pointer ps-3">
          <img src={buttonarrow} className="w-[22px] h-[24px]" alt="" />
        </Link>
        <div className="flex items-center justify-center">
          <img src={logo} className="sm:w-[120px]  w-[140px]  my-2 object-contain" alt="" />
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex flex-col items-center  bg-gradient-to-r from-[#1A4C78] to-[#2BC6FF] mt-14">
        <div className="flex flex-col justify-start px-2">
          <h4 className="mt-2 mb-2 text-lg font-semibold text-white">Register</h4>
          <p className="mb-8 text-xs text-white pe-10 text-start">Please register by phone number or email</p>
        </div>
      </div>

      <div className="p-5">
        {/* Name Field */}
        <div className="flex flex-col justify-start font-normal">
          <label className="flex items-center py-2 text-lg text-white">
            <span className="ms-2  text-[15px]">Full Name</span>
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg"
            type="text"
            placeholder="Please enter your full name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col mt-2 mb-4 font-normal">
          <label className="flex py-2 text-white text-[15px]">
            <PhoneIcon className="text-fxbt-blue fill-current w-7 h-7" />
            Phone number
          </label>
          <div className="flex gap-4 items-center">
            <select className="w-[90px] rounded-md px-4 py-[5px] text-gray-500 text-[19px]">
              <option disabled selected className='' >+91</option>
              <option value="+91 India">+91 India</option>
            </select>
            <input
              className="w-full px-4 py-2 rounded-lg"
              type="tel"
              placeholder="Please enter the phone number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
           
          </div>
        </div>






<div className="flex flex-col justify-start font-normal mt-4">
  <label className="flex items-center py-2 text-lg text-white">
    <span className="ms-2 text-[15px]">Email</span>
  </label>
  <div className="flex items-center gap-2">
    <input
      className="w-full px-4 py-2 rounded-lg"
      type="email"
      placeholder="Enter your email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
    />
    <button
      className="bg-blue-500 text-white px-3 py-2 rounded"
      onClick={async () => {
        try {
          const res = await fetch('http://localhost:8077/api/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: formData.email }),
          });
          const result = await res.json();
          if (res.ok) {
            alert('OTP sent');
            setOtpSent(true);
          } else {
            alert(result.message || 'Failed to send OTP');
          }
        } catch (err) {
          console.error(err);
          alert('Something went wrong');
        }
      }}
    >
      Send OTP
    </button>
  </div>
</div>

{/* OTP Input */}
{otpSent && !otpVerified && (
  <div className="flex flex-col mt-4 font-normal">
    <label className="flex items-center py-2 text-lg text-white">
      <span className="ms-2 text-[15px]">Enter OTP</span>
    </label>
    <div className="flex items-center gap-2">
      <input
        className="w-full px-4 py-2 rounded-lg"
        type="text"
        name="otp"
        value={formData.otp}
        onChange={handleInputChange}
        placeholder="Enter OTP"
      />
      <button
        className="bg-green-500 text-white px-3 py-2 rounded"
        onClick={async () => {
          try {
            const res = await fetch('http://localhost:8077/api/verify-otp', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: formData.email, otp: formData.otp }),
            });
            const result = await res.json();
            if (res.ok) {
              alert('OTP Verified');
              setOtpVerified(true);
            } else {
              alert(result.message || 'Invalid OTP');
            }
          } catch (err) {
            alert('Something went wrong');
          }
        }}
      >
        Verify
      </button>
    </div>
  </div>
)}








        {/* Password Fields */}
        <div className="flex flex-col justify-start font-normal">
          <label className="flex items-center py-2 text-lg text-white">
            <EditPasswordIcon className="text-fxbt-blue w-7 h-7" />
            <span className="ms-2  text-[15px]">Password</span>
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg"
            type="password"
            placeholder="Please enter your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col justify-start font-normal mt-4">
          <label className="flex items-center py-2 text-lg text-white">
            <EditPasswordIcon className="text-fxbt-blue w-7 h-7" />
            <span className="ms-2 text-[15px]">Confirm Password</span>
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg"
            type="password"
            placeholder="Please confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        {/* Invite Code */}
        <div className="flex flex-col justify-start font-normal mt-4">
          <label className="flex items-center py-2 text-lg text-white">
            <InvitationIcon className="text-fxbt-blue w-7 h-7" />
            <span className="ms-2 text-[15px]">Invite Code (Optional)</span>
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg"
            type="text"
            placeholder="Enter invite code"
            name="inviteCode"
            value={formData.inviteCode}
            onChange={handleInputChange}
          />
        </div>

        {/* Privacy Agreement */}
        <div className="flex items-center justify-start font-normal mt-4">
          <input
            className="mr-2"
            type="checkbox"
            name="privacyAgreement"
            checked={checked}
            onChange={handleInputChange}
          />
          <span className="text-white text-[15px]">
            I agree to the Privacy Policy and Terms of Service
          </span>
        </div>

        {/* Register Button */}
        <button
          className="w-full mt-6 px-4 py-2   text-white border border-[#2BC6FF]  rounded-3xl bg-gradient-to-r from-[#1A4C78] to-[#2BC6FF] hover:from-[#2BC6FF] hover:to-[#1A4C78] transition-colors duration-300"
          onClick={handleRegister}
        >
          Register
        </button>

        {/* Toggle to Login */}
        <p className="mt-4 text-center text-white text-[15px]">
          Already have an account?{' '}
          <span
            className="text-blue-300 underline cursor-pointer"
            onClick={toggleForm}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
