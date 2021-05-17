import axios from 'axios';

 

import { GET_ERRORS,GET_ORDERS,DELETE_ORDER,GET_ORDER} from './type';
export const createOrder=(order,history)=>async dispatch=> {
    try {
        await axios.post ("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/Order",order)
            history.push("/orderdashboard");

 


    } catch (error) {  
             dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getOrders=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8081/api/v2/Order");
      dispatch({
        type:GET_ORDERS,
        payload:res.data
    })
}
export const getOrder=(orderId,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8081/api/v2/Order/${orderId}`);
      dispatch({
        type:GET_ORDER,
        payload:res.data
    })
}

export const deleteOrder=(orderId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the product and the data related to it")) {
        await axios.delete(`http://localhost:8081/api/v2/Order/${orderId}`);
        dispatch({
            type:DELETE_ORDER,
            payload:orderId
        })
    }

 

}