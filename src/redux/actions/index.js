import ActionTypes from "../constants";

const productLoaded = (products) => {
   return {
      type: ActionTypes.PRODUCTS_LOADED,
      payload: products
   }
}

const cartLoaded = (products) => {
   return {
      type: ActionTypes.CART_LOADED,
      payload: products
   }
}

const itemAdded = (product) => {
   return {
      type: ActionTypes.ITEM_ADDED_TO_CART,
      payload: product
   }
}

const itemQuanInc = (cart) => {
   return {
      type: ActionTypes.ITEM_QUANTITY_INCREASED,
      payload: cart
   }
}

const itemQuanDec = (cart) => {
   return {
      type: ActionTypes.ITEM_QUANTITY_DECREASED,
      payload: cart
   }
}

const loggedin = () => {
   return {
      type: ActionTypes.LOGGED_IN,
      payload: true,
   }
}

const loggedOut = () => {
   return {
      type: ActionTypes.LOGGED_OUT,
      payload: false
   }
}

const userDet = (details) => {
   return {
      type: ActionTypes.USER_DETAILS,
      payload: details
   }
}

const Actions = {
   productLoaded,
   userDet,
   loggedOut,
   loggedin,
   itemAdded,
   itemQuanInc,
   itemQuanDec,
   cartLoaded
}

export default Actions