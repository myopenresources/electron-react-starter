'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//electron
const electron = window.require('electron');
const { ipcRenderer, shell } = electron;
const { dialog } = electron.remote;




class MainWindow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Sider width={235}>
                    <Menu
                        theme="dark"
                        style={{ height: '100vh', borderRight: 0,borderLeft:0 }}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="user" />
                            <span>nav 2</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Sider width={235}>
                        <Menu
                            style={{ height: '100vh'}}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="user" />
                                <span>nav 2</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{ background: '#fff' }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}



let mainWndComponent = ReactDOM.render(
    <MainWindow />,
    document.getElementById('content'));
