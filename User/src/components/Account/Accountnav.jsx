import React from 'react'
import { Link } from 'react-router-dom'

const Accountnav = () => {
  return (
    <>
              {/* navvv */}
              <nav className="navbar navbar-expand navbar-light bg-gamenav-gradient ">
            <div className="container-fluid flex py-3">
            <Link to="/account" className="text-3xl md:text-2xl text-white ">
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
              <div className="navbar-nav w-full  me-5 mb-lg-0 flex justify-center">
                <span className="text-white  font-bahnschrift text-19px">Setting Center</span>
              </div>
            </div>
          </nav>
    </>
  )
}

export default Accountnav