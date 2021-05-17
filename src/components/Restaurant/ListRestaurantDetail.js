import React from 'react';
import CreateRestaurantDetailButton from './CreateRestaurantDetailButton';
import RestaurantDetail from '../Restaurant/RestaurantDetail';
import AdminDashboard from '../Dashboards/AdminDashboard';
import {Link} from 'react-router-dom';
class ListRestaurantDetail extends React.Component{
      render(){       
        return(           
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center"style={{textAlign:'center', color:'white', marginTop:'30px', fontFamily: 'sans-serif-medium'}}>Restaurant Details</h1>
                        <br />
                        <CreateRestaurantDetailButton/>&nbsp;&nbsp;
                        <Link to="/AdminDashboard" className="btn btn-primary btn btn-info"><h5>Admin Dashboard</h5></Link>
                        <hr />
                       <RestaurantDetail/>                   
                    </div>
                </div>
            </div>   
            </div>     
        );
    }
}
export default ListRestaurantDetail;