

import React from 'react';
import {Link} from 'react-router-dom';
class AdminDashboard extends React.Component{

    
    render(){
        return(
            <div className="adservices">
            <div className="container"  style={{textAlign:"left"}}>
                <br/>
                <br/>
                   <div> <center><h1 style={{color:"white"}}>Admin Services</h1></center></div><hr/>
                    
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the restaurant details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                   
                    <Link to="/listRestaurantDetail" className="btn btn-lg btn-info">Restaurant Details</Link>
                    <hr/>
                    </div>
                    
                    </div>

                    
                    
                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the payment details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/paymentDashboard" className="btn btn-lg btn-info">Payment Details</Link><hr/>
                    </div>
                    
                    </div>
                    

        

                    <div className="row">
                    <div className="col-md-8">
                       <p style={{color:"white"}}><h4><center>Use this service to check all the food cart details</center></h4></p>
                    </div>
                    <div className="col-md-4">
                    <Link to="/foodCartDashboard" className="btn btn-lg btn-info">FoodCart Details</Link>
                    </div>
                    
                    </div>

                   
                    </div>
               
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
            </div>
        )
    }
}
export default AdminDashboard;

