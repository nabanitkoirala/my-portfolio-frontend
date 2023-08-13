import React, { useState } from "react";
import icon from "../assets/Sneat-logo.svg";
import fb from "../assets/facebook.svg";
import tw from "../assets/twitter.svg";
import gt from "../assets/git.svg";
import go from "../assets/google.svg";
import { Link } from "react-router-dom";
import ShowHidepass from "./ShowHidepass";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleSubmit = (e) => {
    console.log(e, "event");
    console.log(email, "email");
    console.log(passsword, "password");
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    if (email.match(regex) || email.length == 0) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    if (password.length > 5 || password.length == 0) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    setPassword(password);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center  ">
        <div className="w-full mx-auto sm:max-w-[450px] flex flex-col items-center justify-center bg-[#ffffff] px-[32px] py-[32px] ">
          <div className="flex  justify-center items-center gap-2">
            <img src={icon} alt="" className=" w-[22px] h-[32.4px] " />
            <h1 className="font-[700] tracking-[0.15px] text-[28px] text-[#32475c] leading-[24px] ">
              Sneat
            </h1>
          </div>
          <div className="w-full text-[#32475c] tracking-[0.15px] ">
            <h2 className="pt-8 font-[600] text-[24px] leading-[32px] tracking-[0.18px] text-left text-[#32475c] opacity-[87%] ">
              Welcome to Sneat! 👋🏻
            </h2>
            <p className="font-[400] text-[16px] leading-[24px]  pb-6 opacity-[60%] ">
              Please sign-in to your account and start the adventure
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={handleEmail}
                className="py-[12px] px-[17px] border-[#32475c]  border-[1px] border-opacity-[22%] rounded-[4px] placeholder:opacity-[38%] text-inherit outline-[#32475c]f  outline-slate-300 "
              />
              {emailError ? (
                <span style={{ color: "red" }}>Invalid Email</span>
              ) : (
                ""
              )}

              <ShowHidepass
                placeholder="Password"
                value={passsword}
                required
                onChange={handlePassword}
              />
              {passwordError ? (
                <span style={{ color: "red" }}>
                  Password must be greater than 5 characters
                </span>
              ) : (
                ""
              )}

              <div className="w-full flex justify-between items-center">
                <div className="flex items-center  pl-3 gap-3 ">
                  <input id="checkRememberMe" type="checkbox" className="" />
                  <label htmlFor="checkRememberMe" className="text-[14px] ">
                    Remember Me
                  </label>
                </div>
                <Link to={"/forgot-password"}>
                  <p className="text-[14px] ">Forgot Password</p>
                </Link>
              </div>

              <button
                type="submit"
                className="bg-[#696cff] w-full text-white p-2 flex-inline justify-center items-center rounded-[8px] active:scale-[95%] active:invert"
              >
                LOGIN
              </button>
            </form>
          </div>

          <p className="text-[#32475c] pt-[28px] pb-[20px] ">
            New on our platform? &nbsp;
            <span className="text-[#696cff] ">Create an account</span>
          </p>
          <div className="flex gap-2">
            <h1 className="w-[166px] border-[#32475c1f] border-t-[1px] mt-3"></h1>
            <p>or</p>
            <h1 className="w-[166px] border-[#32475c1f] border-t-[1px] mt-3"></h1>
          </div>
          <div className=" flex gap-[24px] pt-10 ">
            <a href="https://www.facebook.com" target="_blank">
              {" "}
              <img src={fb} alt="" />
            </a>
            <a href="https://www.twitter.com">
              {" "}
              <img src={tw} alt="" />
            </a>
            <a href="https://www.github.com">
              {" "}
              <img src={gt} alt="" />
            </a>
            <a href="https://www.google.com">
              {" "}
              <img src={go} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
