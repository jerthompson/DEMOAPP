const authConfig = {
    authority: "https://dev-5jvxb7gmsxf8x83b.us.auth0.com/", //Replace with your issuer URL
    client_id: '1NC2Q431mZtBzWNwziNqmaKHI2OtRMT9', //Replace with your client id
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'code',
    scope: 'openid profile email',
    post_logout_redirect_uri: 'http://localhost:3000/',
    userinfo_endpoint: 'https://dev-5jvxb7gmsxf8x83b.us.auth0.com/userinfo', //Replace with your user-info endpoint
    response_mode: 'query',
    code_challenge_method: 'S256',
  };

 export default authConfig;
