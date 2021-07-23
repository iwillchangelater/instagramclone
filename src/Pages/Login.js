import React from "react";
import { Link } from "react-router-dom";
import AppDownload from "../components/AppDownload";
import ins from "../source/instagram.png";
import phoneImg from "../source/phoneImg.PNG";
import Footer from "../components/Footer";
export default function Login() {
  return (
    <div className=" w-screen">
      <div className=" flex flex-col lg:flex-row items-center justify-center gap-5  w-full ">
        <div className=" w-96 hidden lg:block">
          <img src={phoneImg} alt="smart phone version showcase" />
        </div>
        <div>
          <div className="mt-10 log-form flex-col mx-15">
            <img
              src={ins}
              alt="instagram logo"
              className=" px-12 py-6"
              height={100}
              width={300}
            />
            <form className="w-10/12">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Phone number, username or email"
                  className="w-full pl-3 py-2 bg-gray-50 border-2 border-gray-200 mb-2 "
                />
              </div>
              <div className="relative mb-2">
                <input
                  type="password"
                  placeholder="password"
                  className="w-full pl-3 py-2 bg-gray-50 border-2 border-gray-200 mb-2 "
                />
                <p className="absolute right-2 top-3 hidden">Show</p>
              </div>
              <button className="w-full bg-blue-400 text-white py-1 rounded-md mb-3">
                Log In
              </button>
            </form>

            <div className="w-10/12 text-center">
              <div className="relative items-center my-3 flex flex-col">
                <div className="border-solid w-full border-gray-400 border-t top-1/2 absolute z-0"></div>
                <p className="min-w-min text-center bg-white z-10 px-3 text-gray-400">
                  OR
                </p>
              </div>
              <Link
                className="block rounded-md w-max m-auto text-blue-800 font-semibold mb-2"
                to="#"
              >
                Log in with Facebook
              </Link>
              <Link
                className="font-light text-blue-800 text-sm block mb-3"
                to="/account/password/reset"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="log-form px-14 py-3  mt-3">
            Don't have an account?
            <Link className="text-blue-500 font-bold pl-1" to="/signup">
              Sign up
            </Link>
          </div>
          <AppDownload />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
