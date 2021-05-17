import React from 'react';
import {getOrder,createOrder} from '../../actions/OrderActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UpdateOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            orderId: '',
            userName: '',
            
            userPhone: '',
            userEmailId: '',
            userAddress: ''
           
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updateOrder = {
            orderId:this.props.match.params.orderId,
            userName: this.state.userName,
           
            userPhone: this.state.userPhone,
            userEmailId: this.state.userEmailId,
            userAddress: this.state.userAddress, 
            
        }
console.log(updateOrder.orderId)
     this.props.createOrder(updateOrder,this.props.history);
//     axios.put("http://localhost:8080/api/v2/"+updatedProduct.productId,updatedProduct).then(res=>
// this.props.history.push("/dashboard"))
    }
    cancel(){
        this.props.history.push(`/orderdashboard`);
    }
    componentDidMount(){
        const {orderId} = this.props.match.params;
        console.log(orderId);
       this.props.getOrder(orderId,this.props.history);
      // axios.get("http://localhost:8080/api/v2/"+productId).then(c=>this.setState({prod:c.data}));
  
     }
 
     componentWillReceiveProps(nextProps){
         const {
            orderId,
            userName,
          
            userPhone,
            userEmailId,
            userAddress
           
         }=nextProps.order;
 
         this.setState({
            orderId,
            userName,
            
            userPhone,
            userEmailId,
            userAddress
           
                        
         });
     }
    render(){
        return(
            <div className="adservices">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center" style={{color:"white"}}>Update Order</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Order ID" 
                                    name="orderId" 
                                    onChange={this.onChange}
                                    value={this.state.orderId}
                                    required/>
                            </div>
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="User Name" 
                                    name="userName" 
                                    onChange={this.onChange}
                                    value={this.state.userName}
                                    required/>
                            </div>
                            
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="User Phone" 
                                    name="userPhone" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 and have 10 digits"
                                    onChange={this.onChange}
                                    value={this.state.userPhone}
                                    required/>
                            </div>
                            <div className="form-group">
                               
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="User EmailId" 
                                    name="userEmailId" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                            title="email should be like eg. radha@gmail.com"
                                    onChange={this.onChange}
                                    value={this.state.userEmailId}
                                    required/>
                            </div>
                            <div className="form-group">
                               
                                <textarea 
                                    className="form-control form-control-lg" 
                                    placeholder="User Address" 
                                    name="userAddress" 
                                    onChange={this.onChange}
                                    value={this.state.userAddress}
                                    required></textarea>
                            </div>
                            
                                        <button className="btn btn-success" >Update</button>
                           
                                       
                                        <button className="btn btn-danger"onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
        );
    }
}
UpdateOrder.propTypes = {
    getOrder:PropTypes.func.isRequired,
    createOrder:PropTypes.func.isRequired,
    order:PropTypes.object.isRequired
}

 

const mapStateToProps = state => ({
    order: state.orders.order
  });

 

export default connect(mapStateToProps,{getOrder,createOrder})(UpdateOrder); 