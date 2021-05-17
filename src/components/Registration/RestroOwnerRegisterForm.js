import React,{Component} from 'react'
import LoginService from '../../Services/LoginService'
import {Link} from 'react-router-dom';
//import Img16 from '../Images/img16.jpeg';


const emailRegex = RegExp(
  /^[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}$/
);
const passwordRegex = RegExp(
  /^([a-zA-Z0-9@#*]{8,})$/
);
 const phoneNoRegex = RegExp(
   /^([987][0-9]{9})$/
 )

 const ownerIdRegex = RegExp(
     /^([a-zA-Z0-9@#*]{8,})$/
 )

 



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



class RestroOwnerRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
      ownerId: null,
      email: null,
      phoneNo: null,
      password: null,
      formErrors: {
      
           ownerId: "",
           email: "",
           phoneNo: "",
           password: "", 
      }
    };

    this.saveRestroOwner=this.saveRestroOwner.bind(this);
  }
    componentDidMount(){

      // step 4
      if(this.state.ownerId === '_add'){
          return
      }
  }
  saveRestroOwner = (e) => {
    e.preventDefault();
    let restroOwner = {ownerId: this.state.ownerId, email: this.state.email, phoneNo: this.state.phoneNo, password: this.state.password};
    console.log('restroOwner => ' + JSON.stringify(restroOwner));

    // step 5
    
        LoginService.createRestroOwner(restroOwner).then(res =>{
      //  < Alert varient="success">login sucess</Alert>
            this.props.history.push('/RestaurantOwnerLogin');
            alert("successfull registered!");
        });
        
    }
    
  

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Owner Id: ${this.state.ownerId}
        Email: ${this.state.email}
        Phone No: ${this.state.phoneNo}
        Password: ${this.state.password}
      `);
    } else {
        alert("Registration Failed!");
      //console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
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
       :"*Invalid Id!Minimum 8 characters required";
        break;

      case "phoneNo":
        formErrors.phoneNo = phoneNoRegex.test(value)
         ? ""
          :"*Invalid phoneNo!";
        break;

        
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "*Invalid email address";
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
    this.props.history.push("/RestaurantOwnerLogin");
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
                <h3 style={{color:"white"}}><center>Restaurant Owner Registration</center></h3>
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
                className={formErrors.email.length > 0 ? "error" : null}
                className="form-control form-control-lg "
                type="email"
                name="email"
                title="Enter email @example sharma12@gmail.com"
                placeholder="Email "
                pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
             
            <div className="form-group">
             
             <input
               className={formErrors.phoneNo.length > 0 ? "error" : null}
               className="form-control form-control-lg "
               type="phoneNo"
               name="phoneNo"
               placeholder="Phone No"
               autoComplete="off"
               pattern="([987][0-9]{9})"
               title="Enter phoneNo @example 9********6"
               value={this.state.phoneNo}
               onChange={this.handleChange}
               required
             />
             {formErrors.phoneNo.length > 0 && (
               <span className="errorMessage">{formErrors.phoneNo}</span>
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
            <br/>
            <div>
            <input type="submit" value ="Register" className="btn btn-primary btn-info"onClick={this.saveRestroOwner}/>
           
            <small><h4 style={{color:"white"}} >Already Registered? <Link to={"/RestaurantOwnerLogin"} className="btn btn-info"> Login </Link></h4></small>
          </div>
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
        
    )
  }
}


export default RestroOwnerRegisterForm;