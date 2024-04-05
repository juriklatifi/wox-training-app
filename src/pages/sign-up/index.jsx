import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Link from 'next/link';
import { dynamicFetch } from '@/helpers/dynamicFetch';


export default function RegisterPage() {
    const[postData, setPostata]= useState({name: null,email : null, password : null });
    const[responseStatus, setResponseStatus]= useState(null)

    const handleFormInput = (e) => {
        const { name, value} = e.target
        setPostata({...postData, [name]: value})
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()


        const response = await dynamicFetch('http://localhost:3001/user/create', 'POST', postData)
        console.log(response)

        if(response?.error){
            console.log("Unable to create account")
            setResponseStatus(null)
            return
            
        }

        setResponseStatus(true)
       

        //registration logic vith dynamic (post)
    }
    return (
        <Container className='signup p-5'> 
            <Row>
                <Col>
                    <Form className='text-center fs-1'>  Create an Account</Form>
                  {!responseStatus ? 
                    <Form onSubmit={handleSubmitForm}> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" onChange={handleFormInput} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleFormInput} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" onChange={handleFormInput} />
                    </Form.Group>
                 
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> : <h1>Registred Sucessfully <Link href={'/login-form'}>Go to Login</Link></h1> }
                </Col>
            </Row>
        </Container>
    );
}

