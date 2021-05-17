import React from 'react';
import CreateDeliveryBoyButton from './CreateDeliveryBoyButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getDeliveryBoys}from "../../actions/DeliveryBoyActions";
import {Link} from 'react-router-dom';
import {deleteDeliveryBoy} from '../../actions/DeliveryBoyActions';
class DeliveryBoyDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            deliveryBoys:[]
        }
    }
    onDeleteClick=(deliveryBoyId)=>{
        console.log('--------ProjectItemComponent:onDeleteClick Called--------')
        this.props.deleteDeliveryBoy(deliveryBoyId);
        //console.log(id);
    }
    componentDidMount(){
        this.props.getDeliveryBoys();
    }

    render(){
        const {deliveryBoys} =  this.props.deliveryBoys;
        const {deliveryBoy}=this.props;
        return(
            <div className="adservices">
               
               <div className="container">
                <div className="row">
                <div className="col-md-12">
                <h1 className="display-4 text-center"style={{textAlign:'center', color:'white', marginTop:'30px', fontFamily: 'sans-serif-medium'}}><b>Delivery Boys List</b></h1>
               <br/>
               &nbsp;
               <Link to="/addDeliveryBoy" className="btn btn-primary btn btn-info"><h5>Create New Delivery Boy</h5></Link> &nbsp;
               <Link to="/RestaurantOwnerDashboard" className="btn btn-primary btn btn-info"><h5>Restaurant Owner Dashboard</h5></Link>
               <br/>
               <hr/>
               <div className = "row">
                        <table  className = "table table-striped table-bordered table-success table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Identifier</th>
                                    <th>Phone Number</th>
                                    <th>Email Id</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                console.log(deliveryBoys),
                                    deliveryBoys.map(
                                        (deliveryBoy) => 
                                        <tr key = {deliveryBoy.deliveryBoyId}>
                                             <td> {deliveryBoy.deliveryBoyName} </td>   
                                             <td> {deliveryBoy.deliveryBoyIdentifier}</td>
                                             <td> {deliveryBoy.deliveryBoyPhoneNumber}</td>
                                             <td> {deliveryBoy.deliveryBoyEmail}</td>
                                             
                                             <td>
                                                 <Link to={"/updateDeliveryBoy/"+deliveryBoy.deliveryBoyId} className="btn btn-sm btn-info">Update </Link>&nbsp;&nbsp;&nbsp;
                                                 <button className="btn btn-sm btn-danger" onClick={this.onDeleteClick.bind(this,deliveryBoy.deliveryBoyId)}>Delete </button>&nbsp;&nbsp;&nbsp;
                                                 <Link to={"/viewDeliveryBoy/"+deliveryBoy.deliveryBoyId} className="btn btn-sm btn-info" >View </Link>&nbsp;&nbsp;&nbsp;
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div></div></div>
            </div>
        );
    }
}

DeliveryBoyDashboard.propTypes={
    getDeliveryBoys:PropTypes.func.isRequired,
    deleteDeliveryBoy:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    deliveryBoys:state.deliveryBoys
});
export default connect(mapStateToProps,{getDeliveryBoys,deleteDeliveryBoy})(DeliveryBoyDashboard);