export const setProdId = (payload) => {
  return {
    type: "EDIT_PRODUCT",
    payload,
  };
};

export const addData = (payload) => {
  return {
    type: "SET_CARD",
    payload,
  };
};

export const addContract = (payload) => {
  return {
    type: "SET_CONTRACT",
    payload,
  };
};

export const clearProdId = () => {
  return { type: "COMPLETE_EDIT_PRODUCT" };
};
