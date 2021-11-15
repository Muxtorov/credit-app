import { Checkbox, List, ListItemText } from "@material-ui/core";
import React, { useState } from "react";

import CalculatorPrint from "./CalculatorPrint";

const Calculator = () => {
  const [quantityPapers, setQuantityPapers] = useState(2);
  const quantityPaper = [2, 4, 6, 8];

  return (
    <>
      <List
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {quantityPaper.map((item, index) => {
          return (
            <ListItemText key={index + 1} style={{ marginRight: "20px" }}>
              <Checkbox
                checked={quantityPapers === item}
                onChange={() => {
                  setQuantityPapers(item);
                }}
                inputProps={{
                  "aria-label": "blue checkbox",
                }}
                color="primary"
                size="medium"
              />
              <ListItemText
                style={{
                  marginLeft: "15px",
                  display: "inline-block",
                }}
              >
                {item}
              </ListItemText>
            </ListItemText>
          );
        })}
      </List>
      <div>
        <CalculatorPrint quanPapers={quantityPapers} />
      </div>
    </>
  );
};

export default Calculator;
