import React from 'react';
import { Container, CardDeck, Card, Button } from "react-bootstrap";

const Portfolio = () => {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>Projects</h1>
        <Container className="skills">
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="/img/dinner-habits.png"
                height="250px"
              />
              <Card.Body>
                <Card.Title>Dinner Habits</Card.Title>
                <Card.Text>
                  <span>Restaurant App</span>
                  <p></p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="light">
                  <a href="https://github.com/DwayneTheFreelancer/Dinner-Habits">
                    Github
                  </a>
                </Button>{" "}
                <Button variant="light">
                  <a href="http://dinner-habits.surge.sh/index.html">Webiste</a>
                </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/img/mtr.png" height="250px" />
              <Card.Body>
                <Card.Title>Munro Tech Repairs</Card.Title>
                <Card.Text>
                  <span>Phone Service App</span>
                  <p></p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="light">
                  <a href="https://github.com/DwayneTheFreelancer/munrotechrepairs">
                    Github
                  </a>
                </Button>{" "}
                <Button variant="light">
                  <a href="https://munrotechrepairs.herokuapp.com">Webiste</a>
                </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/img/TC.png" height="250px" />
              <Card.Body>
                <Card.Title>Trailers & Chill</Card.Title>
                <Card.Text>
                  <span>Movie Finding App</span>
                  <p></p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="light">
                  <a href="https://github.com/DwayneTheFreelancer/trailers-and-chill">
                    Github
                  </a>
                </Button>{" "}
                <Button variant="light">
                  <a href="http://trailer-and-chill.surge.sh/">Webiste</a>
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
}

export default Portfolio;
