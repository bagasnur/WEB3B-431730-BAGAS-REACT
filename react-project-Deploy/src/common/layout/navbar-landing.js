import React, { Component } from 'react';
import { Menu } from 'antd';
import '../layout/css/navbar-style.css';
import {
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    current: '',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    <nav className="navbar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <HomeOutlined />
            <Link to="/">Home</Link> 
        </Menu.Item>
        <Menu.Item key="content">
          <AppstoreOutlined />
          <Link to="/content">Content</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <InfoCircleOutlined />
          <Link to="/about">About me</Link>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
