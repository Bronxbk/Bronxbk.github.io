import React, { Component } from 'react';
import { SecureRoute } from '@okta/okta-react';
import { Route } from "react-router-dom";

export class CustomSecureRoute extends Component {
 

    render() {
        return (<div>
            {this.props && this.props.allowAnonymous &&
                <Route {...this.props}></Route>
            }
            {this.props && !this.props.allowAnonymous &&
                <SecureRoute {...this.props}></SecureRoute>
            }

        </div>
        );
    }
}