import React from "react";
import { routes } from "./routes";
import { Layout } from "../components/dashboard/Layout";
import { CustomSecureRoute } from "../auth/CustomSecureRoute";

export class ApplicationRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.menu = routes;
    }
    render() {
        return (<Layout menu={this.menu}>
            {this.menu && this.menu.map((item) =>
                <CustomSecureRoute allowAnonymous={item.allowAnonymous} exact={item.exact} key={item.id} path={item.href} component={item.component} />
            )}
        </Layout >)
    }

}

