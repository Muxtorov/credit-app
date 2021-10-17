export const setProdId = (payload) => {
  return {
    type: 'EDIT_PRODUCT',
    payload,
  };
};
export const clearProdId = () => {
  return { type: 'COMPLETE_EDIT_PRODUCT' };
};
