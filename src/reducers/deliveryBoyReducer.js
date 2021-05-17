import { DELETE_DELIVERYBOY, GET_DELIVERYBOY, GET_DELIVERYBOYS } from "../actions/type";

const initialState={
    deliveryBoys:[],
    deliveryBoy:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_DELIVERYBOYS:
            return{
                ...state,
                deliveryBoys:action.payload
            }
        case GET_DELIVERYBOY:
            return{
                ...state,
                deliveryBoy:action.payload
            }
          
        case DELETE_DELIVERYBOY:
            return{
                ...state,
                deliveryBoys:state.deliveryBoys.filter(
                    deliveryBoy=>deliveryBoy.deliveryBoyId!==action.payload
                )
            }
            default:
                return state;

    }
} 