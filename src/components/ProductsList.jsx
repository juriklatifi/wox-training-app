import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductsCard';

export default function ProductsList({ products }) {
  return (
    <Row className='p-5'>
      {products.map(product => (
        <Col  className=' p-3' key={product.id}  lg={3}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
