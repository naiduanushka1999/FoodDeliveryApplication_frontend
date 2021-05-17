import axios from 'axios';
import { GET_ERRORS,GET_DELIVERYBOYS,GET_DELIVERYBOY,DELETE_DELIVERYBOY } from './type';
export const createDeliveryBoy=(deliveryBoy,history)=>async dispatch=> {
    try {
        const res =await axios.post ("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2",deliveryBoy)
        history.push("/deliveryBoyDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const getDeliveryBoys=()=>async dispatch=>{
    const res=await axios.get("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/deliveryBoy/all");
      dispatch({
        type:GET_DELIVERYBOYS,
        payload:res.data
    })
}

export const getDeliveryBoy=(deliveryBoyId,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/deliveryBoy/${deliveryBoyId}`);
      dispatch({
        type:GET_DELIVERYBOY,
        payload:res.data
    })
}

export const deleteDeliveryBoy=(deliveryBoyId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the delivery boy and the data related to it")) {
        await axios.delete(`http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/deliveryBoy/${deliveryBoyId}`);
        dispatch({
            type:DELETE_DELIVERYBOY,
            payload:deliveryBoyId
        })
    }
}




