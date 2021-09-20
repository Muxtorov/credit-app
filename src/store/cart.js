const initialState = {
  customer: null,
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT":
      return { ...initialState, customer: action.payload.userId };

    case "ADD_CUSTOMER":
      let customer = action.payload.data;
      return { ...state, customer };
    case "ADD_PRODUCT":
      // tekshirib qushish kerak, duplikate larni oldini olish.
      const items = state.items;
      let product = action.payload.orData;
      //product = { ...product, quantity: action.payload.itemCount };
      //   const newItem = action.payload.product;
      items.push(product);

      return { ...state, items };
    case "DELETE_PRODUCT":
      // uchirish kk
      return { ...state, items };

    case "INCREASE_PRODUCT_BY_ONE":
      return 0;

    case "DECREASE_PRODUCT_BY_ONE":
      return 0;

    case "RESET":
      return {
        agent: null,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
