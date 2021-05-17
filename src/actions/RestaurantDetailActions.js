import axios from 'axios';

import { GET_ERRORS,GET_RESTAURANTDETAILS,DELETE_RESTAURANTDETAIL,GET_RESTAURANTDETAIL} from './type';
export const createRestaurantDetail=(restaurantdetail,history)=>async dispatch=> {
    try {
        await axios.post ("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/RestaurantDetail",restaurantdetail)
            history.push("/listRestaurantDetail");


    } catch (error) {  
             dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getRestaurantDetails=()=>async dispatch=>{
    const res=await axios.get("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/RestaurantDetail");
      dispatch({
        type:GET_RESTAURANTDETAILS,
        payload:res.data
    })
}
export const getRestaurantDetail=(restaurantDetailsId,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/${restaurantDetailsId}`);
      dispatch({
        type:GET_RESTAURANTDETAIL,
        payload:res.data
    })
}

export const deleteRestaurantDetail=(restaurantDetailsId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the Restaurant Details and the data related to it")) {
        await axios.delete(`http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/${restaurantDetailsId}`);
        dispatch({
            type:DELETE_RESTAURANTDETAIL,
            payload:restaurantDetailsId
        })
    }

}