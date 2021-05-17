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
            password: ''
        }
        //this.onChange=this.onChange.bind(this);
    }
    // componentDidMount(){
    //     const {userId,password} = this.props.match.params;
    //     this.props.findById(userId,this.props.history);
 
    //  }
 
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
        // fetchDataResto() {
        //     var vm = this
        //     axios.get('/Login')
        //         .then(function (response){
        //             Vue.set(vm.$data, 'model', response.model.data)
        //         })
        // }
        // TODO :  Call a method to send project on Springboot
        this.props.findById(res, this.props.history);

    }
    Login=()=>{
        this.props.history.push("/Dashboard");
}   
componentDidMount(){
    document.body.style.backgroundColor="#FFFFCC";
}
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <br/>
                            <br/>
                        <h3><center>Restaurant Owner Login</center></h3>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="User Id"
                                        name="userId"
                                        autoComplete="off"
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg "
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.onChange}
                                    />
                                </div>

                               <center> <Link to="/RestaurantOwnerDashboard" className="btn btn-primary btn btn-info">Login</Link></center>
                                     <br/>     
                               
                                
                                <small><center><h5 > New User? <Link to={"/addUser"} className="btn btn-info"> Sign Up </Link> </h5></center></small>
                            </form>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, { findById })(Login);


import React, { Component } from 'react'
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
            password: ''
        }
        //this.onChange=this.onChange.bind(this);
    }
    // componentDidMount(){
    //     const {userId,password} = this.props.match.params;
    //     this.props.findById(userId,this.props.history);
 
    //  }
 
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
                        <h3 style={{color:"white"}}><center>Restaurant Owner Login</center></h3>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="User Id"
                                        name="userId"
                                        onChange={this.onChange}
                                        autocomplete="off"
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
                                    />
                                </div>

                               <Link to="/RestaurantOwnerDashboard" className="btn btn-primary btn btn-info">Login</Link>
                                     <br/>
                                       
                               
                                
                                <small><center><h5 style={{color:"white"}}> New User? <Link to={"/RestroOwnerRegisterForm"} className="btn btn-info"> Sign Up </Link> </h5></center></small>
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
import LoginService from '../../Services/LoginService';
import {Link} from 'react-router-dom';




const ownerIdRegex = RegExp(
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



class RestaurantOwnerLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
      ownerId: null,
      password: null,
      owner:{},
      formErrors: {
           ownerId: "",
           password: "",
        
      }
    };
    this.validateLogin =this.validateLogin.bind(this);
  }

  validateLogin=(e)=>
 {
   e.preventDefault();
   let restrologin={
     ownerId:this.state.ownerId,
     password:this.state.password
   };
   console.log('restrologin=>' + JSON.stringify(restrologin));


   LoginService.restrologin(restrologin).then((res)=>{
     

  if(res.status===200 && res.data.includes("SUCCESSFULL"))
  {
      this.setState({ owner: res.data });
      localStorage.setItem("token",this.state.owner.ownerId);
      console.log("owner=>"+JSON.stringify(this.state.owner));
      //alert(this.state.applicant);
      alert("LOGIN SUCCESSFULL!");
     this.props.history.push('/RestaurantOwnerDashboard');
  }
  else{
    this.setState({owner:res.data});
    console.log("owner=>"+JSON.stringify(this.state.owner));
    alert("Login failed! Enter valid credentials");
  
}
})
 }
 

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        OwnerId: ${this.state.ownerId}
        Password: ${this.state.password}
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
        
      case "ownerId":
        formErrors.ownerId = ownerIdRegex.test(value)
          ? ""
          : "*Invalid owner Id";
        break;
      case "password":
        formErrors.password =passwordRegex.test(value)
        ? ""
        : "*Invalid password! Minimum 8 characters required";
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
                <h3 style={{color:"white"}}><center>Restaurant Owner Login</center></h3>
                    <hr />

          <form onSubmit={this.handleSubmit}>
            
            <div  className="form-group">
             
              <input
                className={formErrors.ownerId.length > 0 ? "error" : null}
                className="form-control form-control-lg "
                type="text"
                name="ownerId"
                placeholder="Owner Id"
                pattern="([a-zA-Z0-9@#*]{8,})"
                title="Enter Id @example Sharma@1234"
                onChange={this.handleChange}
                value={this.state.ownerId}
                autoComplete="off"
                required
              />
              {formErrors.ownerId.length > 0 && (
                <span className="errorMessage">{formErrors.ownerId}</span>
              )}
            </div>

            <div className="form-group">
              
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                className="form-control form-control-lg "
                type="password"
                name="password"
                placeholder="Password"
                pattern="([a-zA-Z0-9@#*]{8,})"
                title="Enter password @example Sharma@1234"
                value={this.state.password}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <Button type="submit" variant="primary" name="login" value="LOGIN" onClick={this.validateLogin} onSubmit={this.handleSubmit}>LOGIN</Button>
             <button className="btn btn-danger ml-3"  onClick={() => this.back()}>CANCEL</button><br/>
             <br/>
           <center>  <small><center><h5 style={{color:"white"}}> New User? <Link to={"/RestroOwnerRegisterForm"} className="btn btn-info"> Sign Up </Link> </h5></center></small>
     </center>
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



export default RestaurantOwnerLogin;



      
     