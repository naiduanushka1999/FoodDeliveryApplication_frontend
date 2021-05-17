
/*import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {findById,login} from '../../actions/LoginAction';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            show:false,
        }
       
    }
   
 
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
        this._getData()
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
       
        const res = {
            userId: this.state.userId,
            password: this.state.password,
        };
        
        this.props.findById(res, this.props.history);

    }
    Login=()=>{
        this.props.history.push("/Dashboard");
} 
handlesubmit = () => {

    this.props.history.push('/AdminDashBoard');
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
                        <h3 style={{color:"white"}}><center>Admin Login</center></h3>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="User Id"
                                        name="userId"
                                        onChange={this.onChange}
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg "
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>

                              {/* <center> <Link to="/AdminDashboard" className="btn btn-primary btn btn-info">Login</Link></center>
                              <button type="button" 
                                className="btn btn-primary btn btn-info"
                                 onClick={this.handlesubmit}><center> Login</center></button>           
                               
                                
                                
                            </form>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/><br/><br/><br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
Login.propTypes = {
    findById: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });

export default connect(mapStateToProps, { findById })(Login);*/




import React from 'react';
import { Button } from 'react-bootstrap';
//import './LoginForm.css'
import LoginService from '../../Services/LoginService';
//import Img24 from '../Images/img24.png'



const usernameRegex = RegExp(
  /^([a-zA-Z0-9@#*]{8,})$/
);
const passwordRegex = RegExp(
  /^([a-zA-Z0-9@#*]{8,})$/
);


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};



class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
      
      username: null,
      password: null,
      admin:{},
      formErrors: {
      
           
           username: "",
           password: "",
        
      }
    };
    this.validateLogin =this.validateLogin.bind(this);
  }

  validateLogin=(e)=>
  {
    e.preventDefault();
    let adminLogin={
      username:this.state.username,
      password:this.state.password
    };
    console.log('adminLogin=>' + JSON.stringify(adminLogin));
 
 
    LoginService.adminLogin(adminLogin).then((res)=>{
      
       if(res.status===200 && res.data.includes("SUCCESSFULL"))
       {
          this.setState({ applicant: res.data });
          localStorage.setItem("token",this.state.applicant.applicandId);
          console.log("applicant=>"+JSON.stringify(this.state.applicant));
          alert("Login success!");
          this.props.history.push('/AdminDashboard');


       } 
       else if(res.data.includes("CREDENTIALS")){
         this.setState({admin: res.data});
         console.log("admin=>"+JSON.stringify(this.state.admin));
         alert("Login failed! Enter valid credentials.");
        this.props.history.push('/login');
        
       }
  }) 
      
   }
    
   
  
 
   
 


  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        username: ${this.state.username}
        password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
    

        
      case "username":
        formErrors.username = usernameRegex.test(value)
          ? ""
          : "*Invalid username";
        break;
      case "password":
        formErrors.password =passwordRegex.test(value)
        ? ""
        : "*Invalid password!";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  back(){
    this.props.history.push("/");
}
  

  render() {
    const { formErrors } = this.state;

    return (
      
        <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-4 m-auto">
                    <br/>
                    <br/>
                <h3 style={{color:"white"}}><center>Admin Login</center></h3>
                    <hr />
                    <form onSubmit={this.handleSubmit} noValidate>
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className={formErrors.username.length > 0 ? "error" : null}
                                        className="form-control form-control-lg "
                                        placeholder="Username"
                                        name="username"
                                        onChange={this.handleChange}
                                        onSubmit={this.handleSubmit}
                                        autoComplete="off"
                                        required
                                    />
                                     {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
               </div>

                     <div className="form-group">
                     <input
                         type="password"
                        className={formErrors.password.length > 0 ? "error" : null}
                        className="form-control form-control-lg "
                         placeholder="Password"
                          name="password"
                          onChange={this.handleChange}
                           onSubmit={this.handleSubmit}
                             required
                     />
                  {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
        
            </div>

            <Button type="submit" variant="primary" name="login" value="LOGIN" onClick={this.validateLogin} onSubmit={this.handleSubmit}>LOGIN</Button>
             <button className="btn btn-danger ml-3"  onClick={() => this.back()}>CANCEL</button>
     </form>

     </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </div>

        
    );}
                  }
  


export default Login;
      
         