import React from "react";
import { Link } from "react-router-dom";
import Speedometer from "./speedometer";

const Homepage = () => {
  // Define your desired percentage values
  const percentage1 = 80;
  const percentage2 = 84.7;
  const percentage3 = 20;

  return (
    <div class="overflow-x-hidden">
      {/* section1 */}
      <section className="bg-[url('../assets/homepg_img.png')] bg-cover bg-center w-screen h-screen flex flex-col justify-center">
        <div className="flex flex-col w-[37%] pl-5">
          <h1 className="text-6xl font-bold text-white">
            Welcome to{" "}
            <span className="text-black text-7xl font-playfair">
              ThreatLens
            </span>
          </h1>
          <h3 className="text-xl text-gray-200 mt-4 font-serif">
            In an increasingly digital world, the protection of our nation's
            Critical Information Infrastructure (CII) is more vital than ever.
            CyberWatch India is your trusted platform for real-time monitoring
            and analysis of cyber incidents that impact Indian cyberspace.
          </h3>
        </div>
        <div className="flex gap-4 pl-5 mt-4">
          <Link to="/signup">
            <button className="border border-richblack-700 bg-richblack-800 text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px] bg-yellow-50 text-black font-semibold rounded-md hover:scale-95 transition-all duration-200">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <button className="border border-richblack-700 bg-richblack-700 text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px] text-richblack-5 font-semibold rounded-md hover:scale-95 transition-all duration-200">
              Log In
            </button>
          </Link>
        </div>
      </section>

      {/* section2 */}
      <section className="py-10 bg-blue-50">
  <p className="text-center text-2xl font-bold mb-10 text-blue-800">
    Need to know
  </p>
  <div className="flex justify-around gap-8">
    {/* Sub-Section 1 */}
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
      <Speedometer percentage={percentage1} />
      <p className="mt-4 text-center text-blue-700">
        80% of Indian companies hit by cybersecurity incidents after
        miscommunication with IT team, according to a Kaspersky report.
      </p>
    </div>
    {/* Sub-Section 2 */}
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
      <Speedometer percentage={percentage2} />
      <p className="mt-4 text-center text-blue-700">
        84.7% of surveyed organizations were affected by a successful
        cyberattack. (CyberEdge Group 2023 Cyberthreat Defense Report)
      </p>
    </div>
    {/* Sub-Section 3 */}
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
      <Speedometer percentage={percentage3} />
      <p className="mt-4 text-center text-blue-700">
        20% of Indian users fell victim to cyber threats in the first
        quarter of 2024, according to a study.
      </p>
    </div>
  </div>
</section>


    </div>
  );
};

export default Homepage;
