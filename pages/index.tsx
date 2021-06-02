import React from "react";
import HeaderLinks from "../components/Header/HeaderLinks";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction";

export default function Index() {
  return <div>
    <Header
      rightLinks={<HeaderLinks/>}
      color="white"
    />
    <Introduction/>
  </div>
}

