import React from "react";
import { CgDetailsMore } from "react-icons/cg";
const Solution = () => {
  return (
    <div className=" flex   ">
      <div className=" absolute w-[100%] mt-5 ">
        <img
          src="./images/It_services/solution_img2.avif"
          alt=""
          className=" rounded-3xl h-[32vh]  absolute top-72 left-[20%] -z-10 "
        />
        <img
          src="./images/It_services/solution_img1.avif"
          alt=""
          className=" rounded-3xl h-[32vh] ml-[7%] mt-20  "
        />
        <div className=" absolute top-24 left-[500px] text-[20px] ">
          <h3 className=" text-yellow-500 text-[45px] font-semibold ">40+</h3>
          <p className=" font-bold">Services</p>
        </div>
      </div>
      <div className=" absolute right-[10%]  h-[60vh] w-[40%]">
        <h1 className=" pt-40  text-center font-semibold text-[35px] ">
          Exclusive Technology to Provide IT Solutions
        </h1>
        <p className=" text-[15px] text-gray-500 font-semibold ml-20 mb-10">
          Advising clients on technalagy strategy, digical transformation and IT
          infrastructure planning to help them occhiove their business goals
        </p>

        <div>
    
          <h1 className=" pt-5 flex  font-semibold text-[20px]">
          <CgDetailsMore  className=" mt-3 text-yellow-500 mr-4" />Analytical research for problem findings
          </h1>
          
          <p className=" text-[15px] text-gray-500 font-semibold ml-10 mb-5">
            All conduct analytical search to lounatty ont understand problemas
            ced approach the proсиве непоically
          </p>
          <h1 className="pt-5 flex  font-semibold text-[20px]">
            <CgDetailsMore  className="mt-3 text-yellow-500 mr-4"/>Ensure Quality services
            </h1>
          <p className=" text-[15px] text-gray-500 font-semibold ml-10 mb-5">
            We neve a team of sullied professionels with expertise in ther
            respective fele and prontiers the unique noods of our chant
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
