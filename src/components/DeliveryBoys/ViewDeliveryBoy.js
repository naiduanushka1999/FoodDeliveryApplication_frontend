import React from 'react';
import {getDeliveryBoy} from '../../actions/DeliveryBoyActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewDeliveryBoy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            deliveryBoyName:'',
            deliveryBoyIdentifier:'',
            deliveryBoyPhoneNumber:'',
            deliveryBoyEmail:'',
        }
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
                        <h5 className="display-4 text-center" style={{color:"white"}}>View Delivery Boy</h5>
                        <hr />
                        <br/>
                        <form>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Delivery Boy Name" 
                                    name="deliveryBoyName" 
                                    value={this.state.deliveryBoyName}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Delivery Boy Identifier" 
                                    name="deliveryBoyIdentifier" 
                                    value={this.state.deliveryBoyIdentifier}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Phone Number" 
                                    name="deliveryBoyPhoneNumber"
                                    value={this.state.deliveryBoyPhoneNumber}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Email Id" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. radha@gmail.com"
                                    name="deliveryBoyEmail" 
                                    value={this.state.deliveryBoyEmail}
                                    />
                            </div>
                           
                            <Link to="/deliveryBoyDashboard" className="btn btn-lg btn-info">Ok</Link>
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
ViewDeliveryBoy.propTypes = {
    getDeliveryBoy:PropTypes.func.isRequired,
    deliveryBoy:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    deliveryBoy: state.deliveryBoys.deliveryBoy
  });

export default connect(mapStateToProps,{getDeliveryBoy})(ViewDeliveryBoy); 