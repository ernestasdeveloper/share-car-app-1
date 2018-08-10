// @flow
import * as React  from 'react';
import FacebookLogin from 'react-facebook-login';
import history from '../../helpers/history';
import AuthenticationService from '../../api/AuthenticationService';
import { Link } from "react-router-dom";

export class LoginLayout extends React.Component<{}> {
    authService: AuthenticationService = new AuthenticationService();

    responseFacebook = (response: any) => {
        console.log(response);
    
        this.authService.loginWithFacebook(response.accessToken, this.userAuthenticated);
    }

    userAuthenticated = () => {
        history.push('/');
    }
      
    render() {
        return <div>
            <h1>Login</h1>
            <FacebookLogin
                appId="599580833757975"
                fields="name,email,picture"
                callback={this.responseFacebook} 
            />
        </div>
    }
}