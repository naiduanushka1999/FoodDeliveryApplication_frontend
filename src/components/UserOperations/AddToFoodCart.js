import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createFoodCart } from '../../actions/FoodCartActions';
import {Link} from 'react-router-dom';
import classnames from "classnames";
import axios from 'axios';
class AddFoodCart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            foodCartId:"",
            foodItemName:"",
            foodItemQuantity:"",
            foodItemPrice:"",
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
        const newFoodCart = {
            foodCartId:this.state.foodCartId,
            foodItemName:this.state.foodItemName,
            foodItemQuantity:this.state.foodItemQuantity,
            foodItemPrice:this.state.foodItemPrice
        }
        console.log(newFoodCart);
        this.props.createFoodCart(newFoodCart);
       axios.post ("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/Carts",newFoodCart).then(c=>this.setState({cart:c.data}));
        this.props.history.push('/addOrder');
        

    }
    cancel(){
        this.props.history.push(`/userRestaurantDetail`);
    }
    render() {
        const {errors}=this.state;
        return (
            <div className="backimg">

                 <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">                                
                                <div className = "card-body">
                                <center>
                                    <form onSubmit={this.onSubmit}>                                       
                                        <h3 className="text-center">Add FoodCart</h3>
                                         <div className = "form-group">
                                            <label>FoodCart Id </label>
                                            <input placeholder="FoodCart id"
                                             id="foodCartId"
                                             name="foodCartId"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.foodCartId}
                                             pattern="[0-9]{1,10}" title="eg: 10"
                                             required />
                                        </div>
                                        <div className = "form-group">
                                            <label>FoodItem Name</label>
                                            <input  placeholder="FoodItem Name"
                                             name="foodItemName"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.foodItemName} 
                                             pattern="[a-zA-Z ]{5,15}"
                                             title="Food name should be as given @example:Veg Biryani"                                           
                                             required/>                                              
                                        </div>
                                        <div className = "form-group">
                                            <label>FoodItem Quantity </label>
                                            <input type="text"
                                             placeholder="FoodItem Quantity"
                                             name="foodItemQuantity"
                                              className="form-control"
                                              onChange={this.onChange}
                                              value={this.state.foodItemQuantity} 
                                              pattern="[0-9]{1,10}" title="eg:2"
                                               required />
                                        </div>
                                      
                                        <div className = "form-group">
                                            <label>FoodCart Price </label>
                                            <input placeholder="FoodItem Price"
                                             id="foodItemPrice"
                                             name="foodItemPrice"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.foodItemPrice}
                                             pattern="[0-9]{1,10}" title="eg: 200"
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
                   <br/>
                   <br/>
            </div>
        )
    }
}
AddFoodCart.propTypes = {
    createFoodCart:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    errors: state.errors,
  });
export default connect(mapStateToProps,{createFoodCart})(AddFoodCart);