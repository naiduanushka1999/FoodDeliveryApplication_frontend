import React from 'react';
import {getFoodCart} from '../../actions/FoodCartActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewFoodCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            foodCartId:'',
            foodItemName:'',
            foodItemQuantity:'',
            foodItemPrice:''
        }
    }
    componentDidMount(){
        const {foodCartId} = this.props.match.params;
        
      this.props.getFoodCart(foodCartId,this.props.history);
        //axios.get("http://localhost:8080/api/v2/"+productId).then(c=>this.setState({prod:c.data}));
       
       
 
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
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center" style={{color:"white"}}>View FoodCart</h5>
                        <hr />
                        <form>
                            <div className="form-group">
                                <label style={{color:"white"}}>FoodCart Id</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="FoodCart Id" 
                                    name="foodCartId" 
                                    value={this.state.foodCartId}/>
                            </div>
                            <div className="form-group">
                                <label style={{color:"white"}}>FoodItem Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="FoodItem Name" 
                                    name="foodItemName" 
                                    value={this.state.foodItemName}
                                    />
                            </div>
                            <div className="form-group">
                                <label style={{color:"white"}}>Food Item Quantity</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Food Item Quantity" 
                                    name="foodItemQuantity"
                                    value={this.state.foodItemQuantity}
                                    />
                            </div>
                            <div className="form-group">
                                <label style={{color:"white"}}>FoodItem Price</label>
                                <input 
                                    type="number" 
                                    className="form-control form-control-lg" 
                                    placeholder="foodItem Price"                                     
                                    name="foodItemPrice" 
                                    value={this.state.foodItemPrice}
                                    />
                            </div>
                            
                            <Link to="/foodCartDashboard" className="btn btn-lg btn-info">Ok</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
ViewFoodCart.propTypes = {
    getFoodCart:PropTypes.func.isRequired,
    foodcart:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    foodcart: state.foodcarts.foodcart
    
  });

export default connect(mapStateToProps,{getFoodCart})(ViewFoodCart); 