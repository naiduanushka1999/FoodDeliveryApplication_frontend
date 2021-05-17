import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from '../../actions/RegistrationAction';
import Login from './Login.js';
 import {Link} from 'react-router-dom';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            emailId: '',
            password: '',
            contactNo: ''
        }
        //this.onChange=this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);

        this.setState(

            { [event.target.name]: event.target.value }
        );
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            userId: this.state.userId,
            emailId: this.state.emailId,
            password: this.state.password,
            contactNo: this.state.contactNo
        }
       
 
        // TODO :  Call a method to send project on Springboot
        this.props.createUser(newUser, this.props.history);
    
    }
    componentDidMount(){
        document.body.style.backgroundColor="cornsilk";
    }
   
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <br/>
                            <br/>
                            <h3 style={{color:"white"}}><center>Registration Form</center></h3>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="User Id"
                                        pattern="[a-zA-z0-9]{4,9}"
                                    title="UserId must be unique"
                                        name="userId"
                                        onChange={this.onChange}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Email Id"
                                        pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. abcd@gmail.com"
                                        name="emailId"
                                        onChange={this.onChange}
                                        value={this.state.emailId}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Contact Number"
                                        pattern="[6-9]{1}[0-9]{9}"
                                    title="Contact number should be 10 digits"
                                        name="contactNo"
                                        onChange={this.onChange}
                                        value={this.state.contactNo}
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        pattern="[A-Za-z0-9]{3,5}[@][0-9]{1,4}"
                                        title="Password must be strong"
                                        name="password"
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        required
                                    />
                                </div>
                                
                               
                                <input type="submit" value ="Sign Up" className="btn btn-primary btn-info"/>
                              
    
                                <br/>
                                <br/>
                                <small><h5 style={{color:"white"}} >Already Have an Account? <Link to={"/Userlogin"} className="btn btn-info"> Login </Link></h5></small>
                    </form>
                            
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
AddUser.propTypes = {
    createUser: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });

export default connect(mapStateToProps, { createUser,Link })(AddUser);