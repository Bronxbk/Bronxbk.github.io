import React, { Component } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Content } from './content/Content';
import Footer from '../todo/Footer';
import './sb-admin.css';
import { routes } from '../../routes/routes';
import { Breadcrumb } from './Breadcrumb';



export class SbAdmin extends Component {

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


