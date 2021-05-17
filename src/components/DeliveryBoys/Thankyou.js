import React from 'react';
import {Link} from 'react-router-dom';
import lastimg1 from '../../Images/lastimg1.jpg'

const Thankyou= ()=>
{
    return(
     <React.Fragment>
         <div className="lastimg" style={{position:"relative", color:"white"}}>
       <center><img src={lastimg1} alt="picture" width="1200" height="500"></img></center>
       <div style={{position:"absolute",top:"50%",left:"30%",transform:"translate(-50%,-50%)"}}><h2>Thank you for your Order!</h2></div>
          </div>
     </React.Fragment>
    );
}
export default Thankyou;