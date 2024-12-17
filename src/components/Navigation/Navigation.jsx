import React, { useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import { routes } from "../../constant";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
