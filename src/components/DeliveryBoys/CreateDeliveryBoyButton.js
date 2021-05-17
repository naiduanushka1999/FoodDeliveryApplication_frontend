import React  from 'react';
import {Link} from 'react-router-dom';
const CreateDeliveryBoyButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addDeliveryBoy" className="btn btn-lg btn-info">
                Add New Delivery Boy
            </Link>
        </React.Fragment>        
    );
}

export default CreateDeliveryBoyButton;