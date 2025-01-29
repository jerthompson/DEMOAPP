import React, { useEffect } from 'react';
import authConfig from '../js/authConfig';
import Profile from './Profile';

const Callback = ({ auth, setAuth, userManager, userInfo, setUserInfo, handleLogout }) => {

  useEffect(() => {
    if (auth === null) {
      userManager.signinRedirectCallback().then((user) => {
        if (user) {
          setAuth(true);
          const access_token = user.access_token;
          // Make a request to the user info endpoint using the access token
          fetch(authConfig.userinfo_endpoint, {
            headers: {
              'Authorization': `Bearer ${access_token}`
            }
          })
            .then(response => response.json())
            .then(userInfo => {
              setUserInfo(userInfo);
            });
        } else {
          setAuth(false);
        }
      }).catch((error) => {
        setAuth(false);
      });
    }
  }, [auth, userManager, setAuth]);


  if (auth === true && userInfo) {
    return (
      <div>
        {/* 
        <h1>Welcome, {userInfo.name}!</h1>
        <h3>Name:  {userInfo.name}</h3>
        <h3>Email: {userInfo.email}</h3>
        <button onClick={handleLogout}>Log Out</button>
        */}
      <Profile userInfo = {userInfo}/>
      </div>
    );
  }
  else {
      return <div>Loading...</div>;
    }

};

export default Callback;

