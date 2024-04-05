import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'; // Import Image component from Next.js
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-4">
            <Image src="/zara.png" alt="Zara Logo" width={600} height={250} />
          </div>
          <h1 className="text-center mb-4">Welcome to Zara Online Store</h1>
          <p className="text-center">
            Zara offers a wide range of products to fulfill all your needs. Shop with us for quality
            products and excellent service.
          </p>
          <div className="text-center">
            <Button variant="primary" href="/login-form">Login</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
