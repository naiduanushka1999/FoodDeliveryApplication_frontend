import React, { Component } from 'react'
import deliveryboygif from "../../Images/deliveryboygif.gif"
import cookingimg from "../../Images/cookingimg.gif"
import {Link} from 'react-router-dom';



export default class Timer extends Component {
    state = {
        minutes: 30,
        seconds: 0,
    }

    

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="brownback">
            <div className="timer">
                <br/>
            
                <Link to="/thankyou" className="btn btn-success"style={{float:"right"}}>OK</Link>
                <br/><h3><b><mark>Status: Confirmed!</mark></b></h3>
                { minutes === 0 && seconds === 0
                    ? <h3  ><mark> Delivered Successfully!</mark></h3>
                    : <h3><b><mark>Expected Time Of Arrival: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</mark></b></h3>
                }
                <div>
                <h3 style={{color:"white",textAlign:"left"}}>&nbsp;&nbsp;&nbsp;Your food is getting ready...<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set back and relax!
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;Will be delivered soon!
                 </h3>
            
                </div>
                <img src={cookingimg}width="500" height="400" style={{float:"left"}}/>                <img src={deliveryboygif} width="500" height="300" style={{display:"right"}}/>
            </div>
            </div>
            

            
        )
    }
}