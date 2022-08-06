import ActionTypes from "../constants/";

export const products = (state = [], { type, payload }) => {
   switch (type) {
      case ActionTypes.PRODUCTS_LOADED:
         return payload;
      default:
         return state;
   }
}

export const cart = (state = [], { type, payload }) => {
   switch (type) {
      case ActionTypes.ITEM_ADDED_TO_CART:
         return [...state, payload];
      case ActionTypes.CART_LOADED:
         return state = payload;
      case ActionTypes.ITEM_QUANTITY_INCREASED:
         return [...state, payload];
      case ActionTypes.ITEM_QUANTITY_DECREASED:
         return [...state, payload];
      default:
         return state;
   }
}

export const isloggedIn = (state = false, { type, payload }) => {
   switch (type) {
      case ActionTypes.LOGGED_IN:
         return payload;
      case ActionTypes.LOGGED_OUT:
         return payload;
      default:
         return state;
   }
}

export const userDet = (state = {}, { type, payload }) => {
   switch (type) {
      case ActionTypes.USER_DETAILS:
         return payload;
      default:
         return state;
   }
}

// export const projects = (state = initialStateArray, { type, payload }) => {
//    switch (type) {
//       case ActionTypes.FETCHED_ALL_PROJECT:
//          return payload;

//       default:
//          return state;
//    }
// }