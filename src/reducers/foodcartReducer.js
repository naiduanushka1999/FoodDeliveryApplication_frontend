import { DELETE_FOODCART, GET_FOODCART, GET_FOODCARTS } from "../actions/type";

const initialState={
    foodcarts:[],
    foodcart:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_FOODCARTS:
            return{
                ...state,
                foodcarts:action.payload
            }
        case GET_FOODCART:
            return{
                ...state,
                foodcart:action.payload
            }
          
        case DELETE_FOODCART:
            return{
                ...state,
                foodcarts:state.foodcarts.filter(
                    foodcart=>foodcart.foodCartId!==action.payload
                )
            }
            default:
                return state;

    }
} 