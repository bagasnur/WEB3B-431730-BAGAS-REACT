import React, { Component } from 'react'; 
import { Layout, Row, Col } from 'antd';
import { Card, Avatar } from 'antd';
import "../assets/css/App.css";

const { Meta } = Card;
const { Content } = Layout; 
const whyData = [
    {
        nama : "Abdurrahman Jaes",
        job : "Front-End Web Developer",
        ico : "https://image.flaticon.com/icons/svg/366/366306.svg"
    },
    {
        nama : "Bramantya Gento",
        job : "Back-End Web Developer",
        ico : "https://image.flaticon.com/icons/svg/366/366341.svg"
    },
    {
        nama : "Muklas Muklis",
        job : "Android Developer",
        ico : "https://image.flaticon.com/icons/svg/366/366299.svg"
    },
    {
        nama : "Rudi Hedon",
        job : "UI/UX Designer",
        ico : "https://image.flaticon.com/icons/svg/366/366323.svg"
    },
]

class ContentComponent extends Component{
    render(){
        const image = require("../assets/image/images.jpg");
        return(
            <Layout>
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container cont">                     
                                { whyData.map( data =>
                                        <Col>
                                            <Card style={{ width: 250 }} cover={
                                                <img src={image}/>}
                                            >
                                            <Meta
                                                avatar={<Avatar src={data.ico} />}
                                                title={data.nama}
                                                description={data.job}
                                            /></Card>,
                                            </Col>
                                    )
                                }
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default ContentComponent;