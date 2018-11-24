import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationRoutes } from './routes/index';
import { Security } from '@okta/okta-react';

import config from './auth/.auth.config';

export class App extends Component {

  render() {
    return (
      <AppContainer>
        <BrowserRouter basename={'/'} >
          <Security
            issuer={config.oidc.issuer}
            client_id={config.oidc.clientId}
            redirect_uri={config.oidc.redirectUri}>
            <ApplicationRoutes />
          </Security>
        </BrowserRouter>
      </AppContainer>
    );
  }
}