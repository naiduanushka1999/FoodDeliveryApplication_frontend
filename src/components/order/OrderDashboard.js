import React from 'react';
import CreateOrderButton from './CreateOrderButton';
import Order from './Order';
import {Link} from 'react-router-dom';
class OrderDashboard extends React.Component{
      render(){      
        return(      
            <div className="adservices">    
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center" style={{color:"white"}}>Order Details</h1>
                        <br />
                        <Link to="/RestaurantOwnerDashboard" className="btn btn-primary btn btn-info"><h5>Restaurant Owner Dashboard</h5></Link>
                        {/*<CreateOrderButton/>*/}
                        <hr />
                       <Order/>                  
                    </div>
                </div>
            </div>   
            </div>    
        );
    }
}
export default OrderDashboard;
 