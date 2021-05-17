let initState={foodCart:null, error:null}
const addFoodCart= (state = initState, action) => {
 
    switch (action.type) {
    case 'FOODCART_ADDED':
        return {...state, foodCart:action.payload, error:null}
    case 'ERROR_MESSAGE':
        return {...state, foodCart:null, error:action.payload}
   
    
    default:
    return state;
    }
    }
    export default addFoodCart;