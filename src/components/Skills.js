import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import reactImg from "../assets/img/react.png";
import pythonImg from "../assets/img/python.png";
import bashImg from "../assets/img/bash.png";
import cyberImg from "../assets/img/cyber.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '200px'}}>
                                <img src={pythonImg} alt="Python" style={{height: '120px', width: '120px', objectFit: 'contain'}} />
                                <h5 style={{marginTop: '10px', marginBottom: '0'}}>Python</h5>
                            </div>
                            <div className="item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '200px'}}>
                                <img src={bashImg} alt="Bash" style={{height: '120px', width: '120px', objectFit: 'cover', objectPosition: 'center'}} />
                                <h5 style={{marginTop: '10px', marginBottom: '0'}}>Bash</h5>
                            </div>
                            <div className="item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '200px'}}>
                                <img src={reactImg} alt="React" style={{height: '120px', width: '120px', objectFit: 'contain'}} />
                                <h5 style={{marginTop: '10px', marginBottom: '0'}}>Web Development</h5>
                            </div>
                            <div className="item" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '200px'}}>
                                <img src={cyberImg} alt="Cybersecurity" style={{height: '120px', width: '120px', objectFit: 'contain'}} />
                                <h5 style={{marginTop: '10px', marginBottom: '0'}}>Cybersecurity</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
