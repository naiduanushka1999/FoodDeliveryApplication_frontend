import React, { Component } from 'react'
import {viewFoodCart, deleteFoodCart} from '../actions/action'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
 class ListFoodCartComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            foodcarts: []
    }
        this.addFoodCart = this.addFoodCart.bind(this);
       // this.editFoodCart = this.editFoodCart.bind(this
        this.deleteFoodCart = this.deleteFoodCart.bind(this);
        this.updateFoodCart = this.updateFoodCart.bind(this);
        this.viewFoodCart=this.viewFoodCart.bind(this);
    
    }
 
    deleteFoodCart(foodCartId){
        this.props.deleteFoodCart(foodCartId);
        this.props.history.push("/FoodCart")
    }
   // editFoodCart(foodCartId){
    //    this.props.history.push(`/update-foodcart${foodCartId}`);
   // }
   updateFoodCart(foodCartId){
    this.props.history.push(`/add-foodcart/_add/${foodCartId}`);
}   
    viewFoodCart()
    {
        this.props.history.push(`/view-foodcart`);
    }

    componentDidMount(){
        this.props.viewFoodCart();
    }

    addFoodCart(){
        this.props.history.push('/add-foodcart/_add');
    }

    render() {
        const foodcarts=this.props.foodCart1;
        console.log(foodcarts)
        return (
            <div>
                 <h1 className="text-center" 
                     style={{textAlign:'center', color:'darkcyan', marginTop:'30px', fontFamily: 'sans-serif-medium'}}>
                     <b>Food Cart List</b></h1>
                 <div className = "row" style={{fontFamily: 'sans-serif-medium'}}>
                    <button className="btn btn-primary btn btn-info" 
                            onClick={this.addFoodCart} 
                            style={{fontSize:"20px"}} > <h5>Add Food Cart</h5></button>&nbsp;
                            
                            <Link to="/AdminDashboard" className="btn btn-primary btn btn-info"><h5>Admin Dashboard</h5></Link>
                 </div>
                 
                 <br></br>
                 <div className = "row" style={{fontFamily: 'sans-serif-light', fontSize:"17px"}}>
                        <table className = "table table-striped table-bordered table-success table-hover">

                            <thead class="thead-dark">
                                <tr>
                                    <th>Food Cart Id</th>
                                    <th>Restaurant Name</th>
                                    <th>Food Item Name</th>
                                    <th>Food Item Quantity</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {    
                                    foodcarts.map(
                                        foodcart => 
                                        <tr key = {foodcart.foodCartId}>
                                             <td> {foodcart.foodCartId } </td>   
                                             <td> {foodcart.restaurantName}</td>
                                             <td> {foodcart.foodItemName}</td>
                                             <td> {foodcart.foodItemQuantity}</td>
                                             <td>
                                                 <button onClick={ () => this.updateFoodCart(foodcart.foodCartId)} 
                                                         className="btn btn-info">Update </button>
                                                         <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFoodCart(foodcart.foodCartId)} 
                                                        className="btn btn-danger">Delete </button>
                                                       
                                                
                                                        
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { foodCart1: state.getListFoodCart, data:state.getUpdateFoodCart, deleted:state.getDeleteFoodCart
     }
}
    
export default connect(mapStateToProps, {viewFoodCart, deleteFoodCart})(ListFoodCartComponent);