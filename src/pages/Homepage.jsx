import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      {/* section1 */}
      <section class="bg-[url('../assets/homepg_img.png')] bg-cover bg-center w-screen h-screen flex flex-col justify-center">
        <div class="flex flex-col w-[40%] pl-5">
          <h1 class="text-6xl font-bold text-white">
            Welcome to{" "}
            <span class="text-black text-7xl font-playfair">ThreatLens</span>
          </h1>
          <h3 class="text-xl text-gray-200 mt-4 font-serif">
            In an increasingly digital world, the protection of our nation's
            Critical Information Infrastructure (CII) is more vital than ever.
            CyberWatch India is your trusted platform for real-time monitoring
            and analysis of cyber incidents that impact Indian cyberspace.
          </h3>
        </div>
        <div class="flex gap-4 pl-5 mt-4">
          <Link to="/signup">
            <button className="border border-richblack-700 bg-richblack-800 text-[12px] lg:text-[16px] px-2 py-1  lg:px-[12px] lg:py-[8px] bg-yellow-50 text-black font-semibold rounded-md hover:scale-95 transtion-all duration-200 ">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <button className="border border-richblack-700 bg-richblack-700 text-[12px] lg:text-[16px] px-2 py-1  lg:px-[12px] lg:py-[8px] text-richblack-5 font-semibold rounded-md hover:scale-95 transtion-all duration-200 ">
              Log In
            </button>
          </Link>
        </div>
      </section>

      {/* section2 */}
      <section>
        <p>What we do?</p>
        
      </section>
    </div>
  );
};

export default Homepage;
