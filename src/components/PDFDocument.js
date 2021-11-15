import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./Document";
import { useSelector } from "react-redux";
import YukXati from "./YukXati";

const PDFDocument = () => {
  const contract = useSelector((state) => state.cart.contract);
  const data = useSelector((state) => state.cart.data);
  const shaxs = useSelector((state) => state.cart.customer);

  console.log(contract);
  return (
    <div>
      <PDFViewer
        style={{ width: "90%", height: "670px", marginBottom: "10px" }}
      >
        <MyDocument contract={contract} data={data} shaxs={shaxs} />
      </PDFViewer>
    </div>
  );
};

export default PDFDocument;
