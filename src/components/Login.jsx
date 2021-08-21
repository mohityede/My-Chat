import React from 'react';
import '../index.css';

function Login() {
    return (
        <>
            <div id='login-page'>
                <div className="login-card">
                    <h2>Login to My Chat!</h2>
                    <div className="fb social-btn">
                        <i className="fa fa-facebook fa-fw"></i> Login with Facebook
         </div><br /><br />

                    <div className="google social-btn"><i className="fa fa-google fa-fw">
                    </i> Login with Google+
        </div>
                </div>
            </div>
        </>
    );
}

export default Login;