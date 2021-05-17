import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createRestaurantDetail } from '../../actions/RestaurantDetailActions';
import classnames from "classnames";
import axios from 'axios';
class AddRestaurantDetail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            restaurantDetailsId: '',
            restaurantOwnerName: '',
            restaurantName: '',
            restaurantPhone: '',
            restaurantAddress: '',
            restaurantFoodItems: '',
            foodItemsPrice:'',
            deliveryBoyId:'',
            deliveryBoyName:'',
            deliveryBoyPhone:'',
            errors:{},
        }
        this.onChange=this.onChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    onChange(event){
        console.log(event.target.value)
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }
    onSubmit=(event)=>{
        event.preventDefault();
        const newRestaurantDetail = {
            restaurantDetailsId:this.state.restaurantDetailsId, 
            restaurantOwnerName: this.state.restaurantOwnerName,
            restaurantName: this.state.restaurantName,
            restaurantPhone: this.state.restaurantPhone,
            restaurantAddress: this.state.restaurantAddress, 
            restaurantFoodItems: this.state.restaurantFoodItems, 
            foodItemsPrice: this.state.foodItemsPrice,
            deliveryBoyId: this.state.deliveryBoyId,
            deliveryBoyName: this.state.deliveryBoyName,
            deliveryBoyPhone: this.state.deliveryBoyPhone
        }
        console.log(newRestaurantDetail);
       
        axios.post ("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/RestaurantDetail",newRestaurantDetail).then(c=>this.setState({cart:c.data}));
        this.props.history.push('/listRestaurantDetail');

    }
    cancel(){
        this.props.history.push(`/listRestaurantDetail`);
    }
    render() {
        const {errors}=this.state;
        return (
            <div className="adservices">

                 <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">                                
                                <div className = "card-body">
                                <center>
                                    <form onSubmit={this.onSubmit}>                                       
                                        <h3 className="text-center">Add Restaurant Detail</h3>
                                         <div className = "form-group">
                                          
                                            <input placeholder="RestaurantDetails id"
                                             id="restaurantDetailsId"
                                             name="restaurantDetailsId"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.restaurantDetailsId}
                                             pattern="[0-9]{1,10}" title="eg: 10"
                                             required />
                                        </div>
                                        <div className = "form-group">
                                            
                                            <input type="text"
                                            placeholder="RestaurantOwner Name"
                                             name="restaurantOwnerName"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.restaurantOwnerName}  
                                             pattern="[a-zA-Z ]{5,15}"
                                             title="Name should be as given @example:Mr.Sharma"                                           
                                             required/>                                              
                                        </div>
                                        <div className = "form-group">
                                           
                                            <input type="text"
                                            placeholder="Restaurant Name"
                                             name="restaurantName"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.restaurantName}   
                                             pattern="[a-zA-Z ]{5,15}"
                                             title=" Restaurant name should be as given @example:Hotel Vaishnavi"                                         
                                             required/>                                              
                                        </div>
                                        <div className = "form-group">
                                          
                                            <input  placeholder="Restaurant Phone"
                                             name="restaurantPhone"
                                             className="form-control"
                                             pattern="[6-9]{1}[0-9]{9}"
                                             title="phone number should start with 6 to 9 and have 10 digits"
                                             onChange={this.onChange}
                                             value={this.state.restaurantPhone}    
                                             pattern="([987][0-9]{9})"
                                             title="Enter valid phone number such as @example 94******12 "                                        
                                             required/>                                              
                                        </div>
                                        <div className = "form-group">
                                          
                                            <textarea 
                                            placeholder="Restaurant Address"
                                             name="restaurantAddress"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.restaurantAddress}                                            
                                             required></textarea>                                              
                                        </div>
                                        <div className = "form-group">
                                           
                                            <textarea  
                                            placeholder="Restaurant FoodItems"
                                             name="restaurantFoodItems"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.restaurantFoodItems}  
                                             pattern="[a-zA-Z ]{5,15}"
                                             title="Food name should be as given @example:Veg Biryani"                                          
                                             required></textarea>                                              
                                        </div>
                                        <div className = "form-group">
                                            
                                            <textarea
                                             placeholder="FoodItems Price"
                                             name="foodItemsPrice"
                                              className="form-control"
                                              onChange={this.onChange}
                                              value={this.state.foodItemsPrice} 
                                              pattern="[0-9]{1,10}[.][0-9]{2}" title="eg: 200.00"
                                               required></textarea>
                                        </div>
                                      
                                        <div className = "form-group">
                                          
                                            <input placeholder="DeliveryBoy Id"
                                             id="deliveryBoyId"
                                             name="deliveryBoyId"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.deliveryBoyId}
                                             pattern="[0-9]{1,10}" title="eg: 10"
                                             required />
                                        </div>
                                        <div className = "form-group">
                                           
                                            <input placeholder="DeliveryBoy Name"
                                             name="deliveryBoyName"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.deliveryBoyName}
                                             pattern="[a-zA-Z ]{5,15}"
                                             title=" Name should be as given @example:Rahul Roy"
                                             required />
                                        </div>
                                        <div className = "form-group">
                                           
                                            <input placeholder="DeliveryBoy Phone"
                                             name="deliveryBoyPhone"
                                             className="form-control"
                                             pattern="[6-9]{1}[0-9]{9}"
                                             title="phone number should start with 6 to 9 and have 10 digits"
                                             onChange={this.onChange}
                                             value={this.state.deliveryBoyPhone}
                                             pattern="([987][0-9]{9})"
                                             title="Enter valid phone number such as @example 94******12 "   
                                             required />
                                        </div>
                                        
                                        <button className="btn btn-success" >Add</button>                                                                        
                                        <button className="btn btn-danger"onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                      
                                    </form>
                                    </center>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
AddRestaurantDetail.propTypes = {
    createRestaurantDetail:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    errors: state.errors,
  });
export default connect(mapStateToProps,{createRestaurantDetail})(AddRestaurantDetail);