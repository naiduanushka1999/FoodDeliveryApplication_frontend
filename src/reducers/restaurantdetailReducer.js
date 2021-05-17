import { DELETE_RESTAURANTDETAIL, GET_RESTAURANTDETAIL, GET_RESTAURANTDETAILS } from "../actions/type";

const initialState={
    restaurantdetails:[],
    restaurantdetail:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_RESTAURANTDETAILS:
            return{
                ...state,
                restaurantdetails:action.payload
            }
        case GET_RESTAURANTDETAIL:
            return{
                ...state,
                restaurantdetail:action.payload
            }
          
        case DELETE_RESTAURANTDETAIL:
            return{
                ...state,
                restaurantdetails:state.restaurantdetails.filter(
                    restaurantdetail=>restaurantdetail.restaurantDetailsId!==action.payload
                )
            }
            default:
                return state;

    }
}