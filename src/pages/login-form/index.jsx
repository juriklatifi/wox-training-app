
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { dynamicFetch } from '@/helpers/dynamicFetch';
import { useAuthStore } from '@/context/authStore';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function LoginPage() {
  const { login } = useAuthStore();
  const router = useRouter();

  const [postData, setPostata] = useState({ name: null, email: null, password: null });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setPostata({ ...postData, [name]: value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const response = await dynamicFetch('http://localhost:3001/authenticate', 'POST', postData);
    console.log(response, 3333);

    if (response && response.authenticated === false) {
      console.log("Wrong email or password");
      setErrorMessage("Wrong email or password");
      return;
    }

    login(response);

    router.push('/restricted');
  };

  return (
    <Container className='login p-5 g-5'> 
      <Row>
        <Form className='text-center fs-1'> Login Form</Form>
        <Col>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleFormInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" onChange={handleFormInput} />
            </Form.Group>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        

            <Button variant="primary" type="submit">
              Login
            </Button>
            <Link href="/sign-up" > Create an account!</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
