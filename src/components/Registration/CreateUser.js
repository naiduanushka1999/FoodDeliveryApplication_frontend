import React  from 'react';
import {Link} from 'react-router-dom';
const CreateUser = () =>{
    return(

        <React.Fragment>
            <Link to="/addUser" className="btn btn-lg btn-info">
                Create a User
            </Link>
            <Link to="/login" className="btn btn-lg btn-info">
                Login
            </Link>
           
        </React.Fragment>        
    );
}

export default CreateUser;