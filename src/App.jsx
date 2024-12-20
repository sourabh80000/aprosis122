import React from "react";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Application from "./components/Hero/itservice/Application";
import Cloud from "./components/Hero/itservice/Cloud";
import Compliance from "./components/Hero/itservice/Compliance";
import Infrastructure from "./components/Hero/itservice/Infrastructure";
import Network from "./components/Hero/itservice/Network";
import Security from "./components/Hero/itservice/Security";
import Threat from "./components/Hero/itservice/Threat";
import User_Activity from "./components/Hero/itservice/User_Activity";
import Video_s from "./components/Hero/itservice/Video_s";
import Vulnerability from "./components/Hero/itservice/Vulnerability";
import Video from "./components/Home/Video";
import Broadcasting from "./components/Hero/communication_system/Broadcasting";
import Data from "./components/Hero/communication_system/Data";
import Internet from "./components/Hero/communication_system/Internet";
import Networking_device from "./components/Hero/communication_system/Networking_device";
import Telecommnication from "./components/Hero/communication_system/Telecommnication";
import Wireless from "./components/Hero/communication_system/Wireless";
import Asset from "./components/Hero/it_support/Asset";
import Backup from "./components/Hero/it_support/Backup";
import Help_desk from "./components/Hero/it_support/Help_desk";
import Incident_problem_mana from "./components/Hero/it_support/Incident_problem_mana";
import Perfomance_opti from "./components/Hero/it_support/Perfomance_opti";
import Regular from "./components/Hero/it_support/Regular";
import Remote from "./components/Hero/it_support/Remote";
import Sec_mana from "./components/Hero/it_support/Sec_mana";
import Smt from "./components/Hero/it_support/Smt";
import Software_application from "./components/Hero/it_support/Software_application";
import Bussiness from "./components/Hero/it_consulting/Bussiness";
import Change_man from "./components/Hero/it_consulting/Change_man";
import Cloud_stragetty from "./components/Hero/it_consulting/Cloud_stragetty";
import Cost_optim from "./components/Hero/it_consulting/Cost_optim";
import Digital_trans from "./components/Hero/it_consulting/Digital_trans";
import It_infra_assesment from "./components/Hero/it_consulting/It_infra_assesment";
import Perfomence from "./components/Hero/it_consulting/Perfomence";
import Risk_man from "./components/Hero/it_consulting/Risk_man";
import Technology_roadmap from "./components/Hero/it_consulting/Technology_roadmap";
import Vendor from "./components/Hero/it_consulting/Vendor";
import Assesment_opt from "./components/Hero/networking/Assesment_opt";
import Cloud_infra_service from "./components/Hero/networking/Cloud_infra_service";
import Data_center_solution from "./components/Hero/networking/Data_center_solution";
import Disaster from "./components/Hero/networking/Disaster";
import Network_sec_solution from "./components/Hero/networking/Network_sec_solution";
import Nmm from "./components/Hero/networking/Nmm";
import Server_management from "./components/Hero/networking/Server_management";
import Unifiead from "./components/Hero/networking/Unifiead";
import Acess_control from "./components/Hero/security_system/Acess_control";
import Burglar_alarm from "./components/Hero/security_system/Burglar_alarm";
import Cyber_sec from "./components/Hero/security_system/Cyber_sec";
import Emergency from "./components/Hero/security_system/Emergency";
import Environmental from "./components/Hero/security_system/Environmental";
import Fire_alarm from "./components/Hero/security_system/Fire_alarm";
import Sensor_sec from "./components/Hero/security_system/Sensor_sec";
import Sur_monitaring from "./components/Hero/security_system/Sur_monitaring";
import Sur_sysytem from "./components/Hero/security_system/Sur_sysytem";
import Vehicle from "./components/Hero/security_system/Vehicle";
import Cost_opt from "./components/Hero/it_support/Cost_opt";
import Proactive_main from "./components/Hero/it_support/Proactive_main";
import Training_knowledge from "./components/Hero/it_support/Training_knowledge";
import Vender_third_p from "./components/Hero/it_support/Vender_third_p";
import Scalability from "./components/Hero/it_support/Scalability";
import Document_report from "./components/Hero/it_support/Document_report";
import LoT from "./components/Hero/networking/loT";
import Load_balancing from "./components/Hero/networking/Load_balancing";
import Wi_fi from "./components/Hero/networking/Wi_fi";
import Virtualization from "./components/Hero/networking/Virtualization";
import Scalability_per from "./components/Hero/networking/Scalability_per";


const App = () => {
  const router =  createBrowserRouter([
    {path:"", element:<Layout />,children:[
      {path:"/", element:<Video />},
      {path:"application", element:<Application />},
      {path:"cloud", element:<Cloud />},
      {path:"compliance", element:<Compliance />},
      {path:"infrastorcture", element:<Infrastructure />},
      {path:"network", element:<Network />},
      {path:"security", element:<Security />},
      {path:"threat", element:<Threat />},
      {path:"user_Activity", element:<User_Activity />},
      {path:"video_s", element:<Video_s />},
      {path:"vulnerability", element:<Vulnerability />},
      {path:"loT", element:<LoT/>},
      {path:"load_balancing", element:<Load_balancing/>},
      {path:"wi_fi", element:<Wi_fi/>},
      {path:"compliance", element:<Compliance/>},
      {path:"virtualization", element:<Virtualization/>},
      {path:"scalability_per", element:<Scalability_per/>},


      {path:"broadcasting", element:<Broadcasting />},
      {path:"data", element:<Data />},
      {path:"internet", element:<Internet />},
      {path:"networking_device", element:<Networking_device />},
      {path:"telecommnication", element:<Telecommnication />},
      {path:"wireless", element:<Wireless />},


      {path:"asset", element:<Asset />},
      {path:"backup", element:<Backup />},
      {path:"help_desk", element:<Help_desk />},
      {path:"incident_problem_mana", element:<Incident_problem_mana />},
      {path:"perfomance_opti", element:<Perfomance_opti />},
      {path:"regular", element:<Regular />},
      {path:"remote", element:<Remote />},
      {path:"sec_mana", element:<Sec_mana/>},
      {path:"smt", element:<Smt />},
      {path:"software_application", element:<Software_application />},
      
      {path:"cost_opt", element:<Cost_opt/>},
      {path:"proactive_main", element:<Proactive_main/>},
      {path:"training_knowledge", element:<Training_knowledge/>},
      {path:"vender_third_p", element:<Vender_third_p/>},
      {path:"scalability", element:<Scalability/>},
      {path:"document_report", element:<Document_report/>},


      {path:"bussiness", element:<Bussiness />},
      {path:"change_man", element:<Change_man />},
      {path:"cloud_stragetty", element:<Cloud_stragetty/>},
      {path:"cost_optim", element:<Cost_optim/>},
      {path:"digital_trans", element:<Digital_trans />},
      {path:"it_infra_assesment", element:<It_infra_assesment/>},
      {path:"perfomence", element:<Perfomence />},
      {path:"risk_man", element:<Risk_man/>},
      {path:"technology_roadmap", element:<Technology_roadmap/>},
      {path:"vendor", element:<Vendor/>},


      {path:"assesment_opt", element:<Assesment_opt/>},
      {path:"cloud_infra_service", element:<Cloud_infra_service/>},
      {path:"data_center_solution", element:<Data_center_solution/>},
      {path:"disaster", element:<Disaster />},
      {path:"network_design", element:<Networking_device/>},
      {path:"network_sec_solution", element:<Network_sec_solution/>},
      {path:"nmm", element:<Nmm/>},
      {path:"server_management", element:<Server_management/>},
      {path:"unifiead", element:<Unifiead/>},


      {path:"acess_control", element:<Acess_control/>},
      {path:"burglar_alarm", element:<Burglar_alarm/>},
      {path:"cyber_sec", element:<Cyber_sec/>},
      {path:"emergency", element:<Emergency/>},
      {path:"environmental", element:<Environmental />},
      {path:"fire_alarm", element:<Fire_alarm/>},
      {path:"sensor_sec", element:<Sensor_sec/>},
      {path:"sur_monitaring", element:<Sur_monitaring/>},
      {path:"sur_sysytem", element:<Sur_sysytem/>},
      {path:"vehicle", element:<Vehicle/>},
    ]}
  ])
  
  return (

  <RouterProvider router={router} />

  
  );
};

export default App;
