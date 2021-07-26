import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ins from "../source/instagram.png";
import Footer from "../components/Footer";
import AppDownload from "../components/AppDownload";
import LogContext from "../context/LogContext";
export default function Signup() {
  const { register } = useContext(LogContext);
  const [data, setData] = useState({
    email: null,
    username: null,
    fullname: null,
    password: null,
  });
  const registerHandle = () => {
    console.log("dataa ", data);
    register(data.email, data.username, data.fullname, data.password);
  };
  return (
    <div className=" flex flex-col items-center m-auto ">
      <div className="mt-10 log-form flex-col mx-15">
        <img
          src={ins}
          alt="instagram logo"
          className=" px-12 pt-4 pb-2"
          height={100}
          width={300}
        />
        <div className="text-lg text-center  text-gray-400 px-10 mb-4">
          Sign up to see photos and videos from your friends.
        </div>
        <div className="w-10/12 text-center rounded-md py-1 mb-4 bg-blue-500 text-white">
          Log in with FaceBook
        </div>
        <div className="relative items-center w-10/12 flex flex-col mb-4">
          <div className="border-solid w-full border-gray-400 border-t top-1/2 absolute z-0"></div>
          <p className="min-w-min text-center bg-white z-10 px-3 text-gray-400">
            OR
          </p>
        </div>
        <form className="w-10/12" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full">
            <input
              type="text"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Phone number, username or email"
              className="w-full pl-3 py-2 bg-gray-50 border-2 border-gray-200 mb-2 "
            />
          </div>
          <div className="relative w-full">
            <input
              type="text"
              onChange={(e) => setData({ ...data, fullname: e.target.value })}
              placeholder="Full Name"
              className="w-full pl-3 py-2 bg-gray-50 border-2 border-gray-200 mb-2 "
            />
          </div>
          <div className="relative w-full">
            <input
              type="text"
              onChange={(e) => setData({ ...data, username: e.target.value })}
              placeholder="UserName"
              className="w-full pl-3 py-2 bg-gray-50 border-2 border-gray-200 mb-2 "
            />
          </div>
          <div className="relative mb-2">
            <input
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              placeholder="Password"
              className="w-full pl-3 py-2 bg-gray-50 border-2 border-gray-200 mb-2 "
            />
            <p className="absolute right-2 top-3 hidden">Show</p>
          </div>
          <button
            className="w-full bg-blue-400 text-white py-1 rounded-md mb-3"
            onClick={() => registerHandle()}
          >
            Log In
          </button>
        </form>
        <div className="text-sm text-gray-400 text-center font-light px-10 mb-10">
          By singinup , you agree to our,
          <Link to="/reditect/11" className="font-semibold">
            Terms,
          </Link>
          <Link className="font-semibold" to="/reditect/12">
            {" "}
            Data Policy{" "}
          </Link>{" "}
          and
          <Link className="font-semibold" to="/reditect/13">
            {" "}
            Cookies Policy
          </Link>
        </div>
      </div>

      <div className="log-form px-14 py-3  mt-3 inline-flex justify-center">
        <p>Have an account?</p>
        <Link className="text-blue-500 font-bold pl-1" to="/">
          Login
        </Link>
      </div>
      <AppDownload />
      <Footer></Footer>
    </div>
  );
}
