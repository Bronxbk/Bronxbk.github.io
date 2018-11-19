import React from "react";
import { Route } from "react-router-dom";
import { Layout } from '../layout/index';
import { routes } from "./routes";
import { SbAdmin } from "../components/dashboard";


export class ApplicationRoutes extends React.Component {
    constructor() {
        super();
        this.menu = routes;
    }

    render() {
        return <SbAdmin menu={this.menu}>
            {this.menu && this.menu.map((item) =>
                <Route exact={item.exact} key={item.id} path={item.href} component={item.component} />
            )}
        </SbAdmin >
    }
}
