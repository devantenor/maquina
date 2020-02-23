import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image from "./card.png"

//preciso encontrar outro pacote 



class Carrossel extends Component {
    
    render() {
    return (
            <Carousel>
            <div>
                <img src={image} alt="foto da coleção" ></img>
                <p>mais uma roupa</p>
            </div>
            <div>
                <img src={image} alt="foto da coleção" ></img>
                <p>mais uma roupa</p>
            </div>
            <div>
                <img src={image} alt="foto da coleção" ></img>
                <p>mais uma roupa</p>
            </div>
            </Carousel>
    )}
}

export default Carrossel