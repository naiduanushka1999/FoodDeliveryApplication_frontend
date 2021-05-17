import React from 'react';
import {getDeliveryBoy,createDeliveryBoy} from '../../actions/DeliveryBoyActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UpdateDeliveryBoy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            deliveryBoyName:'',
            deliveryBoyIdentifier:'',
            deliveryBoyPhoneNumber:'',
            deliveryBoyEmail:'',
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updatedDeliveryBoy = {
            deliveryBoyId:this.state.deliveryBoyId,
            deliveryBoyName:this.state.deliveryBoyName,
            deliveryBoyIdentifier:this.state.deliveryBoyIdentifier,
            deliveryBoyPhoneNumber:this.state.deliveryBoyPhoneNumber,
            deliveryBoyEmail:this.state.deliveryBoyEmail,
        }

      this.props.createDeliveryBoy(updatedDeliveryBoy,this.props.history);

    }
    componentDidMount(){
        const {deliveryBoyId} = this.props.match.params;
        this.props.getDeliveryBoy(deliveryBoyId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
             deliveryBoyId,
             deliveryBoyName,
             deliveryBoyIdentifier,
             deliveryBoyPhoneNumber,
             deliveryBoyEmail
                      
         }=nextProps.deliveryBoy;
 
         this.setState({
             deliveryBoyId,
             deliveryBoyName,
             deliveryBoyIdentifier,
             deliveryBoyPhoneNumber,
             deliveryBoyEmail
                        
         });
     }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center" style={{color:"white"}}>Update Delivery Boy Form</h5>
                        <hr />
                        <br/>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input  
                                   type="text"
                                   className="form-control form-control-lg"
                                   placeholder="Delivery Boy Name"
                                   name="deliveryBoyName"
                                   pattern="[a-zA-Z][a-zA-Z]{3,}"
                                   title="Enter name such as @example Prakash Shinde"
                                   onChange={this.onChange}
                                   value={this.state.deliveryBoyName}
                               />
                            </div>
                            <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Unique Delivery Boy ID"
                                        name="deliveryBoyIdentifier"
                                        title="Enter identifier such as @example DB01"
                                        onChange={this.onChange}
                                        value={this.state.deliveryBoyIdentifier}
                                    />
                            </div>
                            <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="deliveryBoyPhoneNumber"
                                        placeholder="Delivery Boy Phone Number"
                                        pattern="([987][0-9]{9})"
                                        title="Enter valid phone number such as @example 94******12 "
                                        onChange={this.onChange}
                                        value={this.state.deliveryBoyPhoneNumber}
                                    />
                            </div>
                            <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        name="deliveryBoyEmail"
                                        placeholder="Delivery Boy Email"
                                        pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                        title="Enter valid email id such as @example prakashshinde12@gmail.com"
                                        onChange={this.onChange}
                                        value={this.state.deliveryBoyEmail}
                                    />
                            </div>
                            
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        );
    }
}
UpdateDeliveryBoy.propTypes = {
    getDeliveryBoy:PropTypes.func.isRequired,
    createDeliveryBoy:PropTypes.func.isRequired,
    deliveryBoy:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    deliveryBoy: state.deliveryBoys.deliveryBoy
  });

export default connect(mapStateToProps,{getDeliveryBoy,createDeliveryBoy})(UpdateDeliveryBoy); 