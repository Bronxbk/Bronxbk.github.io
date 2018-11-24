export default {
  oidc: {
    clientId: '0oahro1krfRAO5zAW0h7',
    issuer: 'https://dev-261211.oktapreview.com/oauth2/default',
    redirectUri: 'http://localhost:3000/implicit/callback',
    scope: 'openid profile email',
  },
  resourceServer: {
    messagesUrl: 'http://localhost:3000/api/messages',
  },
};
