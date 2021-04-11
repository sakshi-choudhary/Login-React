import React, { useState, useRef, useEffect } from "react";

import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { TiTick } from "react-icons/ti";

import google from "../assets/google.png";

function Home() {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [val, setVal] = useState(true);
  const [pass, setPass] = useState("hjvhvhvjhvj");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [valid, setValid] = useState(true);
  const myCheckbox = useRef(null);
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setValid(true);
    } else {
      setValid(false);
    }
    setEmail(event.target.value);
  };
  useEffect(() => {
    myCheckbox.current.checked = "checked";
  }, []);

  const submitForm = () => {
    if (val && pass.length >= 8 && valid) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <div className="App mt-5">
        <div className="overflow-hidden">
          <div className="p-5 flex justify-center items-center my-2 md:-mx-4">
            <div className="flex flex-col justify-center">
              <div>
                <button className="focus:outline-none justify-left flex mb-5 rounded-full bg-blue-50 p-4">
                  <AiOutlineArrowLeft className="text-blue-600" />
                </button>
              </div>

              <h1 className="text-4xl mb-10 text-left font-bold text-gray-800 ">
                Create <br /> Account
              </h1>

              <label className="text-left font-bold">Your Email</label>

              <input
                className="md:w-96 w-64 mb-7 pl-3 bg-blue-50 border py-5  shadow-xs rounded-xl border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                type="email"
                value={email}
                onChange={validateEmail}
                placeholder="email"
              ></input>
              <button className="focus:outline-none text-blue-600 text-xl relative md:left-96 md:-ml-10 md:-top-20 left-36 ml-20 -top-20 mt-2">
                {valid ? <TiTick /> : ""}
              </button>
              {!valid && (
                <p className="text-red-500 -mt-8 mb-5">Invalid Email</p>
              )}
              <label className="text-left text-sm font-bold">Password</label>
              <input
                className={`${
                  pass.length < 8
                    ? "border-red-600 border-2"
                    : "focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                } md:w-96 w-64 mb-10 pl-3 bg-blue-50  focus:border-2 py-5  shadow-xs rounded-xl   focus:outline-none `}
                type={isRevealPwd ? "text" : "password"}
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              ></input>

              <button
                className={` focus:outline-none text-blue-600 text-xl relative md:left-96 md:-ml-10 md:-top-20 left-36 ml-20 -top-20`}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              >
                {isRevealPwd ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
              {pass.length < 8 && (
                <p className="text-red-500 -mt-10 mb-5">
                  Password should be min 8 letter
                </p>
              )}
              <div className="mr-2">
                <input
                  type="checkbox"
                  ref={myCheckbox}
                  class="border-blue-500 mr-2 border-2 checked:bg-blue-600 checked:border-transparent "
                  onChange={(e) => setVal(e.target.checked)}
                ></input>
                <span>
                  {" "}
                  <label className="text-left text-gray-500">
                    I agree to the{" "}
                    <span className="underline text-blue-700">
                      Terms&Conditions
                      <br />
                    </span>{" "}
                    and{" "}
                    <span className="underline text-blue-700">
                      Privacy Policy
                    </span>
                  </label>
                </span>
              </div>
              <div className="mt-3 sm:mt-8 sm:flex flex-col  justify-center">
                <button
                  onClick={submitForm}
                  disabled={!val}
                  className={`${
                    val && valid && pass.length >= 8
                      ? " hover:bg-blue-800"
                      : "opacity-40 hover:none"
                  }  shadow bg-blue-600 focus:outline-none text-sm md:text-lg md:w-96 w-64 flex items-center justify-center px-8 py-3 border border-transparent  font-medium rounded-xl text-white  md:py-4  md:px-10`}
                >
                  Create Account
                </button>

                <button className="focus:outline-none text-sm shadow mt-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:w-96 w-64 flex items-center text-blue-600 justify-center px-8 py-3 font-medium rounded-xl border-2 border-blue-600  md:py-4 md:text-lg md:px-10">
                  <span>
                    <img
                      alt="google"
                      src={google}
                      className="mx-2 w-4 md:w-7"
                    ></img>
                  </span>{" "}
                  Sign Up with Google
                </button>
              </div>

              <h3 className="text-left mt-5 text-gray-400">
                Already have an account? &nbsp;
                <span className="underline text-blue-700 font-bold">
                  Log In
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
