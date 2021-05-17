import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {deleteRestaurantDetail, getRestaurantDetails} from "../../actions/RestaurantDetailActions";
class UserRestaurantDetail extends React.Component{
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
            <div className="adservices">  
                 <h1 className="display-4 text-center"style={{textAlign:'center', color:'white', marginTop:'30px', fontFamily: 'sans-serif-medium'}}>Restaurant List</h1>     
                        <div className = "row">
                        <table className = "table table-striped table-bordered table-success table-hover" style={{margin:"20px 20px 20px 20px"}}>
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
                            
                            <tbody >
                            
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
                                                 <Link to="/addToFoodCart" className="btn btn-sm btn-info">Select</Link>
                                                
                                                 

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
UserRestaurantDetail.propTypes={
    getRestaurantDetails:PropTypes.func.isRequired,
     deleteRestaurantDetail:PropTypes.func.isRequired

}
const mapStateToProps=(state)=>({
    restaurantdetails:state.restaurantdetails
});

export default connect(mapStateToProps,{getRestaurantDetails,deleteRestaurantDetail})(UserRestaurantDetail);