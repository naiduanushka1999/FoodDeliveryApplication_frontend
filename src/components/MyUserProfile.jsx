import React from 'react';

const MyUserProfile = () => {
    return(
        <div className="card col-md-4 offset-md-4" style={{marginTop:'10px'}}>
            <div className="py-4">
                <div class="card  text-white bg-danger mb-3" >
                    <div class="card-body" style={{textAlign:'center'}}>
                        <h3 class="card-title">Sandhya D</h3>
                        <h5 class="card-text">Role : User</h5>
                        <h6 class="card-text"><b>Actions : </b></h6>  
                        <p>Performs Curd operations on FoodCart and Order</p>
                    </div>
                </div>
            </div>
         </div>
    );
  };
  export default MyUserProfile;   