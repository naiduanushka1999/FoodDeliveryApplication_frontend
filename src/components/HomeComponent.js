import React from 'react';
//import background from './../background.png';
import home2 from './../Images/home2.jpg';
import background from './../Images/background.png';
import home4 from './../Images/home4.jpg';
import Carousel from 'react-bootstrap/Carousel'


class HomeComponent extends React.Component{
    render(){
        
        
        return(
            <div>
               <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={home2}
                                alt="First slide"
                                width="800"
                                height="600"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={home4}
                                alt="Second slide"
                                width="800"
                                height="600"
                            />
                            <Carousel.Caption>
                             
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={background}
                            alt="Third slide"
                            border="1 px solid black"
                            width="800"
                            height="600"
                            />
                            <Carousel.Caption>
                           
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            </div>
        );
    }
}

export default HomeComponent;