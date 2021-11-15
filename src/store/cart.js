const initialState = {
  customer: {},
  items: [],
  prodID: undefined,
  data: {},
  contract: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT":
      return { ...initialState, customer: action.payload.userId };


    case "SET_CARD":
      return { ...state, data: action.payload.res.data };

    case "SET_CONTRACT":
      return { ...state, contract: action.payload.malumot };


    case "ADD_CUSTOMER":
      let customer = action.payload.data;
      return { ...state, customer };
    case "EDIT_PRODUCT":
      let prodID = action.payload;
      return { ...state, prodID };
    case "COMPLETE_EDIT_PRODUCT":
      return { ...state, prodID: undefined };
    case "ADD_PRODUCT":
      // tekshirib qushish kerak, duplikate larni oldini olish.
      // const items = state.items;
      let items = action.payload.newOrData;
      //product = { ...product, quantity: action.payload.itemCount };
      //   const newItem = action.payload.product;
      // items.push(product);


      return { items };

     
    case "DELETE_PRODUCT":
      // uchirish kk
      return { ...state, items };

    case "INCREASE_PRODUCT_BY_ONE":
      return 0;

    case "DECREASE_PRODUCT_BY_ONE":
      return 0;

    case "RESET":

      return { ...state, agent: null, items: [] };


    default:
      return state;
  }
};

export default cartReducer;
