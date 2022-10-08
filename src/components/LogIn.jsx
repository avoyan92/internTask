import React from 'react'
import GoogleLogin from 'react-google-login';
import '../css/login.css'
export const LogIn = ({setProfile}) => {
      const clientId = "535181746511-2g14lct35dlcjrd0bska9l5hgref0bk2.apps.googleusercontent.com"

      const onSuccess = (res) => {
            setProfile(res.profileObj);
            
        };
        const onFailure = (err) => {
            console.log('failed:', err);
        };
        return (
          <div className='login'>
             <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
          />
          </div>
        )
}

export default LogIn
