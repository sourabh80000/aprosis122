import "../../index.css";


import { useState } from "react";
import Solution from "./Solution";

import {useState } from "react";
const All_contant = () => {


  const [cards, setCards] = useState([
    { img: "./images/It_services/it_services.jpg",
      cname: "IT SERVICE",
      summary:"IT services encompass a wide range of technological solutions designed to support businesses and individuals in managing, optimizing, and securing their digital operations. These services include consulting, infrastructure management, software development, cloud computing, cybersecurity, and data management. IT services play a crucial role in streamlining business processes, improving operational efficiency, and safeguarding sensitive information. By leveraging modern technologies such as artificial intelligence, machine learning, and the Internet of Things (IoT), IT services empower organizations to innovate, adapt, and remain competitive in a rapidly evolving digital landscape. From troubleshooting technical issues to enabling large-scale digital transformations, IT services are integral to achieving sustainable growth and resilience in today's technology-driven world.",
      id: 1,
      flipped: false 
    },

    { img: "./images/It_services/commmm.jpg",
      cname: "Comminucation",
      summary:"Communication services enable the seamless, efficient, and fast exchange of information between individuals and businesses. These services include email, messaging, voice and video calling, data sharing, and team collaboration tools. Modern communication leverages cloud platforms and Internet Protocol (IP) technologies to ensure global connectivity and real-time interaction. It not only enhances collaboration within teams and with customers but also streamlines remote work and business operations. By overcoming the barriers of time and location, communication services play a vital role in improving productivity and coordination.",
      id: 2,
      flipped: false
    },

    { img: "./images/It_services/security.jpg",
      cname: "Security System",
      summary:" security system is designed to protect individuals, properties, and information from potential threats such as theft, unauthorized access, or cyberattacks. It encompasses a range of solutions, including surveillance cameras, alarm systems, access control devices, fire detection systems, and cybersecurity tools. Modern security systems often integrate advanced technologies like artificial intelligence, biometrics, and IoT to enhance their efficiency and reliability. These systems can monitor, detect, and respond to security breaches in real-time, ensuring a safer environment. By offering both physical and digital protection, security systems are essential for maintaining safety and mitigating risks in residential, commercial, and industrial settings.",
      id: 3,
      flipped: false 
    },

    { img: "./images/It_services/networking.jpg",
      cname: "Networking",
      summary:" Networking refers to the process of connecting computers, devices, and systems to facilitate communication and the exchange of data. It forms the backbone of modern technology, enabling seamless interaction between users, applications, and services. Networks can be classified into different types, such as local area networks (LANs), wide area networks (WANs), and wireless networks, each serving specific purposes. Advanced networking technologies, including cloud computing, IoT, and 5G, have revolutionized how data is shared and accessed. By providing a robust infrastructure for connectivity, networking supports businesses, education, healthcare, and countless other industries, driving efficiency and fostering innovation in a digitally connected world.",
      id: 4, 
      flipped: false 
    },

    { img: "./images/It_services/it_connn.jpg",
      cname: "IT Consulting",
      summary:" IT consulting involves providing expert advice and guidance to organizations on how to leverage technology to achieve their business goals. IT consultants assess an organization’s current technological infrastructure, identify areas for improvement, and recommend solutions to optimize processes, enhance performance, and drive innovation. Their services may include strategic planning, system integration, software selection, cybersecurity, and IT project management. By offering tailored solutions, IT consultants help businesses make informed decisions about technology investments, ensuring they adopt the right tools and strategies to stay competitive and efficient in a constantly evolving digital landscape.",
      id: 5, 
      flipped: false 
    },

    { img: "./images/It_services/it_support.jpg",
      cname: "IT Support",
      summary:" IT support refers to the services provided to assist individuals and organizations in maintaining and troubleshooting their technology systems. It encompasses a wide range of activities, including helping users resolve hardware or software issues, managing system updates, and ensuring that networks and devices function smoothly. IT support can be provided through various channels, such as help desks, remote assistance, and on-site visits. The goal of IT support is to minimize downtime, enhance system performance, and ensure the security and reliability of technology infrastructure. Effective IT support is essential for businesses to operate efficiently and to address technical challenges promptly, keeping operations running smoothly..",
      id: 6, 
      flipped: false 
    },
  ]);

  const [flippedCard, setFlippedCard] = useState(null)
  const handleFlip = (id) => {
    if(flippedCard === id){
      setFlippedCard(null)
    }else{
      setFlippedCard(id);
    }
    
  }

  
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
    <div className="cards-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card-container ${flippedCard === card.id ? 'flipped' : ''}`}
          
        >
          <div className="card">
            <div className="card-front">
              <img className="h-96 w-full " src={card.img} alt="img" />
              <h1 className=" ml-8 text-3xl font-semibold my-4 underline underline-offset-4">{card.cname}</h1>
              <p className="px-4  text-2xl text-[#444343] w-[98%] text-justify leading-8
                 tracking-tight hover:text-black ease-in duration-1000 overflow-hidden h-[145px]">
                  {card.summary}
                  </p>              
              <div>
              <button onClick={() => handleFlip(card.id)} className=" text-white mx-4 px-4  py-2 rounded-3xl  bg-[#475764] shadow-lg shadow-cyan-500/50  hover:bg-white hover:text-[#068FFF] ease-linear duration-1000">see more</button>
              </div>
            </div>
            <div className="card-back" onClick={() => handleFlip(card.id)}>
            <p className="px-4  text-2xl text-black w-[98%] text-justify leading-8
                 tracking-tight  ease-in duration-1000 overflow-hidden ">
                  {card.summary}
                  </p> 
            </div>
          </div>
        </div>
      ))}
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
