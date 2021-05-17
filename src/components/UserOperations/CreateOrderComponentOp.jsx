import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addOrder} from '../../actions/actionsOrder';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderId: '',
            userName: '',
            userPhone:'',
            userEmailId: '',
            userAddress:''
           
        }
        this.changeOrderIdHandler = this.changeOrderIdHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserPhoneHandler = this.changeUserPhoneHandler.bind(this);
        this.changeUserEmailIdHandler = this.changeUserEmailIdHandler.bind(this);
        this.changeUserAddressHandler = this.changeUserAddressHandler.bind(this);
       this.saveOrder = this.saveOrder.bind(this);
      //this.onSubmit= this.onSubmit.bind(this);
      
    }

   
    saveOrder = (e) => {
        e.preventDefault();
        let order = {orderId:this.state.orderId, 
            userName: this.state.userName, 
            userPhone: this.state.userPhone,
            userEmailId: this.state.userEmailId,     
            userAddress: this.state.userAddress
           
        };
        console.log('Order => ' + JSON.stringify(order));
        this.props.addOrder(order);
        //this.props.history.push("/Order");
        this.props.history.push("/payNow");
    }


    
    
        
    
    changeOrderIdHandler= (event) => {
        this.setState({orderId: event.target.value});
    }

    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changeUserPhoneHandler= (event) => {
        this.setState({userPhone: event.target.value});
    }

    changeUserEmailIdHandler= (event) => {
        this.setState({userEmailId: event.target.value});
    }

    changeUserAddressHandler= (event) => {
        this.setState({userAddress: event.target.value});
    }
   
    cancel(){
        this.props.history.push('/addToFoodCart');
    }

    
    render() {
        return (
            <div className="backimg">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    // this.getTitle()
                                }
                                  <h3 className="text-center" >Add Order</h3>

                                <div className = "card-body">
                                    <form >
                                        <div className = "form-group">
                                            <label> Order ID </label>
                                            <input placeholder="Unique Order ID" 
                                                   name="orderId" className="form-control"
                                                   value={this.state.orderId} 
                                                   onChange={this.changeOrderIdHandler}
                                                   autoComplete="off"
                                                   pattern="[0-9]{1,10}" title="eg: 10"
                                                   required/>
                                                   
                                        </div>
                                        <div className = "form-group">
                                            <label> User Name </label>
                                            <input placeholder="Enter User Name" 
                                                   name="userName" className="form-control" 
                                                   value={this.state.userName} 
                                                   onChange={this.changeUserNameHandler}
                                                   autoComplete="off"
                                                   pattern="[a-zA-Z ]{5,15}"
                                                   title="Name should be as given @example:Rahul Roy"
                                                   required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> User Phone </label>
                                            <input placeholder="Enter User Phone" 
                                                   name="userPhone" className="form-control" 
                                                   value={this.state.userPhone} 
                                                   onChange={this.changeUserPhoneHandler} autoComplete="off"
                                                   pattern="([987][0-9]{9})"
                                                   title="Enter valid phone number such as @example 94******12 "
                                                   required/>
                                        </div>

                                                   <div className = "form-group">
                                            <label> User Email Id</label>
                                            <input placeholder="Enter User Email Id" 
                                                   name="userEmailId" className="form-control" 
                                                   value={this.state.userEmailId} 
                                                   onChange={this.changeUserEmailIdHandler} autoComplete="off"
                                                   pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                                   title="Enter valid email id such as @example prakashshinde12@gmail.com"
                                                   required/>

                                        </div>
                                        <div className = "form-group">
                                            <label>User Address</label>
                                            <input placeholder="Enter User Address" 
                                                   name="userAddress" className="form-control" 
                                                   value={this.state.userAddress} 
                                                   onChange={this.changeUserAddressHandler} autoComplete="off"
                                                   required/>
                                        </div>
                                       
                                       <button className="btn btn-success" 
                                                onClick={this.saveOrder}>  Place Order</button>
                                                 
                                        <button className="btn btn-danger" 
                                                onClick={this.cancel.bind(this)} 
                                                style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

CreateOrderComponent.propTypes = {
    addOrder:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps, { addOrder })(CreateOrderComponent);
