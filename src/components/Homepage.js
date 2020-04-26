import React from 'react';
import { Jumbotron, Button, Container, CardDeck, Card } from "react-bootstrap";

const Homepage = () => {
    return (
      <>
        <Jumbotron className="jumbo">
          <div className="jumbo-inner">
            <h4>Hi I'm Dwayne</h4>
            <h5>Software Developer</h5>
            <p>
              I am a software developer with a creative vision for design and
              logical thinking of turning static designs into functional dynamic
              components of apps I build.
            </p>
            <a href="https://github.com/DwayneTheFreelancer">
              <Button variant="primary">Github</Button>
            </a>
          </div>
        </Jumbotron>
        <Container className="skills">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="/img/idea.jpg" height="250px" />
              <Card.Body>
                <Card.Title>UX Design</Card.Title>
                <Card.Text>
                  <span>Skills:</span>
                  <p>
                    Wireframes, Figma, CSS Transitions, CSS Animations, Flexbox
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="/img/front-end.jpg" height="250px" />
              <Card.Body>
                <Card.Title>Front-end Development</Card.Title>
                <Card.Text>
                  <span>Skills:</span>
                  <p>
                    HTML 5, CSS 3, SASS, JavaScript, Git, jQuery, React.js
                    Bootstrap 4, Material-UI
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="/img/backend.jpg" height="250px" />
              <Card.Body>
                <Card.Title>Backend Development</Card.Title>
                <Card.Text>
                  <span>Skills:</span>
                  <p>
                    PHP, Laravel, HTTP, MVC, API's, RESTFUL API's, Node.js,
                    Python, SQL, MySQL, PostgreSQL, MongoDB, Heroku, Digital
                    Ocean
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
}

export default Homepage;
