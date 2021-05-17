import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createOrder } from '../../actions/OrderActions';
import classnames from "classnames";
import axios from 'axios';
class AddOrder extends React.Component {
    constructor(props){
        super(props);
        this.state={
            orderId: '',
            userName: '',
            userPhone: '',
            userEmailId: '',
            userAddress: '',
            errors:{},
        }
        this.onChange=this.onChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    onChange(event){
        console.log(event.target.value)
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }
    onSubmit=(event)=>{
        event.preventDefault();
        const newOrder = {
            orderId:this.state.orderId, 
            userName: this.state.userName,
            
            userPhone: this.state.userPhone,
            userEmailId: this.state.userEmailId,
            userAddress: this.state.userAddress
            
        }
        console.log(newOrder);
       
        axios.post ("http://localhost:9000/FoodDeliveryApplication-0.0.1-SNAPSHOT/api/v2/Order",newOrder).then(c=>this.setState({cart:c.data}));
        this.props.history.push('/payNow');

 

    }
    cancel(){
        this.props.history.push(`/addToFoodCart`);
    }

    render() {
        const {errors}=this.state;
        return (
            <div className="backimg">

 

                 <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">                                
                                <div className = "card-body">
                                <center>
                                    <form onSubmit={this.onSubmit}>                                       
                                        <h3 className="text-center">Add Order</h3>
                                         <div className = "form-group">
                                            <label>Order Id </label>
                                            <input placeholder="Order id"
                                             id="orderId"
                                             name="orderId"
                                             className="form-control"

 

                                             pattern="[0-9]{1-15}"
                                             title="id should be a number"
                                             onChange={this.onChange}
                                             value={this.state.orderId}
                                             required />
                                        </div>
                                        <div className = "form-group">
                                            <label>User Name</label>
                                            <input type="text"
                                            placeholder="User Name"
                                             name="userName"
                                             className="form-control"
                                             pattern="[A-Za-z]{1-20}"
                                             title="user name should start with capital letter"
                                             onChange={this.onChange}
                                             value={this.state.userName}                                            
                                             required/>                                              
                                        </div>
                                    
                                        <div className = "form-group">
                                            <label>User Phone</label>
                                            <input  placeholder="User Phone"
                                             name="userPhone"
                                             className="form-control"
                                             pattern="[6-9]{1}[0-9]{9}"
                                             title="phone number should start with 6 to 9 and have 10 digits"
                                             onChange={this.onChange}
                                             value={this.state.userPhone}                                            
                                             required/>                                              
                                        </div>
                                        <div className = "form-group">
                                            <label>User EmailId</label>
                                            <input  placeholder="User EmailId"
                                             name="userEmailId"
                                             className="form-control"
                                             pattern="^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[a-z]"
                                            title="email should be like eg. radha12@gmail.com"
                                             onChange={this.onChange}
                                             value={this.state.userEmailId}                                            
                                             required/>                                              
                                        </div>
                                        <div className = "form-group">
                                            <label>User Address</label>
                                            <textarea 
                                            placeholder="User Address"
                                             name="userAddress"
                                             className="form-control"
                                             onChange={this.onChange}
                                             value={this.state.userAddress}                                            
                                             required></textarea>                                              
                                        </div>
                                       
                                        
                                        <button className="btn btn-success" >Add</button>                                                                        
                                        <button className="btn btn-danger"onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                      
                                    </form>
                                    </center>
                                </div>
                            </div>
                        </div>

 

                   </div>
            </div>
        )
    }
}
AddOrder.propTypes = {
    createOrder:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    errors: state.errors,
  });
export default connect(mapStateToProps,{createOrder})(AddOrder);