import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class Sidebar extends Component {

    render() {
        return (
            <ul className="sidebar navbar-nav">
                {this.props.menu && this.props.menu.map((item) =>
                    <li key={item.id} className='nav-item' activeClassName='active'>
                        <NavLink exact={item.exact} className='nav-link' to={item.href}>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>{item.label}</span>
                        </NavLink >
                    </li>
                )}
            </ul>
        );
    }
}