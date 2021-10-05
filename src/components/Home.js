import React from "react";
import Qarzlar from "./Qarzlar";
import Tkun from "./Tkun";

const Home = () => {
  return (
    <div>
      <h1>Tug'ilgan Kunlar</h1>
      <Tkun />
      <h1>Bugun To'lov Qiladiganlar</h1>
      <Qarzlar />
    </div>
  );
};

export default Home;
