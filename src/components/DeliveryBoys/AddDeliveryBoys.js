import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createDeliveryBoy } from '../../actions/DeliveryBoyActions';
import classnames from "classnames";

class AddDeliveryBoy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deliveryBoyName: "",
            deliveryBoyIdentifier: "",
            deliveryBoyPhoneNumber: "",
            deliveryBoyEmail: "",
            errors:{}
        }
        //this.onChange=this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        console.log(nextProps);
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors.error });
        }
    }
    onChange = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        );
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newDeliveryBoy = {
            deliveryBoyName: this.state.deliveryBoyName,
            deliveryBoyIdentifier: this.state.deliveryBoyIdentifier,
            deliveryBoyPhoneNumber: this.state.deliveryBoyPhoneNumber,
            deliveryBoyEmail: this.state.deliveryBoyEmail
        }
        console.log(newDeliveryBoy);
        this.props.createDeliveryBoy(newDeliveryBoy, this.props.history);

    }
    render() {
        const {errors} = this.state;
        //console.log(error);
        return (
            <div className="adservices">
            <div className="deliveryBoy">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center" style={{color:"white"}}>Create Delivery Boy form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg",{"is-invalid":errors.deliveryBoyName})}
                                        placeholder="Delivery Boy Name"
                                        name="deliveryBoyName"
                                        onChange={this.onChange}
                                        value={this.state.deliveryBoyName}
                                        pattern="[a-zA-Z][a-zA-Z]{3,}"
                                        title="Enter name such as @example Prakash Shinde"
                                        required
                                    />
                                    {errors.deliveryBoyName && (
                                        <div className="invalid-feedback">
                                            {errors.deliveryBoyName}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Unique  Delivery Boy ID"
                                        name="deliveryBoyIdentifier"
                                        onChange={this.onChange}
                                        value={this.state.deliveryBoyIdentifier}
                                        title="Enter identifier such as @example DB01"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        name="deliveryBoyPhoneNumber"
                                        placeholder="Delivery Boy Phone Number"
                                        onChange={this.onChange}
                                        value={this.state.deliveryBoyPhoneNumber}
                                        pattern="([987][0-9]{9})"
                                        title="Enter valid phone number such as @example 94******12 "
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        name="deliveryBoyEmail"
                                        placeholder="Delivery Boy Email"
                                        onChange={this.onChange}
                                        value={this.state.deliveryBoyEmail}
                                        pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                        title="Enter valid email id such as @example prakashshinde12@gmail.com"
                                        required
                                    />
                                </div>
                                
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
        )
    }
}

AddDeliveryBoy.propTypes = {
    createDeliveryBoy: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.error}
};

export default connect(mapStateToProps, { createDeliveryBoy })(AddDeliveryBoy);