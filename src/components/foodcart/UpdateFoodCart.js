import React from 'react';
import {getFoodCart,createFoodCart} from '../../actions/FoodCartActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UpdateFoodCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            foodCartId:'',
            foodItemName:'',
            foodItemQuantity:'',
            foodItemPrice:''
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updatedFoodCart = {
            foodCartId:this.props.match.params.foodCartId,
            foodItemName:this.state.foodItemName,
            foodItemQuantity:this.state.foodItemQuantity,
            foodItemPrice:this.state.foodItemPrice,
        }
console.log(updatedFoodCart.foodCartId)
     this.props.createFoodCart(updatedFoodCart,this.props.history);
//     axios.put("http://localhost:8080/api/v2/"+updatedProduct.productId,updatedProduct).then(res=>
// this.props.history.push("/dashboard"))
    }
    cancel(){
        this.props.history.push(`/dashboard`);
    }
    componentDidMount(){
        const {foodCartId} = this.props.match.params;
        console.log(foodCartId);
       this.props.getFoodCart(foodCartId,this.props.history);
      // axios.get("http://localhost:8080/api/v2/"+productId).then(c=>this.setState({prod:c.data}));
  
     }
 
     componentWillReceiveProps(nextProps){
         const {
            foodCartId,
            foodItemName,
            foodItemQuantity,
            foodItemPrice
         }=nextProps.foodcart;
 
         this.setState({
            foodCartId,
            foodItemName,
            foodItemQuantity,
            foodItemPrice
                        
         });
     }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update FoodCart</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>FoodCart Id</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="FoodCart ID" 
                                    name="foodCartId" 
                                    onChange={this.onChange}
                                    value={this.state.foodCartId}
                                    required/>
                            </div>
                            <div className="form-group">
                                <label>FoodItem Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="FoodItem Name" 
                                    name="foodItemName" 
                                    onChange={this.onChange}
                                    value={this.state.foodItemName}
                                    required/>
                            </div>
                            <div className="form-group">
                                <label>FoodItem Quantity</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="FoodItem Quantity" 
                                     name="foodItemQuantity" 
                                    onChange={this.onChange}
                                    value={this.state.foodItemQuantity}
                                    required/>
                            </div>
                            <div className="form-group">
                                <label>FoodItem Price</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="FoodItem Price" 
                                    name="foodItemPrice" 
                                    onChange={this.onChange}
                                    value={this.state.foodItemPrice}
                                    required/>
                                    </div>
                            
                                        <button className="btn btn-success" >Update</button>
                           
                                       
                                        <button className="btn btn-danger"onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
UpdateFoodCart.propTypes = {
    getFoodCart:PropTypes.func.isRequired,
    createFoodCart:PropTypes.func.isRequired,
    foodcart:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    foodcart: state.foodcarts.foodcart
  });

export default connect(mapStateToProps,{getFoodCart,createFoodCart})(UpdateFoodCart); 