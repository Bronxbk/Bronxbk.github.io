import React, { Component } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Breadcrumb } from './Breadcrumb';
import './sb-admin.css';



export class Layout extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <div id="wrapper">
                    <Sidebar menu={this.props.menu}></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                        <Breadcrumb></Breadcrumb>                        
                            {this.props.children}
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}


