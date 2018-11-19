import React from "react";
import { Route } from "react-router-dom";
import { Layout } from '../layout/index';
import { routes } from "./routes";
import { SbAdmin } from "../components/dashboard";


export class ApplicationRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        this.handleClick = this.handleClick.bind(this);
        this.menu = routes;
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return <div>
            {!this.state.isToggleOn &&
                <input className="fsimg" type="image" src="https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg" onClick={this.handleClick}    />
            }
            {this.state.isToggleOn &&
                <SbAdmin menu={this.menu}>
                    {this.menu && this.menu.map((item) =>
                        <Route exact={item.exact} key={item.id} path={item.href} component={item.component} />
                    )}
                </SbAdmin >}
        </div>

    }
}
