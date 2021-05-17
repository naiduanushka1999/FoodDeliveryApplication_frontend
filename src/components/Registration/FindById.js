import React  from 'react';
import {Link} from 'react-router-dom';
const findById = () =>{
    return(

        <React.Fragment>
           
            <Link to="/login" className="btn btn-lg btn-info">
                Login
            </Link>
           
        </React.Fragment>        
    );
}

export default findById;