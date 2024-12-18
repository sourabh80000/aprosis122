import React from "react";

const All_contant = () => {
  const content = [
    {
      img: "./images/It_services/it_services.jpg",
      cname: "IT SERVICE",
      summary:
        "IT services encompass a wide range of technological solutions designed to support businesses and individuals in managing, optimizing, and securing their digital operations. These services include consulting, infrastructure management, software development, cloud computing, cybersecurity, and data management. IT services play a crucial role in streamlining business processes, improving operational efficiency, and safeguarding sensitive information. By leveraging modern technologies such as artificial intelligence, machine learning, and the Internet of Things (IoT), IT services empower organizations to innovate, adapt, and remain competitive in a rapidly evolving digital landscape. From troubleshooting technical issues to enabling large-scale digital transformations, IT services are integral to achieving sustainable growth and resilience in today's technology-driven world.",
    },
    {
      img: "./images/It_services/commmm.jpg",
      cname: "Comminucation",
      summary:
        "Communication services enable the seamless, efficient, and fast exchange of information between individuals and businesses. These services include email, messaging, voice and video calling, data sharing, and team collaboration tools. Modern communication leverages cloud platforms and Internet Protocol (IP) technologies to ensure global connectivity and real-time interaction. It not only enhances collaboration within teams and with customers but also streamlines remote work and business operations. By overcoming the barriers of time and location, communication services play a vital role in improving productivity and coordination.",
    },
    {
      img: "./images/It_services/security.jpg",
      cname: "Security System",
      summary:
        " security system is designed to protect individuals, properties, and information from potential threats such as theft, unauthorized access, or cyberattacks. It encompasses a range of solutions, including surveillance cameras, alarm systems, access control devices, fire detection systems, and cybersecurity tools. Modern security systems often integrate advanced technologies like artificial intelligence, biometrics, and IoT to enhance their efficiency and reliability. These systems can monitor, detect, and respond to security breaches in real-time, ensuring a safer environment. By offering both physical and digital protection, security systems are essential for maintaining safety and mitigating risks in residential, commercial, and industrial settings.",
    },
    {
      img: "./images/It_services/networking.jpg",
      cname: "Networking",
      summary:
        " Networking refers to the process of connecting computers, devices, and systems to facilitate communication and the exchange of data. It forms the backbone of modern technology, enabling seamless interaction between users, applications, and services. Networks can be classified into different types, such as local area networks (LANs), wide area networks (WANs), and wireless networks, each serving specific purposes. Advanced networking technologies, including cloud computing, IoT, and 5G, have revolutionized how data is shared and accessed. By providing a robust infrastructure for connectivity, networking supports businesses, education, healthcare, and countless other industries, driving efficiency and fostering innovation in a digitally connected world.",
    },
    {
      img: "./images/It_services/it_connn.jpg",
      cname: "IT Consulting",
      summary:
        " IT consulting involves providing expert advice and guidance to organizations on how to leverage technology to achieve their business goals. IT consultants assess an organization’s current technological infrastructure, identify areas for improvement, and recommend solutions to optimize processes, enhance performance, and drive innovation. Their services may include strategic planning, system integration, software selection, cybersecurity, and IT project management. By offering tailored solutions, IT consultants help businesses make informed decisions about technology investments, ensuring they adopt the right tools and strategies to stay competitive and efficient in a constantly evolving digital landscape.",
    },
    {
      img: "./images/It_services/it_support.jpg",
      cname: "IT Support",
      summary:
        " IT support refers to the services provided to assist individuals and organizations in maintaining and troubleshooting their technology systems. It encompasses a wide range of activities, including helping users resolve hardware or software issues, managing system updates, and ensuring that networks and devices function smoothly. IT support can be provided through various channels, such as help desks, remote assistance, and on-site visits. The goal of IT support is to minimize downtime, enhance system performance, and ensure the security and reliability of technology infrastructure. Effective IT support is essential for businesses to operate efficiently and to address technical challenges promptly, keeping operations running smoothly..",
    },
  ];
  return (
    <>
      {content.map((item, index) => {
        console.log(index);
        if (index % 2 === 0) {
          return (
            <>
              <div className="flex">
                <img src={item.img} alt="rhjk" className="h-96" />
                <h1>{item.cname}</h1>
                <p>{item.summary}</p>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="flex">
                {" "}
                <h1>{item.cname}</h1>
                <p>{item.summary}</p>
                <img src={item.img} alt="rhjk" className="h-96" />
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default All_contant;
