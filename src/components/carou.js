import { Box, Image, Container } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Carou = () => {
  return (
    <Container maxW="container.xl" py="4">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/300x115"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'Black', fontWeight: '700' }}>
              These gray images
            </h3>
            <p style={{ color: 'Red', fontWeight: '700', fontSize: '20px' }}>
              are placeholders
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/300x115"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'Red', fontWeight: '700' }}>
              These gray images
            </h3>
            <p style={{ color: 'Black', fontWeight: '700', fontSize: '20px' }}>
              are placeholders
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default Carou;
