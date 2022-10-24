import React, { useContext, useState } from 'react';
import { FormCheck, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    
    const handleSubmit = event => {
        event.preventDefault();
        //form data collection
        const form = event.target;
        const name = form.name.value;
        const photoURL = form?.photoURL?.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('name', name, email, password, 'photo', photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
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
            <FormGroup className='mb-3' controlId='formBasicControlCheckbox'>
                <FormCheck
                    type='checkbox'
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>}>
                </FormCheck>
            </FormGroup>

            <Button variant="primary"
                type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;