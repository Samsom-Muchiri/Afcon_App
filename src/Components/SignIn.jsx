import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  return (
    <div className="h-screen w-full font-poppins">
        <div className="flex justify-between">
            <Section className="w-[61%] hidden h-screen text-white lg:flex pl-16">
              <div className="  w-[35rem] ">
                <h1 className=" text-4xl mt-20 mb-20"><span className="font-extrabold">FIFA</span> ID</h1>
                <h1 className="font-medium text-[4rem]">Football at your fingertips.</h1>
                <p className="text-2xl font-medium">Sign up to access tickets, play games and stay up to date on FIFA AFCON 24™ qualification!</p>
              </div>
            </Section>
            <section className="flex-1 flex justify-center">
                <form className=" w-[73%] mt-20">
                    <h1 className="font-medium text-4xl mt-5">Sign In</h1>
                    <div className="mt-10">
                      <label className='font-medium text-[1.1rem]'>Email</label>
                      <input className='bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none' placeholder="Enter email"></input>
                    </div>
                    <div className="mt-10">
                      <label className='font-medium text-[1.1rem]'>Password</label>
                      <input className='bg-[#e8f0fe] h-[3rem] w-full border-b-[1px] border-gray-400 pl-3 outline-none' placeholder="Enter password"></input>
                    </div>
                  <button type='submit' className="mt-8 mb-5 bg-blue-500 hover:bg-blue-600 py-3 px-7 rounded-3xl text-white text-sm uppercase">Sign In</button>
                  <p className="mb-10 text-blue-600 text-lg">Forgotten your password?</p>

                  <p className="mb-4">Don&apos;t have an account?</p>
                  <button type='button' className="border-[1px] border-black rounded-3xl py-3 px-7 uppercase text-sm"><NavLink to='/signup'>Sign Up</NavLink></button>
                </form>
                
            </section>
        </div>
    </div>
  )
}

const Section=styled.section`
        background: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
        url('https://store.fifa.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fei8z56ft9sxn%2F3wa57BpfnVpNqwaRLnkaRF%2Fac294a0e6f715fb77768a43261814551%2FESP_NEW.png&w=640&q=75');
        background-size:100% 100%;
        // background-color:red;
        background-repeat:no-repeat;
        background-position: center center;
        background-attachment:scroll;
`;

export default SignIn