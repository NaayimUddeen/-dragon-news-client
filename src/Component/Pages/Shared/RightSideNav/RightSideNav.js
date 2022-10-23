import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    
    const googleProvider = new GoogleAuthProvider
    
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant='outline-warning'><FaGoogle></FaGoogle> LogIn Google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Login Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instragram</ListGroup.Item>
                    <ListGroup.Item variant='outline-info' className='mb-2 outline-info'><FaLinkedinIn></FaLinkedinIn> Linkdin</ListGroup.Item>
                </ListGroup>
                <div>
                    <BrandCarousel>
                     </BrandCarousel>
                </div>
            </div>
        </div>
    
    );
};

export default RightSideNav;