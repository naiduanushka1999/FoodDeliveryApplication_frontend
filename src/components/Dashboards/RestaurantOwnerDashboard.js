import React from 'react';
import {Link} from 'react-router-dom';
class RestaurantOwnerDashboard extends React.Component{
    render(){
        return(
            <div className="adservices">
            <div className="container">
            <br/>
                <br/>
                   <div> <center><h1 style={{color:"white"}}>Restaurant Owner Services</h1></center></div><hr/>
                   <br/>
                   <br/>
            <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the order details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/orderDashboard" className="btn btn-lg btn-info">Order Details</Link><hr/>
                    </div>
                    <hr/>
                    </div>
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the delivery boy details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/RestaurantdeliveryBoyDashboard" className="btn btn-lg btn-info">Delivery Boy Details</Link>
                    </div>


                
                
                    </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/><br/><br/><br/>
            </div>
        )
    }
}
export default RestaurantOwnerDashboard;
