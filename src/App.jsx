import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import config from './auth/authConfig';
import { routes } from "./routes/routes";
import { Layout } from './components/dashboard/Layout';
import { CustomSecureRoute } from './routes/CustomSecureRoute';

export class App extends Component {
  constructor(props) {
    super(props);
    this.routes = routes;
  }
  render() {
    return (
      <AppContainer>
        <BrowserRouter basename={'/'} >
          <Security
            issuer={config.oidc.issuer}
            client_id={config.oidc.clientId}
            redirect_uri={config.oidc.redirectUri}>
            <Layout menu={this.routes}>
              {this.routes && this.routes.map((item) =>
                <CustomSecureRoute allowAnonymous={item.allowAnonymous} exact={item.exact} key={item.id} path={item.href} component={item.component} />
              )}
            </Layout >
          </Security>
        </BrowserRouter>
      </AppContainer>
    );
  }
}