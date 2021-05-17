import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {deleteOrder, getOrders} from "../../actions/OrderActions";
class Order extends React.Component{
    constructor(props){
        super(props);
        this.state={
            orders:[]
        }
    }
    onDeleteClick=(orderId)=>{
       
        console.log('--------OrderComponent:onDeleteClick Called--------')
        this.props.deleteOrder(orderId);
        
       // console.log(id);
       }
    componentDidMount(){
      //  axios.get("http://localhost:8080/api/v2/all").then(c=>this.setState({products:c.data}));
        this.props.getOrders();
    }

 


    render(){
        const {orders} =  this.props.orders;  
      //  const itemsPrice=restaurantdetails.reduce((a,c) => a + c.foodItemPrice * c.foodItemQuantity,0); 
        //  console.log(restaurantdetails);
        return(
            
            <div>               

                        <div className = "row">
                        <table className = "table table-striped table-bordered table-success table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Order Id</th>
                                    <th>User Name</th>
                                 
                                    <th>User Phone</th>
                                    <th>User EmailId</th>

 

                                    <th>User Address</th>
                                                                 
                                    <th> Actions</th>
                                    
                                </tr>
                                
                            </thead>
                            
                            <tbody>
                            
                            {
                                console.log(orders),
                                orders.map(
                                        (order) => 
                                        <tr> 
                                        
                                             <td> {order.orderId }</td>   
                                             <td> {order.userName}</td>
                                            
                                             <td> {order.userPhone}</td>
                                             <td> {order.userEmailId}</td>
                                             <td> {order.userAddress}</td>
                                            
                                             <td>
                                                 <Link to={`/updateOrder/${order.orderId}`} className="btn btn-sm btn-info">Update</Link>
                                                 <button className="{marginTop:10px, btn btn-sm btn-danger" onClick={this.onDeleteClick.bind(this,order.orderId)} style={{marginLeft: "10px"}} >Delete </button>
                                                 

 

                                             </td>
                                        </tr>
                                    )
                                }

 

                            </tbody>
                        </table>

 

                 </div>
                 </div>
                
            
        );
    }
}
Order.propTypes={
    getOrders:PropTypes.func.isRequired,
     deleteOrder:PropTypes.func.isRequired

 

}
const mapStateToProps=(state)=>({
    orders:state.orders
});

 

export default connect(mapStateToProps,{getOrders,deleteOrder})(Order);