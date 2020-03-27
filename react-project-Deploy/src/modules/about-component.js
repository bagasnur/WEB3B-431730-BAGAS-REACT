import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import '../assets/css/landing.css';
import ButtonHome from '../common/component/button/button-home';

const { Content } = Layout;

class AboutComponent extends Component{
    render(){
        return(
            <Layout>
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container" justify="space-around" align="middle">
                        <Col lg={12} md={12} sm={12}>
                            <div className="title-container" value={50}>
                                <h2>Let's see.</h2>
                                <h1>myPortfolio</h1>
                                <br/>
                                <a target="_blank" href="https://www.instagram.com/bagasnur.id">
                                    <ButtonHome
                                        text="Instagram"
                                        background="#111111"
                                        textColor="rgb(234, 0, 255)"
                                        border="1px solid rgb(234, 0, 255)"
                                        className='button-participate'
                                    />
                                </a>
                            </div>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default AboutComponent;