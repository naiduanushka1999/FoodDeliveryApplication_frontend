const deleteFoodCart = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_DELETED_FOODCART':
        console.log(action.payload)
    return action.payload;
    
    case 'ERROR_MESSAGE':
        return {...state};
    
    default:
    return state;
    }
    }
    export default deleteFoodCart;
   