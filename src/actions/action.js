import {VIEW_FOODCART, GET_UPDATED_FOODCART, FOODCART_ADDED, GET_DELETED_FOODCART, ERROR_MESSAGE} from '../actiontypes/actiontypes';
import FoodCartService from '../config/FoodCartService'
import history from '../history'
export const addFoodCart=(foodcart)=>{
    return dispatch=>{
        return FoodCartService.createFoodCart(foodcart).then((response)=>{
            dispatch({type:FOODCART_ADDED, payload:response.data});
            FoodCartService.viewFoodCart().then((response) => {
                console.log(response.data);
                dispatch({ type: VIEW_FOODCART, payload: response.data });
            })
            history.push("/FoodCart")
        }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE, payload:res.data})
        })
    }
    }
    export const viewFoodCart = () => {
        return dispatch => {
            return FoodCartService.viewFoodCart().then((response) => {
                console.log(response.data);
                dispatch({ type: VIEW_FOODCART, payload: response.data });
            }).catch((res)=>{
                dispatch({type:ERROR_MESSAGE, payload:res.data})
            })
        }
    }
    
    
export const deleteFoodCart=(foodCartId)=>{
    return dispatch=>{
        return FoodCartService.deleteFoodCart(foodCartId).then((response)=>{
            dispatch({type:GET_DELETED_FOODCART, payload:response.data})
            FoodCartService.viewFoodCart().then((response) => {
                console.log(response.data);
                dispatch({ type: VIEW_FOODCART, payload: response.data });
            })
            history.push("/FoodCart")
        }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE, payload:res.data})
        })
    }
}
export const updateFoodCartDetails=(foodCartId,foodcart)=>{
    return dispatch=>{
        return FoodCartService.updateFoodCart(foodCartId,foodcart).then((response)=>{
            dispatch({type:GET_UPDATED_FOODCART, payload:response.data});
            FoodCartService.viewFoodCart().then((response) => {
               console.log(response.data);
               dispatch({ type: GET_UPDATED_FOODCART, payload: response.data });
               
           })
        }).catch((res)=>{
           dispatch({type:ERROR_MESSAGE, payload:'Enter correct data'})
       })
    }
}