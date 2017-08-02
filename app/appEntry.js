'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';

const events = window.require('events');
const path = window.require('path');
const fs = window.require('fs');

const electron = window.require('electron');
const {ipcRenderer, shell} = electron;
const {dialog} = electron.remote;




class MainWindow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
			    <Button type="primary">Primary</Button>
				<Button>Default</Button>
				<Button type="dashed">Dashed</Button>
				<Button type="danger">Danger</Button>
		   </div>
        );
    }
}



let mainWndComponent = ReactDOM.render(
    <MainWindow />,
    document.getElementById('content'));
