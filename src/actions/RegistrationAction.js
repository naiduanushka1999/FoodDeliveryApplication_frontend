import axios from 'axios';
import { GET_ERROR} from './type';
export const createUser=(registration,history)=>async dispatch=> {
    try {
        const user={
            "userId":registration.userId,
            "emailId":registration.emailId,
            "contactNo":registration.contactNo,
            "password":registration.password

        }
        
        await axios.post ("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/userRegistration/createUserDetails",user);
        alert("Registration Successfull.......click ok to continue");
        history.push("/UserLogin");
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload: error.response.data
        })
    }
}



