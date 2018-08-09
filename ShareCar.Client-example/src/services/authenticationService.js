// @flow
import api from '../helpers/axiosHelper';

class AuthenticationService {

    loginWithFacebook = (accessToken: AccessToken, callback: () => void) => {
        api.post('api/auth/facebook', {
            accessToken: accessToken
        })
        .then((response) => {
            if (response.status === 204)
                callback();
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    logout = (callback: () => void) => {
        api.post('api/auth/logout')
        .then((response) => {
            if (response.status === 204)
                callback();
        })
        .catch(function (error) {
            console.error(error);
        });
    }
}

export default AuthenticationService;