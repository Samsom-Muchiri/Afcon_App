import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";

const SignUp = () => {
  // State variables to store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const backHome = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create an object to store user data
    const userData = {
      name,
      email,
      password,
    };

    // Save user data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    backHome("/");
    alert("Account created successfully");
  }

  return (
    <div className="h-screen w-full font-poppins">
      <div className="flex justify-between">
        <Section className="w-[61%] h-screen text-white flex pl-16">
          <div className="  w-[35rem] ">
            <h1 className=" text-4xl mt-20 mb-20">
              <span className="font-extrabold">FIFA</span> ID
            </h1>
            <h1 className="font-medium text-[4rem]">
              Football at your fingertips.
            </h1>
            <p className="text-2xl font-medium">
              Sign in to access tickets, play games and stay up to date on FIFA
              AFCON 24™ qualification!
            </p>
          </div>
        </Section>
        <section className="flex-1 flex justify-center">
          <form className=" w-[73%] mt-0" onSubmit={handleSubmit}>
            <h1 className="font-medium text-4xl mt-5">Sign Up</h1>
            <div className="mt-8">
              <label className="font-medium text-[1.1rem]">Name</label>
              <input
                className="bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
                required
              />
            </div>
            <div className="mt-8">
              <label className="font-medium text-[1.1rem]">Email</label>
              <input
                className="bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>
            <div className="mt-8">
              <label className="font-medium text-[1.1rem]">Password</label>
              <input
                className="bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required
              />
            </div>
            <div className="mt-10">
              <label className="font-medium text-[1.1rem]">
                Confirm Password
              </label>
              <input
                className="bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none"
                placeholder="Confirm password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
                required
              />
            </div>
            <button
              type="submit"
              className="mt-8 mb-5 bg-blue-500 hover:bg-blue-600 py-3 px-7 rounded-3xl text-white text-sm uppercase"
            >
              Sign Up
            </button>
            <p className="mb-4">Already have an account?</p>
            <button
              type="button"
              className="border-[1px] border-black rounded-3xl py-3 px-7 uppercase text-sm"
            >
              <NavLink to="/signin">Sign In</NavLink>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

const Section = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url("https://digitalhub.fifa.com/transform/a04d1886-047f-4fb9-a620-57c43af283a4/1444254771?io=transform:fill,height:868,width:1023&quality=75");
  background-size: 100% 100%;
  // background-color:red;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
`;

export default SignUp;
