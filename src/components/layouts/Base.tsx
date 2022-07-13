import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../commons/header";
import { SideBar } from "../commons/sidebar";

const Base: React.FC = ({ }) => {

  return(
    <div className="base">
      <Header />

      <SideBar />

      <Outlet />
    </div>
  );
}

export { Base }