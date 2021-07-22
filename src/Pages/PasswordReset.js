import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { LockClosedIcon } from "@heroicons/react/outline";
export default function PasswordReset() {
  return (
    <div>
      <NavBar />

      <div className="mt-10 log-form flex-col m-auto">
        <LockClosedIcon className=" h-28 rounded-full border-2 border-black p-4 mt-5 mb-3"></LockClosedIcon>
        <p className="block m-auto font-semibold mb-3 "> Trouble Logging In?</p>
        <p className="px-8 text-gray-400 font-light leading-4 text-sm mb-3">
          Enter your email, phone, or username and we'll send you a link to get
          back into your account
        </p>
        <form className="w-10/12">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Phone number, username or email"
              className="w-full pl-3 py-2 bg-gray-50 border-2 border-gray-200 mb-2 "
            />
          </div>
          <button className="w-full bg-blue-400 text-white py-1 rounded-md mb-3">
            Send Login Link
          </button>
          <div className="relative items-center my-3 flex flex-col">
            <div className="border-solid w-full border-gray-400 border-t top-1/2 absolute z-0"></div>
            <p className="min-w-min text-center bg-white z-10 px-3 text-gray-400">
              OR
            </p>
          </div>
          <Link className="block rounded-md w-max m-auto mb-16" to="/signup">
            Create New Account
          </Link>
        </form>
        <div className="border-t w-full py-2 text-center bg-gray-50 border-solid border-gray-400">
          <Link className="" to="/">
            Back To Login
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
