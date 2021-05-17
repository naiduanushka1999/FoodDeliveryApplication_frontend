import axios from 'axios';

const FOODCART_API_BASE_URL = "http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/FoodCart";

class FoodCartService {

    viewFoodCart(){
        return axios.get(FOODCART_API_BASE_URL);
    }

    createFoodCart(foodcart){
        return axios.post(FOODCART_API_BASE_URL, foodcart);
    }

    getFoodCartById(foodCartId){
        return axios.get(FOODCART_API_BASE_URL + '/' + foodCartId);
    }

    updateFoodCart(foodCartId, foodcart){
        return axios.put(FOODCART_API_BASE_URL + '/' + foodCartId, foodcart);
    }

    deleteFoodCart(foodCartId){
        return axios.delete(FOODCART_API_BASE_URL + '/' + foodCartId);
    }
}

export default new FoodCartService();