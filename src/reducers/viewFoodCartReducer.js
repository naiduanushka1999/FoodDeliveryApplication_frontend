const viewFoodCart = (state = [], action) => {
 
    switch (action.type) {
    case 'VIEW_FOODCART':
         return action.payload
    case 'ERROR_MESSAGE':
        return {...state};

    default:
    return state;
    }
    }
    export default viewFoodCart;
   