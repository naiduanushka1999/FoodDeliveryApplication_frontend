import React from 'react';
import {getPayment} from '../../actions/PaymentAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewPayment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            paymentMode:'',
            cardNumber:'',
            cardHolderName:'',
            expiryDate:'',
            cvv:'',
            otp:'',
        }
    }
    componentDidMount(){
        const {paymentId} = this.props.match.params;
        this.props.getPayment(paymentId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            id,
            paymentMode,
            cardNumber,
            cardHolderName,
            expiryDate,
            cvv,
            otp,        
         }=nextProps.payment;
 
         this.setState({
            id,
            paymentMode,
            cardNumber,
            cardHolderName,
            expiryDate,
            cvv,
            otp,
                        
         });
     }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center"style={{color:"white"}}>View Payment</h5>
                        <hr />
                        <form>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg "  
                                    name="paymentMode" 
                                    value={this.state.paymentMode}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    name="cardNumber" 
                                    value={this.state.cardNumber}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    name="cardHolderName"
                                    value={this.state.cardHolderName}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    name="expiryDate" 
                                    value={this.state.expiryDate}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    name="cvv" 
                                    value={this.state.cvv}
                                    />
                            </div>
                           
                            <div className="form-group">
                                <input
                                    className="form-control form-control-lg"  
                                    name="otp" 
                                    value={this.state.otp}/>
                            </div>
                            <Link to="/paymentDashboard" className="btn btn-lg btn-info">Ok</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
ViewPayment.propTypes = {
    getPayment:PropTypes.func.isRequired,
    payment:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    payment: state.payments.payment
  });

export default connect(mapStateToProps,{getPayment})(ViewPayment); 