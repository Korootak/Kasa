import './carousel.css'
function Carousel() {
    return (
      <div className="carousel">
         <img className="carousel-item" src={require('../../assets/Background.png')} alt="" />          
            <div className='left-control'>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.0399 7.78319L39.9199 0.703186L0.359863 40.3032L39.9599 79.9032L47.0399 72.8232L14.5199 40.3032L47.0399 7.78319Z" fill="white"/>
            </svg> 
            </div>
            <div className='right-control'>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z" fill="white"/>
            </svg>
            </div>
      </div>
    );
  }
  
  export default Carousel;
  