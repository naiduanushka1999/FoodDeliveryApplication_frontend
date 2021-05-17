import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createPayment} from "../../actions/PaymentAction";
class AddPayment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            paymentMode:'',
            cardNumber:'',
            cardHolderName:'',
            expiryDate:'',
            cvv:'',
            otp:'',
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const newPayment = {
            paymentMode:this.state.paymentMode,
            cardNumber:this.state.cardNumber,
            cardHolderName:this.state.cardHolderName,
            expiryDate:this.state.expiryDate,
            cvv:this.state.cvv,
            otp:this.state.otp,
        }
        console.log(newPayment);
        this.props.createPayment(newPayment);
        this.props.history.push('/paymentDashboard');
    }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center"style={{color:"white"}}>Make Payment form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <select 
                                    className="form-control form-control-lg " placeholder="Mode of Payment" 
                                    name="paymentMode" 
                                    onChange={this.onChange}
                                    value={this.state.paymentMode} 
                                    required > 
                                    <option>Select Card</option>
                                    <option>Credit Card</option>
                                    <option>Debit Card</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="credit/debit card number" 
                                    name="cardNumber" 
                                    onChange={this.onChange}
                                    value={this.state.cardNumber}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Card Holder Name" 
                                    name="cardHolderName" 
                                    onChange={this.onChange}
                                    value={this.state.cardHolderName}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="expiry date (Format: MM/YYYY)"
                                    name="expiryDate" 
                                    onChange={this.onChange}
                                    value={this.state.expiryDate}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="CVV of card" 
                                    pattern="[0-9]{3}"
                                    title="Enter correct CVV eg:- 123"
                                    name="cvv" 
                                    onChange={this.onChange}
                                    value={this.state.cvv}
                                    required/>
                            </div>
                           
                            <div className="form-group">
                                <input 
                                    className="form-control form-control-lg" 
                                    placeholder="OTP sent your mobile number" 
                                    name="otp" 
                                    onChange={this.onChange}
                                    value={this.state.otp}
                                    required/>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-3" />
                            <input type="reset" className="btn btn-danger btn-block mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
AddPayment.propTypes = {
    createPayment:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createPayment})(AddPayment);