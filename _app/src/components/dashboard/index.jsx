import React, { Component } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Content } from './content/Content';
import Footer from '../todo/Footer';
import './sb-admin.css';



export class SbAdmin extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <Sidebar></Sidebar>
                    <Content></Content>
                    <Footer></Footer>
                </div>
            </div>

        );
    }
}