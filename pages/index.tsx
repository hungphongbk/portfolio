import React from "react";
import Header from "../components/Header/Header";
import Welcome from "../components/Index/Welcome";
import Introduction from "../components/Index/Introduction";
import Showcase from "../components/Index/Showcase";

export default function Index() {
  return <div>
    <Header
      color="white"
    />
    <Welcome/>
    <Introduction/>
    <Showcase/>
  </div>
}

