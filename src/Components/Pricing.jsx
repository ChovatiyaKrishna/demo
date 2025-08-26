import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
const Pricing = () => {
  const Starter = ["1 Website", "SSL (HTTPS)", "SiteFast Domain"];
  const Basic = [
    "15 Website",
    "SSL (HTTPS)",
    "Custom Domain",
    "SiteFast Branding Removal",
  ];
  const Plus = [
    "50 Website",
    "SSL (HTTPS)",
    "Custom Domain",
    "SiteFast Branding Removal",
    "Google Analytics",
    "Email Integration",
  ];
  return (
    <section className="py-20">
      <div className="box-border px-4 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-black flex flex-col items-center justify-center">
          <h2 className="text-5xl font-semibold">
            Simple, Transparent Pricing
          </h2>
        </div>

        {/*Pricing Components */}
        <div className="flex flex-col md:flex-row md:justify-center items-center mt-20 relative">
          {/* Starter */}
          <div className="border border-gray-300 flex flex-col gap-7 items-center max-w-sm p-8 w-full lg:w-1/3">
            <h3 className="text-2xl font-semibold text-black">Starter</h3>
            <div className="flex items-end m-0 leading-6">
              <p className="text-6xl">$1</p>
              <p>/month</p>
            </div>
            <ul className="flex-1 flex flex-col justify-start items-start w-full leading-7 mt-6">
              {Starter.map((s) => (
                <li
                  key={s}
                  className="flex gap-2 items-center w-full font-semibold"
                >
                  <IoCheckmarkOutline className="text-blue-600" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="py-3 mt-10 inline-flex justify-center items-center w-full border border-blue-400 hover:bg-blue-600 hover:text-white transition-all">
              <a href="">Start now</a>
            </div>
          </div>

          {/* Basics (highlighted middle) */}
          <div className="border border-blue-500 flex flex-col gap-7 items-center max-w-sm p-10 w-full lg:w-1/3 scale-105 lg:scale-110 z-10 shadow-xl bg-white relative">
            <h3 className="text-2xl font-semibold text-black">Basics</h3>
            <div className="flex items-end m-0 leading-6">
              <p className="text-6xl">$29</p>
              <p>/month</p>
            </div>
            <ul className="flex-1 flex flex-col justify-start items-start w-full leading-7 mt-6">
              {Basic.map((s2) => (
                <li
                  key={s2}
                  className="flex gap-2 items-center w-full font-semibold"
                >
                  <IoCheckmarkOutline className="text-blue-600" />
                  {s2}
                </li>
              ))}
            </ul>
            <div className="py-3 mt-10 inline-flex justify-center items-center w-full bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all">
              <a href="">Start now</a>
            </div>
          </div>

          {/* Plus */}
          <div className="border border-gray-300 flex flex-col gap-2 items-center max-w-sm p-8 w-full lg:w-1/3">
            <h3 className="text-2xl font-semibold text-black">Plus</h3>
            <div className="flex items-end m-0 leading-6">
              <p className="text-6xl">$49</p>
              <p>/month</p>
            </div>
            <ul className="flex-1 flex flex-col justify-start items-start w-full leading-7 mt-6">
              {Plus.map((s3) => (
                <li
                  key={s3}
                  className="flex gap-2 items-center w-full font-semibold"
                >
                  <IoCheckmarkOutline className="text-blue-600" />
                  {s3}
                </li>
              ))}
            </ul>
            <div className="py-3 mt-1 inline-flex justify-center items-center w-full border border-blue-400 hover:bg-blue-600 hover:text-white transition-all">
              <a href="">Start now</a>
            </div>
          </div>
        </div>
      </div>
        
    </section>
    
  );
};

export default Pricing;
