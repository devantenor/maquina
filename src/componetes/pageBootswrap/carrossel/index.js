import  React from 'react';

import logo1 from './imagems/TECHS.png';
import logo2 from './imagems/card.png'
import './index.css'

function Carrossel () {

    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="segundo" className="d-block w-100" src={logo1}  alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img id="segundo" className="d-block w-100" src={logo2} alt="Second slide"></img>
    </div>
    <div  className="carousel-item">
      <img id="terceiro" className="d-block w-100" src={logo1} alt="Third slide"></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</>
    )
}

export default Carrossel;