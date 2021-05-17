import axios from 'axios';

import { GET_ERRORS,GET_FOODCARTS,DELETE_FOODCART,GET_FOODCART} from './type';
export const createFoodCart=(foodcart)=>async dispatch=> {
    try {
        await axios.post ("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/Carts",foodcart);
            


    } catch (error) {  
             dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getFoodCarts=()=>async dispatch=>{
    const res=await axios.get("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/all");
      dispatch({
        type:GET_FOODCARTS,
        payload:res.data
    })
}
export const getFoodCart=(foodCartId,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/${foodCartId}`);
      dispatch({
        type:GET_FOODCART,
        payload:res.data
    })
}

export const deleteFoodCart=(foodCartId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the product and the data related to it")) {
        await axios.delete(`http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/${foodCartId}`);
        dispatch({
            type:DELETE_FOODCART,
            payload:foodCartId
        })
    }

}
