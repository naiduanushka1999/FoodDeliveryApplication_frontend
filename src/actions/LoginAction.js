import axios from 'axios';
import { GET_ERRORS} from './type';
export const findById=(registration,userId,password,history)=>async dispatch=>{
   

try {
    const user={
        "userId":registration.userId,
        "password":registration.password

    }
    
    await axios.get('http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/Login/' +userId+ '/' +password);
    
    //history.push("/Dashboard");
} catch (error) {
    dispatch({
        type:GET_ERRORS,
        payload: error.response.data
    })
}
}
