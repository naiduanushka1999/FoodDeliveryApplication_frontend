import {combineReducers} from 'redux';
import paymentReducer from './paymentReducer';
import errorReducer from './errorReducer'
import deliveryBoyReducer from  './deliveryBoyReducer';
import registrationReducer from './registrationReducer';
import foodcartReducer from './foodcartReducer';
import restaurantdetailReducer from  './restaurantdetailReducer';
import addFoodCart from './addFoodCartReducer';
import getFoodCart from './viewFoodCartReducer';
import updateFoodCart from './updateFoodCartReducer';
import deleteFoodCart from './deleteFoodCartReducer';
import orderReducer from './orderReducer';

export default combineReducers({
   errorReducer:errorReducer,
   payments:paymentReducer,
   deliveryBoys:deliveryBoyReducer,
   foodcarts:foodcartReducer,
   logins:registrationReducer,
   //getListRestaurantdetails: getRestaurantdetails,
    //getUpdateRestaurantdetails:updateRestaurantdetails,
    //getAddRestaurantdetails:addRestaurantdetails,
    //getDeleteRestaurantdetails:deleteRestaurantdetails,
    restaurantdetails:restaurantdetailReducer,
    orders:orderReducer,
    getListFoodCart: getFoodCart,
    getUpdateFoodCart:updateFoodCart,
    getAddFoodCart:addFoodCart,
    getDeleteFoodCart:deleteFoodCart,
});