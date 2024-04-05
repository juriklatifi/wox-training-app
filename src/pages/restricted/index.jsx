import { useAuthStore } from "@/context/authStore";
import { dynamicFetch } from "@/helpers/dynamicFetch";
import { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductList from "@/components/ProductsList";

export default function RestrictedPage() {
    const { authenticated, user, logout } = useAuthStore();
    const [data, setData] = useState({ products: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await dynamicFetch('https://dummyjson.com/products', 'GET');
                setData(responseData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (authenticated && user) {
            fetchData();
        }
    }, [authenticated, user]);

    if (!authenticated || !user) {
        return null;
    }

    const handleLogout = () => {
        logout();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Row className=" border border-danger border- p-5d-flex flex-row justify-content-center">
            <Col sm={10}>
                <div>
                    <h1>Products</h1>
                 
                        <ProductList products={data.products} />
                
                </div>
            </Col>
            <Col sm={2}>
                <div>
                    <h1>Profile</h1>
                    <p>Welcome, {user.user.name}!</p>
                    <p>Your email: {user.user.email}</p>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </Col>
        </Row>
    );
}
