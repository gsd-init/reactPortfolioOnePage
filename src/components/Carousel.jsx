import React, {useRef, useState} from "react"
import Slider from "react-slick"

import { Row, Col } from 'react-bootstrap'
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";



import myResume from "../files/resumeTestDev.pdf";
import BikcraftImg from "../img/bikcraft-img$.jpg"
import RestImg from "../img/rest-img$.jpg";
import LarryImg1 from "../img/larry-img.png";
import LarryImg2 from "../img/larry-img2.png";
import LarryImg3 from "../img/larry-img3$.png";
import { Container } from "react-bootstrap";


const Carousel = (props) => {
    const { newsRef } = props;
    let slider = null;
    

  
    const next = () => {
      slider.slickNext();
    };
    const previous = () => {
      slider.slickPrev();
    };

    const settings2 = {
        arrows: true,
        swipeToSlide: true,
        
        
    }
  
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      swipeToSlide: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 4,
            initialSlide: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
          },
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
          },
        },
      ],
    };
  
    return (
      <>      
      <Container fluid className="container-1">
        <Row>
          <Col></Col>
          <Col xl={8}>
            <header className="header">
              <div className="header-intro">
                <div className="header-content">
                  <div  className="btnteste" id="btn">
                    <span className="noselect">
                      <a href="#projects-section"  alt="teste">Projects</a>
                    </span>
                  </div>
          <div className="intro-content">
          <div id="intro-title"><h1 >Hi, I'm Gabriel</h1></div>
          <div><p className="intro-text">
            I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit amet conLorem ipsum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit ametLorem ipsum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit ametLectetur, adipisicing elit. Doloum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit amet conLorem ipsum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit ametLorem ipsum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit ametLectetur, adipisicing elit. Doloum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit amet conLorem ipsum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit ametLorem ipsum dolor I'm a Front End developer who loves to work with React.js and Wordpress theme build.
            Lorem ipsum dolor sit ametLectetur, adipisicing elit. Dolo
          </p>       
          </div>
          </div>
          <div className="btns-download-open">        
            <div className="btn-download-open">
                <a href={myResume} download >Download CV/cover-letter</a>
              </div>  
            <div className="btn-download-open">
                <a href={myResume} download >Open CV/cover-letter</a>
              </div>    
              </div>               
          
          </div>       
          </div>
          </header>
          </Col>
          <Col></Col>
        </Row>

        <Row>
        <Col></Col>
          <Col xl={11}>
          <section id="projects-section">
            <Slider ref={(c) => (slider = c)} {...settings} className="carousel-all">

              <div className="projects-card">
                <img className="card-img" src={BikcraftImg} alt="img"/>
                <h2 className="card-title">Bikcraft</h2>
                <p className="card-description">project description what is about project description what is about project description what is about </p>
                <div className="projects-card--links">
                  <a href="https://github.com/gsd-init/e-shoes" alt="Repo">Repo</a>
                  <a href="https://github.com/gsd-init/e-shoes">Project</a>
                </div>
              </div> 

        <div className="projects-card">                
        <div>  
          <img className="card-img" src={RestImg} alt="img"/>          
            <h2 className="card-title">Rest</h2>
            <p className="card-description">project description what is about project description what is about project description what is about </p>
          </div>         
          <div className="projects-card--links">
            <a href="https://github.com/gsd-init/e-shoes" alt="Repo">Repo</a>
            <a href="https://github.com/gsd-init/e-shoes">Project</a>
          </div>          
        </div>

        <div className="projects-card">
          <div className="larry-imgs"><Slider {...settings2} className='larry-imgs'>
            <img className="card-img" src={LarryImg1} alt="img"/>
            <img className="card-img" src={LarryImg2} alt="img"/>
            <img className="card-img" src={LarryImg3} alt="img"/>
          </Slider></div>
          <div>           
            <h2 className="card-title">Larry Linton</h2>
            <p className="card-description">project description what is about project description what is about project description what is about </p>
            </div>
          <div className="projects-card--links">
            <a href="https://github.com/gsd-init/e-shoes" alt="Repo">Repo</a>
            <a href="https://github.com/gsd-init/e-shoes">Project</a>
          </div>   
                
        </div> 
        <div className="projects-card">                
        <div>  
          <img className="card-img" src={BikcraftImg} alt="img"/>          
            <h2 className="card-title">Bikcraft</h2>
            <p className="card-description">project description what is about project description what is about project description what is about </p>
          </div>      
          <div className="projects-card--links">
            <a href="https://github.com/gsd-init/e-shoes" alt="Repo">Repo</a>
            <a href="https://github.com/gsd-init/e-shoes">Project</a>
          </div>          
        </div> 
        <div className="projects-card">                 
        <div>  
          <img className="card-img" src={BikcraftImg} alt="img"/>          
            <h2 className="card-title">Bikcraft</h2>
            <p className="card-description">project description what is about project description what is about project description what is about </p>
          </div>         
          <div className="projects-card--links">
            <a href="https://github.com/gsd-init/e-shoes" alt="Repo">Repo</a>
            <a href="https://github.com/gsd-init/e-shoes">Project</a>
          </div>          
        </div> 
        <div className="projects-card">              
        <div>  
          <img className="card-img" src={BikcraftImg} alt="img"/>          
            <h2 className="card-title">Bikcraft</h2>
            <p className="card-description">project description what is about project description what is about project description what is about </p>
          </div>       
          <div className="projects-card--links">
            <a href="https://github.com/gsd-init/e-shoes" alt="Repo">Repo</a>
            <a href="https://github.com/gsd-init/e-shoes">Project</a>
          </div>          
        </div>
      </Slider>
      
      <div className="buttons">
            <div className="previousBtn" onClick={previous}>
              <FaArrowCircleLeft />
            </div>
            <div className="forwardBtn" onClick={next}>
              <FaArrowCircleRight />
            </div>
            <div className="forwardBtn" id="arrow-up" onClick={next}>
              <FaArrowCircleUp />
            </div>
            <div className="previousBtn" id="arrow-down" onClick={previous}>
              <FaArrowCircleDown />
            </div>
          </div>
      </section>             
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
           <div className="buttons">
            <div className="previousBtn" onClick={previous}>
              <a href="" alt></a>
            </div>
            <div className="forwardBtn" onClick={next}>
              <a href=""></a>
            </div>
          </div>  
          </Col>
        </Row>
      </Container>     
  </>      
    )  
  }

export default Carousel;