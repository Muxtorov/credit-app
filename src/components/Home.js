import axios from "axios";
import React, { useEffect, useState } from "react";
import apiUrl from "../config/httpConnect";
import Qarzlar from "./Qarzlar";
import Tkun from "./Tkun";
import logo from "../Logo.jpg";

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

  if (data1.length > 0 || data2.length > 0) {
    return (
      <div>
        <Tkun data={data1} />
        <Qarzlar data={data2} />
      </div>
    );
  } else {
    return <img alt="b10 Savdo Uyi" style={{ marginLeft: "10%" }} src={logo} />;
  }
};

export default Home;
