import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard({ product }) {
  const { title, images, description, price } = product;

  return (
    <Card style={{ width: '300px', height: '550px' }}>
      <Card.Img 
        variant="top" 
        src={images} 
        alt={title} 
        style={{ width: '100%', height: '50%', objectFit: 'cover' }} 
      />
      <Card.Body className='d-flex flex-column justify-content-between' style={{ height: '50%' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text> {price}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}
