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
                        <h3><center>User Login</center></h3>
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

                              <center>  <input type="submit" value="Login" className="btn btn-primary btn btn-info" /></center>
                                          
                               
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
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                        <h4><center>User Login</center></h4>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="User Id"
                                        name="userId"
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

                                <input type="submit" value="Login" className="btn btn-primary btn btn-info" />
                                          
                               
                                
                                <small><center><h6 > New User? <Link to={"/addUser"} className="btn btn-info"> Sign Up </Link> </h6></center></small>
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

export default connect(mapStateToProps, { findById })(Login);*/




import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {findById,login} from '../../actions/LoginAction';
import axios from 'axios';
import {Link} from 'react-router-dom';
import history from '../../history';
import LoginService from '../../Services/LoginService';

class Login extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            show:false,
        }
        this.handlesubmit = this.handlesubmit.bind(this);
    };
    handleSetuser = e => {

        this.setState({ userId: (e.target.value) })
    }
    handleSetpassword = e => {

        this.setState({ password: (e.target.value) })
    }


    handleLoginsubmit = () => {
        var id = this.state.userId;
        var password = this.state.password;
        console.log(id, password);
        if (id !== '' && password !== '') {
        
                LoginService.validate(id, password).then(res => {

                console.log(res.data);
              alert("Login success")
                this.props.history.push("/userRestaurantDetail")
          
            })

        } else  {
            if (this.state.userId === '') {
                this.setState({ userIdMessage: false })
            }

            if (this.state.password === '') {
                this.setState({ passwordMessage: false })
            }
            alert("Enter valid credentials")
        }

console.log(this.state.userId);
        console.log(this.state.password);

    }

    handlesubmit = () => {

        this.props.history.push('/login');
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value, passwordMessage: true });
        console.log(this.state.password)
    }
    


    handlecheckPassword = (e) => {
        if (e.target.value !== '') {
            if (/^(?=.[\d])(?=.[A-Z])(?=.[a-z])(?=.[!@#$%^&])[\w!@#$%^&]{8,}$/.test(e.target.value)) {

                this.setState({ passwordvalid: true, passwordMessage: true });
            } else {
                this.setState({ passwordvalid: false });
            }
        } else {
            this.setState({ passwordMessage: false });
        }
    }
    componentDidMount(){
        document.body.style.backgroundColor="cornsilk";
    }
    handlesubmit=()=>{
        var id=this.state.userId;
        var password=this.state.password;
        console.log(id,password);
        this.setState({show:true});
        if(id&&password)
        {
            LoginService.validate(id, password)
            .then(
                user => { 
                    console.log(user.data);
                    if(user.data==='sucess login')
                    {
                  
                    history.push({pathname:'/Restaurantdetails',state:{data:user.data}});
                    }
                    else{
                       
                       
                        history.push({pathname:'/login',state:{data1:user.data}});
                    
                        //PromiseRejectionEvent('invalid data');

                    }
        })

    };}

    render() {
        const boolean = this.props.location.state;

        console.log(boolean);
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <br/>
                            <br/>
                        <h3 style={{color:"white"}}><center>Login</center></h3>
                            <hr />
                            <form onSubmit={this.handlesubmit}>
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="User Id"
                                        name="userId"
                                        onChange={this.handleSetuser}
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
                                        onChange={this.handleSetpassword}
                                        required
                                    />
                                </div>
                                <button type="button" 
                                className="btn btn-primary btn btn-info"
                                 onClick={this.handleLoginsubmit}><center> Login</center></button>      
                               
                                
                                <small><center><h5 style={{color:"white"}}> New User? <Link to={"/addUser"} className="btn btn-info"> Sign Up </Link> </h5></center></small>
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


export default Login;