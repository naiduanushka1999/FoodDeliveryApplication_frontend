import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {deleteFoodCart, getFoodCarts} from "../../actions/FoodCartActions";
class FoodCartItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            foodcarts:[]
        }
    }
    onDeleteClick=(foodCartId)=>{
       
        console.log('--------FoodCartItemComponent:onDeleteClick Called--------')
        this.props.deleteFoodCart(foodCartId);
        
        //console.log(id);
       }
    componentDidMount(){
       // axios.get("http://localhost:8080/api/v2/all").then(c=>this.setState({products:c.data}));
        this.props.getFoodCarts();
    }


    render(){
        const {foodcarts} =  this.props.foodcarts;  
        const itemsPrice=foodcarts.reduce((a,c) => a + c.foodItemPrice * c.foodItemQuantity,0); 
          
        return(
            
            <div>               
                        <div className = "row">
                        <table className = "table table-striped table-bordered table-success table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>FoodCart Id</th>
                                    <th> FoodItem Name</th>
                                    <th>FoodItem Quantity</th>
                                    <th>FoodItem Price</th>                                   
                                    <th> Actions</th>
                                    
                                </tr>
                                
                            </thead>
                            
                            <tbody>
                            
                            {
                                console.log(foodcarts),
                                    foodcarts.map(
                                        (foodcart) => 
                                        <tr> 
                                            <td> {foodcart.foodCartId} </td>
                                        
                                             <td> {foodcart.foodItemName} </td>   
                                             <td> {foodcart.foodItemQuantity}</td>
                                             <td> {foodcart.foodItemPrice}</td>
                                             
                                             <td>
                                                {/* <Link to={`/updateFoodCart/${foodcart.foodCartId}`} className="btn btn-sm btn-info">Update</Link>*/}
                                                 <button className="btn btn-sm btn-danger" onClick={this.onDeleteClick.bind(this,foodcart.foodCartId)} >Delete </button>&nbsp;&nbsp;&nbsp;
                                                 <Link to={`/viewFoodCart/${foodcart.foodCartId}`} className="btn btn-sm btn-info" >View </Link>

                                             </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>

                 </div>

                   
                            
        
            {foodcarts.length !== 0 && (
                <>
                  
                  <div className="rowprice">
                  <div className="row">
                    <div className="col-2">
                      <strong ><h4>Total Price : </h4></strong>
                      </div>
                   <h4> <div className="col-1 text-right"> Rs{itemsPrice.toFixed(2)}</div></h4>
                  </div>
                  </div>
                  
                  <hr />
                  
                  
                </>
              )}
            
            </div>
            
        );
    }
}
FoodCartItem.propTypes={
    getFoodCarts:PropTypes.func.isRequired,
     deleteFoodCart:PropTypes.func.isRequired

}
const mapStateToProps=(state)=>({
    foodcarts:state.foodcarts
});

export default connect(mapStateToProps,{getFoodCarts,deleteFoodCart})(FoodCartItem);