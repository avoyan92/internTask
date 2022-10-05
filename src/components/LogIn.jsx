import React from 'react'
import GoogleLogin from 'react-google-login';
import '../css/login.css'
export const LogIn = ({setProfile}) => {
      const clientId = '1059879948833-fn0oq9ei2l2ror0c9rm1d2b43tgg0eh8.apps.googleusercontent.com'

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
