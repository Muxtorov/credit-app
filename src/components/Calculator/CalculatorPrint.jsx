import { Checkbox, List, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import { useLocation } from "react-router";

const CalculatorPrint = () => {
  const location = useLocation();
  const [priceQuantity, setPriceQuantity] = useState(2);

  const data = location.state.item;
  console.log(data);
  const pricePaper = [2, 4, 6, 8];
  return (
    <div>
      <List
        style={{ display: "flex", flexDirection: "row", textAlign: "center" }}
      >
        {pricePaper.map((item, index) => {
          return (
            <ListItemText key={index + 1} style={{ marginRight: "20px" }}>
              <Checkbox
                checked={priceQuantity === item}
                onChange={() => {
                  setPriceQuantity(item);
                  console.log(priceQuantity);
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
    </div>
  );
};

export default CalculatorPrint;
