import React from 'react';
import {getRestaurantDetail,createRestaurantDetail} from '../../actions/RestaurantDetailActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UpdateRestaurantDetail extends React.Component{
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
            deliveryBoyPhone:''
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updateRestaurantDetail = {
            restaurantDetailsId:this.props.match.params.restaurantDetailsId,
            restaurantOwnerName: this.state.restaurantOwnerName,
            restaurantName: this.state.restaurantName,
            restaurantPhone: this.state.restaurantPhone,
            restaurantAddress: this.state.restaurantAddress, 
            restaurantFoodItems: this.state.restaurantFoodItems, 
            foodItemsPrice: this.state.foodItemsPrice,
            deliveryBoyId: this.state.deliveryBoyId,
            deliveryBoyName: this.state.deliveryBoyName,
            deliveryBoyPhone: this.state.deliveryBoyPhone,
        }
console.log(updateRestaurantDetail.restaurantDetailsId)
     this.props.createRestaurantDetail(updateRestaurantDetail,this.props.history);
//     axios.put("http://localhost:8080/api/v2/"+updatedProduct.productId,updatedProduct).then(res=>
// this.props.history.push("/dashboard"))
    }
    cancel(){
        this.props.history.push(`/listRestaurantDetail`);
    }
    componentDidMount(){
        const {restaurantDetailsId} = this.props.match.params;
        console.log(restaurantDetailsId);
       this.props.getRestaurantDetail(restaurantDetailsId,this.props.history);
      // axios.get("http://localhost:8080/api/v2/"+productId).then(c=>this.setState({prod:c.data}));
  
     }
 
     componentWillReceiveProps(nextProps){
         const {
            restaurantDetailsId,
            restaurantOwnerName,
            restaurantName,
            restaurantPhone,
            restaurantAddress,
            restaurantFoodItems,
            foodItemsPrice,
            deliveryBoyId,
            deliveryBoyName,
            deliveryBoyPhone
         }=nextProps.restaurantdetail;
 
         this.setState({
            restaurantDetailsId,
            restaurantOwnerName,
            restaurantName,
            restaurantPhone,
            restaurantAddress,
            restaurantFoodItems,
            foodItemsPrice,
            deliveryBoyId,
            deliveryBoyName,
            deliveryBoyPhone
                        
         });
     }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h3 className="display-4 text-center" style={{color:"white"}}>Update Restaurant Details</h3>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="RestaurantDetails ID" 
                                    name="restaurantDetailsId" 
                                    onChange={this.onChange}
                                    value={this.state.restaurantDetailsId}
                                    pattern="[0-9]{1,10}" title="eg: 10"
                                    required/>
                            </div>
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="RestaurantOwner Name" 
                                    name="restaurantOwnerName" 
                                    onChange={this.onChange}
                                    value={this.state.restaurantOwnerName}
                                    pattern="[a-zA-Z ]{5,15}"
                                    title="Name should be as given @example:Mr.Sharma" 
                                    required/>
                            </div>
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Restaurant Name" 
                                    name="restaurantName" 
                                    onChange={this.onChange}
                                    value={this.state.restaurantName}
                                    pattern="[a-zA-Z ]{5,15}"
                                    title=" Restaurant name should be as given @example:Hotel Vaishnavi" 
                                    required/>
                            </div>
                            <div className="form-group">
                                
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Restaurant Phone" 
                                    name="restaurantPhone" 
                        
                                    onChange={this.onChange}
                                    value={this.state.restaurantPhone}
                                    pattern="([987][0-9]{9})"
                                    title="Enter valid phone number such as @example 94******12 "    
                                    required/>
                            </div>
                            <div className="form-group">
                               
                                <textarea 
                                    className="form-control form-control-lg" 
                                    placeholder="Restaurant Address" 
                                    name="restaurantAddress" 
                                    onChange={this.onChange}
                                    value={this.state.restaurantAddress}
                                    required></textarea>
                            </div>
                            <div className="form-group">
                                
                                <textarea
                                    className="form-control form-control-lg" 
                                    placeholder="Restaurant FoodItems" 
                                    name="restaurantFoodItems" 
                                    onChange={this.onChange}
                                    value={this.state.restaurantFoodItems}
                                    pattern="[a-zA-Z ]{5,15}"
                                    title="Food name should be as given @example:Veg Biryani" 
                                    required></textarea>
                            </div>
                            
                            <div className="form-group">
                              
                                <textarea
                                    className="form-control form-control-lg" 
                                    placeholder="FoodItems Price" 
                                     name="foodItemsPrice" 
                                    onChange={this.onChange}
                                    value={this.state.foodItemsPrice}
                                    pattern="[0-9]{1,10}[.][0-9]{2}" title="eg: 200.00"
                                    required></textarea>
                            </div>
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="DeliveryBoy Id" 
                                    name="deliveryBoyId" 
                                    onChange={this.onChange}
                                    value={this.state.deliveryBoyId}
                                    pattern="[0-9]{1,10}" title="eg: 10"
                                    required/>
                                    </div>
                                    <div className="form-group">
                              
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="DeliveryBoy Name" 
                                    name="deliveryBoyName" 
                                    onChange={this.onChange}
                                    value={this.state.deliveryBoyName}
                                    pattern="[a-zA-Z ]{5,15}"
                                    title=" Name should be as given @example:Rahul Roy"
                                    required/>
                                    </div>
                                    <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="DeliveryBoy Phone" 
                                    name="deliveryBoyPhone" 
                                    pattern="([987][0-9]{9})"
                                    title="Enter valid phone number such as @example 94******12 " 
                                    onChange={this.onChange}
                                    value={this.state.deliveryBoyPhone}
                                    required/>
                                    <br/>
                                    
                            
                                  <button className="btn btn-success"  >Update</button>    
                                 <button className="btn btn-danger"onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                             <br/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
UpdateRestaurantDetail.propTypes = {
    getRestaurantDetail:PropTypes.func.isRequired,
    createRestaurantDetail:PropTypes.func.isRequired,
    restaurantdetail:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    restaurantdetail: state.restaurantdetails.restaurantdetail
  });

export default connect(mapStateToProps,{getRestaurantDetail,createRestaurantDetail})(UpdateRestaurantDetail);