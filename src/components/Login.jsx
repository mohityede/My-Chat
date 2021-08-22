import React from 'react';
import 'firebase/app';
import firebase from 'firebase/app';
import '../index.css';

function Login() {
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                console.log("result:", result);
                var credential = result.credential;
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleFBSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div id='login-page'>
                <div className="login-card">
                    <h2>Login to My Chat!</h2>
                    <div
                        className="fb social-btn"
                        onClick={handleFBSignIn}
                    >
                        <i className="fa fa-facebook fa-fw"></i> Login with Facebook
         </div><br /><br />

                    <div
                        className="google social-btn"
                        onClick={handleGoogleSignIn}
                    >
                        <i className="fa fa-google fa-fw">
                        </i> Login with Google+
        </div>
                </div>
            </div>
        </>
    );
}

export default Login;