import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Headers from '../Component/Pages/Shared/Headers/Headers';
import Footer from '../Component/Pages/Shared/Footer/Footer';
import LeftSideNav from '../Component/Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Component/Pages/Shared/RightSideNav/RightSideNav';
import Category from '../Component/Pages/Category/Category';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Category></Category>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav>
                            <h2>Left side</h2>
                        </LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet>
                            <h2>middle</h2>
                        </Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav>
                            <h2>right side</h2>
                        </RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    )
};

export default Main;