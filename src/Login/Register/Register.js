import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Register = () => {
    
    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        //form data collection
        const form = event.target;
        const name = form.name.value;
        const phothoURL = form?.photoURL?.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('name', name, email, password, 'photo', phothoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => 
                console.error(error)
            );
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="Photo" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>E-mail</Form.Label>
                <Form.Control name='email' type="email" placeholder="E-mail" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>


            <Button variant="primary" type="submit">
                Register
            </Button>
            {/* <Form.Text className="text-danger">
                We'll never share your email with anyone else.
            </Form.Text> */}
        </Form>
    );
};

export default Register;