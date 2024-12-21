import "../../index.css";

import { useState } from "react";
import Solution from "./Solution";
const All_contant = () => {
  
  const content = [
    {
      img: "./images/It_services/it_services.jpg",
      cname: "IT SERVICE",
      summary:
        "IT services encompass a wide range of technological solutions designed to support businesses and individuals in managing, optimizing, and securing their digital operations. These services include consulting, infrastructure management ....",
      btn: "SEE MORE",
    },
    {
      img: "./images/It_services/commmm.jpg",
      cname: "Comminucation",
      summary:
        "Communication services enable the seamless, efficient, and fast exchange of information between individuals and businesses. These services include email, messaging, voice and video calling, data sharing, and team collaboration tools. Modern communication leverages cloud platforms...",
      btn: "SEE MORE",
    },
    {
      img: "./images/It_services/security.jpg",
      cname: "Security System",
      summary:
        " security system is designed to protect individuals, properties, and information from potential threats such as theft, unauthorized access, or cyberattacks. It encompasses a range of solutions, including surveillance cameras, alarm systems, access control devices....",
      btn: "SEE MORE",
    },
    {
      img: "./images/It_services/networking.jpg",
      cname: "Networking",
      summary:
        " Networking refers to the process of connecting computers, devices, and systems to facilitate communication and the exchange of data. It forms the backbone of modern technology, enabling seamless interaction between users, applications, and services....",
      btn: "SEE MORE",
    },
    {
      img: "./images/It_services/it_connn.jpg",
      cname: "IT Consulting",
      summary:
        " IT consulting involves providing expert advice and guidance to organizations on how to leverage technology to achieve their business goals. IT consultants assess an organization’s current technological infrastructure, identify areas for improvement....",
      btn: "SEE MORE",
    },
    {
      img: "./images/It_services/it_support.jpg",
      cname: "IT Support",
      summary:
        " IT support refers to the services provided to assist individuals and organizations in maintaining and troubleshooting their technology systems. It encompasses a wide range of activities, including helping users resolve hardware or software issues, managing system....",
      btn: "SEE MORE",
    },
  ];

  return (
    <>
      <div id="cursor_none" className=" flex flex-wrap  justify-evenly ">
        {content.map((item, index) => {
          return (
            <>
              <div
                id="box_shadow"
                className=" rounded-3xl w-[26%]  overflow-hidden my-20 bg-[#e8e8e8] "
              >
                <img src={item.img} alt="" className="h-96 w-full " />
                <h1 className=" ml-8 text-3xl font-semibold my-4 underline underline-offset-4">
                  {item.cname}
                </h1>
                <p
                  className="px-4  text-2xl text-[#444343] w-[98%] text-justify leading-8
                 tracking-tight hover:text-black ease-in duration-1000 overflow-hidden  h-[144px]"
                >
                  {item.summary}
                </p>
                <div className="bg-black h-20 text-center pt-3">
                  <button className=" text-black px-4  py-2 rounded-3xl  bg-[#b7b7b7] shadow-lg shadow-blue-500/50  hover:bg-white hover:text-[#068FFF] ease-linear duration-500">
                    {item.btn}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div  className=" mt-9 ">
        <marquee behavior="" direction="">
          <div id="scroll-container" className="flex">
            <img src="./images/marquee_img/AWS.webp" alt="" />
            <img src="./images/marquee_img/Circle.webp" alt="" />
            <img src="./images/marquee_img/CMMI.webp" alt="" />
            <img src="./images/marquee_img/cspo.webp" alt="" />
            <img src="./images/marquee_img/di.webp" alt="" />
            <img src="./images/marquee_img/hubspot.webp" alt="" />
            <img src="./images/marquee_img/iso.webp" alt="" />
            <img src="./images/marquee_img/ISTOB.webp" alt="" />
            <img src="./images/marquee_img/MBE-logo.webp" alt="" />
            <img src="./images/marquee_img/Microsoft-2.webp" alt="" />
            <img src="./images/marquee_img/nmsdc.webp" alt="" />
            <img src="./images/marquee_img/pmi.webp" alt="" />
            <img src="./images/marquee_img/Salesforce(1).webp" alt="" />
            <img src="./images/marquee_img/Salesforce.webp" alt="" />
            <img src="./images/marquee_img/Scrum.webp" alt="" />
            <img src="./images/marquee_img/Shield.webp" alt="" />
            <img src="./images/marquee_img/Soc2.webp" alt="" />
            <img src="./images/marquee_img/wrmsdc.webp" alt="" />
          </div>{" "}
        </marquee>
      </div>
      <Solution />
    </>
  );
};

export default All_contant;
