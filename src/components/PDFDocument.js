import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./Document";
import { useSelector } from "react-redux";

const PDFDocument = () => {
  const contract = useSelector((state) => state.cart.contract);
  const data = useSelector((state) => state.cart.data);
  const shaxs = useSelector((state) => state.cart.customer);

  console.log(contract);
  return (
    <PDFViewer style={{ width: "90%", height: "670px" }}>
      <MyDocument contract={contract} data={data} shaxs={shaxs} />
    </PDFViewer>
  );
};

export default PDFDocument;
