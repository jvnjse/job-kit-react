import React from "react";
import Nav from "../Nav/Nav";
import Search from "./Search";
import Jobs from "./Jobs";
import JobsFilter from "./JobsFilter";

function Home() {
  return (
    <div className=" flex flex-col">
      <Nav />
      <Search />
      <div className=" flex ">
        <JobsFilter />
        <Jobs />
      </div>
    </div>
  );
}

export default Home;
