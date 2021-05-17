
import React from 'react';
import CreateFoodCartButton from './CreateFoodCartButton';
import FoodCartItem from './FoodCartItem';
import {Link} from 'react-router-dom';
class Dashboard extends React.Component{
      render(){       
        return(      
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center"style={{textAlign:'center', color:'white', marginTop:'30px', fontFamily: 'sans-serif-medium'}}>FoodCart List</h1>
                        <br />
                     
               <Link to="/AdminDashboard" className="btn btn-primary btn btn-info"><h5>Admin Dashboard</h5></Link>
                        <hr />
                       <FoodCartItem/>                   
                    </div>
                </div>
            </div>   
            </div>
               
        );
    }
}
export default Dashboard;
