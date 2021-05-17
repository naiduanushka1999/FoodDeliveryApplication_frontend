import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addFoodCart} from '../actions/action'
import PropTypes from "prop-types";
class CreateFoodCartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foodCartId: '',
            restaurantName: '',
            foodItemName: '',
            foodItemQuantity:''
        }
        this.changeFoodCartIdHandler = this.changeFoodCartIdHandler.bind(this);
        this.changeRestaurantNameHandler = this.changeRestaurantNameHandler.bind(this);
        this.changeFoodItemNameHandler = this.changeFoodItemNameHandler.bind(this);
        this.changeFoodItemQuantityHandler = this.changeFoodItemQuantityHandler.bind(this);
        this.saveFoodCart = this.saveFoodCart.bind(this);
    }
    


    saveFoodCart = (e) => {
        e.preventDefault();
        let foodcart = {foodCartId: this.state.foodCartId, 
            restaurantName: this.state.restaurantName, 
            foodItemName: this.state.foodItemName, 
            foodItemQuantity: this.state.foodItemQuantity
        };
        console.log('Food Cart => ' + JSON.stringify(foodcart));
        this.props.addFoodCart(foodcart);
        this.props.history.push("/FoodCart")
    }
    
        
    
    changeFoodCartIdHandler= (event) => {
        this.setState({foodCartId: event.target.value});
    }

    changeRestaurantNameHandler= (event) => {
        this.setState({restaurantName: event.target.value});
    }

    changeFoodItemNameHandler= (event) => {
        this.setState({foodItemName: event.target.value});
    }

    changeFoodItemQuantityHandler= (event) => {
        this.setState({foodItemQuantity: event.target.value});
    }

    cancel(){
        this.props.history.push('/FoodCart');
    }

    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    // this.getTitle()
                                }
                                  <h3 className="text-center" >Add Food Cart</h3>

                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Food Cart ID </label>
                                            <input type='text' placeholder="Unique Food Cart ID" 
                                                name="foodCartId" 
                                                className="form-control"
                                                value={this.state.foodCartId} 
                                                onChange={this.changeFoodCartIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Restaurant Name </label>
                                            <input type='text' placeholder="Enter Restaurant Name" 
                                                   name="restaurantName" 
                                                   className="form-control"
                                                   value={this.state.restaurantName} 
                                                   onChange={this.changeRestaurantNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label>Food Item Name</label>
                                            <input type='text' placeholder="Enter Food Item Name" 
                                                   name="foodItemName" 
                                                   className="form-control" 
                                                   value={this.state.foodItemName} 
                                                   onChange={this.changeFoodItemNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Food Item Quantity</label>
                                            <input type='text' placeholder="Food Item Quantity" 
                                                   name="foodItemQuantity" className="form-control" 
                                                   value={this.state.foodItemQuantity} 
                                                   onChange={this.changeFoodItemQuantityHandler}/>
                                        </div>

                                        <button className="btn btn-success" 
                                                onClick={this.saveFoodCart}> Save</button>
                                        <button className="btn btn-danger" 
                                                onClick={this.cancel.bind(this)} 
                                                style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

CreateFoodCartComponent.propTypes = {
    addFoodCart:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps, { addFoodCart })(CreateFoodCartComponent);
