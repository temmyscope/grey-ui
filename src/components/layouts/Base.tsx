import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../commons/header";
import { SideBar } from "../commons/sidebar";

const Base: React.FC = ({ }) => {

  return(
    <div className="base">
      <Header />

     <div className="w-full flex justify-between">
      <SideBar />

      <div className="w-4/5 bg-gray-300 h-screen overflow-y-auto rounded-tl-larg">
       <Outlet />
      </div>
     </div>
    </div>
  );
}

export { Base }