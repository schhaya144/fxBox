import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SplashDaman from '../components/SplashDaman';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PhoneIcon from '../Svg/PhoneIcon';
import EditPasswordIcon from '../Svg/EditPasswordIcon';
import RegisterForm from './Register';
import Context from './Context';
import SummaryApi from '../common/SummaryApi.jsx';
import { RiCustomerService2Line } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';
import logo from '../assets/fxlogo.webp';

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkedforget, setCheckedforget] = useState(false);
  const [forgetForm, setForgetForm] = useState('');

  const [formDatalogin, setFormDataLogin] = useState({
    phone: '',
    // email: '',
    Rememberpassword: '',
    password: '',
  });

  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);
  console.log('generalContext', fetchUserDetails);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setIsEmailLogin(false);
    setIsForgotPassword(false);
    navigate('/signup');
  };

  const handleLoginTypeChange = (type) => {
    setIsEmailLogin(type === 'email');
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    setIsRegistering(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataLogin((prevData) => ({ ...prevData, [name]: value }));
    setChecked(!checked);
  };

  const handleLogin = async () => {
    console.log('Login Data:', formDatalogin);

    try {
      const response = await fetch(SummaryApi.Login.url, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(formDatalogin),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      console.log('Server Response:', result);

      if (result.success) {
        localStorage.setItem('showAppInfoModal', 'true');
        // setUser(result.user); // Set user in the context
        navigate('/home'); // Navigate to the home page on successful login
        fetchUserDetails();
      } else {
        alert(result.message); // Show an error message if login fails
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurteal during login. Please try again.');
    }
  };

  if (isLoading) {
    return <SplashDaman />;
  }
  const handleforgetInputChange = (e) => {
    const { name, value } = e.target;
    setForgetForm((prevData) => ({ ...prevData, [name]: value }));
    setCheckedforget(!checkedforget);
  };
  const handlePasswordReset = async () => {
    console.log('Password Reset Data:', forgetForm);
    try {
      const response = await fetch(SummaryApi.Forgetuserpassword.url, {
        method: 'POST',
        body: JSON.stringify(forgetForm),
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
      alert('An error occurteal during login. Please try again.');
    }
  };

  return (
    <>
      <div className='min-h-screen'>
        {/* Fixed Logo Container */}
       <div className="fixed top-0 lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full flex justify-between items-center bg-gradient-to-r from-[#1A4C78] to-[#2BC6FF] z-10">

          <div
            className="pb-1 text-black cursor-pointer ps-3"
            onClick={() => handleBackToLogin()}
          >
            <FaChevronLeft className="mt-1 text-white" />
          </div>
          <div className='flex items-center justify-center'>
        { <img
          src={logo}
          className="sm:w-[120px]  w-[140px]  my-2 object-contain"
          alt=""
        /> }
        
        </div>
          <div className="w-10"></div>
          {/* Placeholder for spacing on the right */}
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#1A4C78] to-[#2BC6FF] mt-14">
          <div className="flex flex-col justify-start px-5">
            <h4 className="mt-2 mb-2 text-lg font-semibold text-black">
              {isRegistering
                ? 'Register'
                : isForgotPassword
                ? 'Forgot password'
                : 'Log in'}
            </h4>
            <p className="mb-8 text-xs font-semibold text-black pe-10 text-start">
              {isRegistering
                ? 'Please register by phone number or email'
                : isForgotPassword
                ? 'Please retrieve/change your password through your mobile phone number or email'
                : 'Please log in with your phone number or email. If you forget your password, please contact customer service.'}
            </p>
          </div>
        </div>

        <div className="h-full p-5 bg-black">
          {!isRegistering && !isForgotPassword ? (
            <div className="flex flex-col justify-start px-2">
              {/* Login Form */}
              <div className="flex justify-around mb-4 border-b-2 ">
                <div
                  className="flex flex-col items-center justify-center cursor-pointer "
                  onClick={() => handleLoginTypeChange('phone')}
                >
                  <h1 className={isEmailLogin ? 'text-gray-400' : 'text-black'}>
                    {isEmailLogin ? (
                      <PhoneIcon className="w-6 h-6 text-gray-400 fill-fxbt-blue" />
                    ) : (
                      <PhoneIcon className="w-6 h-6 text-fxbt-blue fill-fxbt-blue" />
                    )}
                  </h1>
                  <span
                    className={`border-b-2 w-full font-bold mb-2 ${
                      isEmailLogin
                        ? 'text-white'
                        : 'text-fxbt-blue border-fxbt-blue'
                    }`}
                  >
                    Phone number
                  </span>
                </div>
                
              </div>

              {/* Dynamic Input Fields */}
              {isEmailLogin ? (
                <div className="flex flex-col mb-4 font-normal">
                  <label className="flex items-center py-2 text-lg">
                    <EmailIcon className="w-7 h-[28px] text-fxbt-blue fill-current" />
                    <span className="ms-2"> Mail</span>
                  </label>
                  <input
                    className="px-4 py-2 rounded-lg"
                    type="email"
                    placeholder="Please enter your email"
                    name="email"
                    value={formDatalogin.email}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                <div className="flex flex-col my-4 font-normal">
                  <label className="py-2 text-[15px] flex  items-center">
                    <PhoneIcon className="w-6 h-6 fill-fxbt-blue" />
                    <span className="text-white ms-2"> Phone number</span>
                  </label>
                  <div className="flex gap-4">
                    <select className="w-[90px] rounded-md px-4 bg-gray-200 text-gray-500 text-[19px]">
                      <option disabled selected>
                        +91
                      </option>
                      <option value="+91 India">+91 India</option>
                    </select>
                    <input
                      className="w-full px-4 py-2 bg-gray-200 rounded-lg"
                      type="tel"
                      placeholder="Please enter the phone number"
                      name="phone"
                      value={formDatalogin.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-start font-normal">
                <label className="flex items-center py-2 text-lg">
                  <EditPasswordIcon className="text-fxbt-blue w-7 h-7" />
                  <span className="ms-2 text-[15px] text-gray-50">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="px-4 py-2 bg-gray-200 rounded-xl"
                  name="password"
                  value={formDatalogin.password}
                  onChange={handleInputChange}
                />
                <div className="py-4 text-sm font-medium opacity-60">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={handleInputChange}
                      className="hidden" // Hide the default checkbox
                    />
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center transition-colors duration-200 ${
                        checked ? 'bg-fxbt-gradient text-white' : 'bg-white'
                      }`}
                    >
                      {checked && (
                        <span className="text-sm text-white">&#10003;</span>
                      )}{' '}
                      {/* Checkmark */}
                    </div>
                    <span className="ml-2 text-white"> Remember Password</span>{' '}
                    {/* Label Text */}
                  </label>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <button
                  className="flex items-center justify-center py-2 my-4 text-xl font-semibold text-white border border-[#2BC6FF] w-80 rounded-3xl bg-gradient-to-r from-[#1A4C78] to-[#2BC6FF] hover:from-[#2BC6FF] hover:to-[#1A4C78] transition-colors duration-300"
                  onClick={handleLogin} // Call handleLogin here
                >
                  Log in
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2 text-xl font-semibold border-fxbt-blue text-fxbt-blue border w-80 rounded-3xl"
                  onClick={toggleForm}
                >
                  Register
                </button>
              </div>

              <div className="flex items-center justify-around mt-6">
                <div
                  className="flex flex-col items-center justify-center m-1 text-sm cursor-pointer"
                  onClick={handleForgotPassword}
                >
                  <RiLockPasswordLine className="text-4xl text-fxbt-blue" />
                  <div className="mt-2 text-white">Forget Password</div>
                </div>
                <div className="flex flex-col items-center justify-center m-1 text-sm">
                  <RiCustomerService2Line className="text-4xl text-fxbt-blue" />
                  <div className="mt-2 text-white">Customer Service</div>
                </div>
              </div>
            </div>
          ) : isForgotPassword ? (
            <div className="flex flex-col justify-start w-full px-2">
              {/* Forgot Password Form */}
              <div className="flex flex-col mb-4 font-normal">
                <div className="flex flex-col items-center mb-4 font-normal border-b-2 border-fxbt-blue">
                  <PhoneIcon className="w-6 h-6 text-fxbt-blue fill-fxbt-blue" />{' '}
                  <p className="pb-2 text-lg font-semibold text-fxbt-blue">
                    phone reset
                  </p>
                </div>

                <label className="flex py-2 text-white">
                  <svg className="text-fxbt-blue fill-fxbt-blue w-7 h-7">
                    <use xlinkHref="#icon-phone"></use>
                  </svg>
                  <span className="text-[18px] ms-2 text-white">
                    Phone number
                  </span>
                </label>
                <div className="flex gap-4">
                  <select className="w-[90px] rounded-md px-4 text-gray-500 text-[19px]">
                    <option disabled selected>
                      +91
                    </option>
                    <option value="+91 India">+91 India</option>
                  </select>
                  <input
                    className="w-full px-4 py-3 rounded-lg"
                    type="number"
                    placeholder="Please enter the phone number"
                    name="tel"
                    value={forgetForm.phone}
                    onChange={handleforgetInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4 font-normal">
                <label className="flex items-center py-2 text-lg">
                  <EditPasswordIcon className="text-fxbt-blue w-7 h-7" />
                  <span className="ms-2 text-[19px]">A new Password</span>
                </label>
                <input
                  type="password"
                  placeholder="New Password"
                  className="px-4 py-3 rounded-lg"
                  name="newPassword"
                  value={forgetForm.newPassword}
                  onChange={handleforgetInputChange}
                />
              </div>
              <div className="flex flex-col mb-4 font-normal">
                <label className="flex items-center py-2 text-lg">
                  <EditPasswordIcon className="text-fxbt-blue w-7 h-7" />
                  <span className="ms-2 text-[18px]">Confirm new Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="px-4 py-3 rounded-lg"
                  name="confirmPassword"
                  value={forgetForm.confirmPassword}
                  onChange={handleforgetInputChange}
                />
              </div>
              <div className="flex justify-center py-4 text-sm font-medium opacity-60">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="AgreeCheckbox"
                    value={forgetForm.AgreeCheckbox}
                    checked={checkedforget}
                    onChange={handleforgetInputChange}
                    className="hidden" // Hide the default checkbox
                  />
                  <div
                    className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center transition-colors duration-200 ${
                      checkedforget ? 'bg-fxbt-gradient text-white' : 'bg-white'
                    }`}
                  >
                    {checkedforget && (
                      <span className="text-sm text-white">&#10003;</span>
                    )}{' '}
                    {/* Checkmark */}
                  </div>
                  <span className="ml-2"> I have read and agree</span>
                  {/* Label Text */}
                  <Link
                    to="/DisclosureAgreement"
                    className="font-semibold text-fxbt-blue"
                  >
                    {'  [Privacy Agreement]'}
                  </Link>
                </label>
              </div>

              <button
                className="px-20 py-2 my-4 text-2xl font-semibold text-white border border-[#2BC6FF] w-80 rounded-3xl bg-gradient-to-r from-[#1A4C78] to-[#2BC6FF] hover:from-[#2BC6FF] hover:to-[#1A4C78] transition-colors duration-300 rounded-3xl"
                onClick={() => {
                  navigate('/home');
                  handlePasswordReset();
                }}
              >
                Reset
              </button>
              <button
                type="button"
                className="px-16 py-2 text-2xl font-semibold text-fxbt-blue border text-fxbt-blue rounded-3xl"
                onClick={handleBackToLogin}
              >
                Back to Login
              </button>
            </div>
          ) : (
            <div>
              <div className="flex flex-col justify-start px-2">
                {/* Registration Form */}
                <RegisterForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
