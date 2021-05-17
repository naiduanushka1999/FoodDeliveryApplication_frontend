import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {deleteRestaurantDetail, getRestaurantDetails} from "../../actions/RestaurantDetailActions";
class RestaurantDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            restaurantdetails:[]
        }
    }
    onDeleteClick=(restaurantDetailsId)=>{
       
        console.log('--------RestaurantDetailComponent:onDeleteClick Called--------')
        this.props.deleteRestaurantDetail(restaurantDetailsId);
        
       // console.log(id);
       }
    componentDidMount(){
      //  axios.get("http://localhost:8080/api/v2/all").then(c=>this.setState({products:c.data}));
        this.props.getRestaurantDetails();
    }


    render(){
        const {restaurantdetails} =  this.props.restaurantdetails;  
      //  const itemsPrice=restaurantdetails.reduce((a,c) => a + c.foodItemPrice * c.foodItemQuantity,0); 
        //  console.log(restaurantdetails);
        return(
            
            <div>               
                        <div className = "row">
                        <table className = "table table-striped table-bordered table-success table-hover">
                            <thead  class="thead-dark">
                                <tr>
                                    <th>Restaurant Details Id</th>
                                    <th>Restaurant Owner Name</th>
                                    <th>Restaurant Name</th>
                                    <th>Restaurant Phone</th>
                                    <th>Restaurant Address</th>
                                    <th>Restaurant Food Items</th>
                                    <th>Food Items Price</th>
                                    <th>Delivery Boy Id</th>
                                    <th>Delivery Boy Name</th>
                                    <th>Delivery Boy Phone</th>                                   
                                    <th> Actions</th>
                                    
                                </tr>
                                
                            </thead>
                            
                            <tbody>
                            
                            {
                                console.log(restaurantdetails),
                                restaurantdetails.map(
                                        (restaurantdetail) => 
                                        <tr> 
                                        
                                             <td> {restaurantdetail.restaurantDetailsId }</td>   
                                             <td> {restaurantdetail.restaurantOwnerName}</td>
                                             <td> {restaurantdetail.restaurantName}</td>   
                                             <td> {restaurantdetail.restaurantPhone}</td>
                                             <td> {restaurantdetail.restaurantAddress}</td>
                                             <td> {restaurantdetail.restaurantFoodItems}</td>
                                             <td> {restaurantdetail.foodItemsPrice}</td>
                                             <td> {restaurantdetail.deliveryBoyId}</td>
                                             <td> {restaurantdetail.deliveryBoyName}</td>
                                             <td> {restaurantdetail.deliveryBoyPhone}</td>
                                             <td>
                                                 <Link to={`/updateRestaurantDetail/${restaurantdetail.restaurantDetailsId}`} className="btn btn-sm btn-info">Update</Link>
                                                 <button className="{marginTop:10px, btn btn-sm btn-danger" onClick={this.onDeleteClick.bind(this,restaurantdetail.restaurantDetailsId)} style={{marginTop: "10px"}} >Delete </button>
                                                 

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
RestaurantDetail.propTypes={
    getRestaurantDetails:PropTypes.func.isRequired,
     deleteRestaurantDetail:PropTypes.func.isRequired

}
const mapStateToProps=(state)=>({
    restaurantdetails:state.restaurantdetails
});

export default connect(mapStateToProps,{getRestaurantDetails,deleteRestaurantDetail})(RestaurantDetail);