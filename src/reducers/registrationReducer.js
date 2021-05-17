import { GET_ERROR,GET_ERRORS} from "../actions/type";

const initialState={
    logins:[],
    login:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_ERROR:
            return{
                ...state,
                login:action.payload
            }
        case GET_ERRORS:
            return{
                ...state,
                login:action.payload
            }
           
        default:
            return state;
    }
}