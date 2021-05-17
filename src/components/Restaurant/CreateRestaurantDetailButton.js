import React from 'react';
import {Link} from 'react-router-dom';
const CreateRestaurantDetailButton= ()=>
{
    return(
     <React.Fragment>
          <Link to="/addRestaurantDetail" className="btn btn-lg btn-info">Create RestaurantDetail</Link> 
     </React.Fragment>
    );
}
export default CreateRestaurantDetailButton;