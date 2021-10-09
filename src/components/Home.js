import axios from "axios";
import React, { useEffect, useState } from "react";
import apiUrl from "../config/httpConnect";
import Qarzlar from "./Qarzlar";
import Tkun from "./Tkun";

const Home = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const hozzi = new Date();
  console.log("adsadsads", hozzi);
  let oy = hozzi.getMonth() + 1;
  if (oy <= 9) {
    oy = "0" + oy;
  }
  let kun = hozzi.getDate();
  let yil = hozzi.getFullYear();
  const sana = kun + "." + oy + "." + yil;

  useEffect(() => {
    axios.get(apiUrl.url + `/customers/${sana}`).then((response) => {
      setData1(response.data);
    });
  }, [sana, setData1]);

  useEffect(() => {
    axios
      .get(apiUrl.url + `/outgoingorders/debtors/${sana}`)
      .then((response) => {
        setData2(response.data);
      });
  }, [sana, setData2]);

  return (
    <div>
      <Tkun data={data1} />
      <Qarzlar data={data2} />
    </div>
  );
};

export default Home;
