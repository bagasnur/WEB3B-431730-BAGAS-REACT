import React, { Component } from 'react'; //import dari react biasa
import { Layout, Row, Col } from 'antd'; //import dari ant seperti biasa
import '../assets/css/landing.css'; //import css dari folder css yang ada di folder assets
import ButtonHome from '../common/component/button/button-home';
import { Link } from 'react-router-dom';

const { Content } = Layout; // membuat konstanta content yang berasal dari bawaan layout ant design, bisa dicek di dokumentasi antdesign

class LandingComponent extends Component{
    render(){
        return(
            <Layout>
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container" justify="space-around" align="middle">
                        <Col lg={12} md={12} sm={12}>
                            <div className="title-container" value={50}>
                                <h2>Hello World.</h2>
                                <h1>It's Bagas Nur</h1>
                                <br/>
                                <h2>I'm a Graphic Designer and 3D Artist.</h2>
                                <br/>
                                <Link to="/about">
                                    <ButtonHome
                                        text="About Me"
                                        background="#111111"
                                        textColor="rgb(234, 0, 255)"
                                        border="1px solid rgb(234, 0, 255)"
                                        className='button-participate'
                                    />
                                </Link>
                            </div>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default LandingComponent;