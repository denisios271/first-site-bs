import React from "react";
import { Slider } from "../Components/Slider";
import { Jumbotron } from "../Components/Jumbotron";
import { Container,Row , Col ,Card , Button} from "react-bootstrap";
import space from '../space.jpg';
import mountains from '../mountains.jpg';
import ocean from '../ocean.jpg';
import { Styles } from "../Components/Jumbotron";


export const Home = () => (

<>
    <Slider/>
        <Container style = {{paddingTop:'2rem',paddingBottom:'2rem'}}>
            <Row>
                <Col>
                    <Card style = {{width :'18rem'}}>
                        <Card.Img variant="top" src = {ocean}/>
                        <Card.Body>
                            <Card.Title>WebDevBlog</Card.Title>
                            <Card.Text>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Card.Text>
                            <Button variants ="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style = {{width :'18rem'}}>
                        <Card.Img variant="top" src = {mountains}/>
                        <Card.Body>
                            <Card.Title>WebDevBlog</Card.Title>
                            <Card.Text>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Card.Text>
                            <Button variants ="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style = {{width :'18rem'}}>
                        <Card.Img variant="top" src = {space}/>
                        <Card.Body>
                            <Card.Title>WebDevBlog</Card.Title>
                            <Card.Text>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Card.Text>
                            <Button variants ="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom:'30px'}}>
            <Row>
                <Col md={7}>
                    <img src={ocean} alt= "ocean" height={400}/>
                </Col>
                <Col md={5}>
                    <h2>Web Developer Blog</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque quis gravida neque. Pellentesque iaculis lacus sed nibh rhoncus eleifend.
                Integer cursus, elit sed maximus tempor, tortor tortor euismod quam, id commodo ipsum felis at dolor.
                Phasellus aliquet purus metus, quis sodales sapien tempor non.
                Nam dolor nisl, posuere nec fermentum in, elementum ut ante.
                Praesent nec orci at erat tincidunt rutrum in ut ante. Donec vel porta metus, tempor blandit est.
                Vivamus dolor velit, dapibus ac ultricies lacinia, lobortis vitae ligula.
                Fusce commodo lectus iaculis, accumsan metus quis, volutpat odio.
                Maecenas ac turpis mollis, ornare tellus quis, posuere neque.
                In condimentum ornare volutpat.</p>
                </Col>
            </Row>
        </Container>
</>
)