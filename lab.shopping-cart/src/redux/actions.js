export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


export const addProduct = ({name,price}) => {
   return{
    type: ADD_PRODUCT,
    payload:{
        name,
        price

    }
   }
}
export const removeProduct = (product) => {
    return{
    type : REMOVE_PRODUCT,
    payload: product
}
}

