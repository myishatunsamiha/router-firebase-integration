import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>this is login</h3>

            <button style={{ margin: '20px' }} onClick={signInWithGoogle}>Google Sign in</button>

            <form action="">
                <input type="email" placeholder='enter email' />
                <br />
                <input type="password" placeholder='enter password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;