import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form action="">
                <input type="text" placeholder='enter name' />
                <br />
                <input type="email" placeholder='enter email' />
                <br />
                <input type="password" placeholder='enter password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;