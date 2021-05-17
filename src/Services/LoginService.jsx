import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/Login";

const OWNER_API_BASE_URL="http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2";

class LoginService {

    validate(id,password)
    {
        return axios.get(EMPLOYEE_API_BASE_URL+ '/' + id + '/' + password);
    }

    createRestroOwner(restroOwner){
        return axios.post(OWNER_API_BASE_URL+'/createRestroOwner',restroOwner);
    }
    restrologin(restrologin){
        return axios.post(OWNER_API_BASE_URL +'/restrologin',restrologin);
    }
    adminLogin(adminLogin){
        return axios.post(OWNER_API_BASE_URL + '/adminLogin',adminLogin);
    }
}

export default new LoginService()