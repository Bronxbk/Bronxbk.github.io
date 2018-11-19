import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class NavMenu extends React.Component {
    render() {
        return <div className="container">
            <div className='nav flex-column nav-pills'>
                {this.props.menu && this.props.menu.map((item) =>
                    <li key={item.id} className='nav-item' activeClassName='active'>
                        <NavLink exact={item.exact} className='nav-link' to={item.href}>
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>{item.label}</span>
                        </NavLink >
                    </li>
                )}
            </div>
        </div>


    }
}

