import React from 'react';
import { Jumbotron, Container  } from 'reactstrap';
import astronaut from '../images/astronaut_transparent_planet_smaller.png';
import ufo from '../images/ufo.gif';
const Header = () => {
  return (
    <div>
     <Jumbotron fluid>
        <Container fluid>
        <div className="col col-sm-3">
         <img src={astronaut} className="coding-astronaut" alt="coding astronaut" />

        </div>
        <div className="ufo">
        <img src={ufo} className="flying-ufo" alt="flying ufo" />
        </div>
        <div className="jumbotron-text col-md-auto">

          <h1 className="display-3">Hello, I'm Doris Obor</h1>
          <p className="lead">Frontend Developer & UX designer</p>
          </div>

        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;