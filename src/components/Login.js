import React, {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "../component-styles/Login.css"
import { AppContext } from '../context/AppContext';
const Login = () => {
    const {setUser, setLoggedIn} = useContext(AppContext);
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoggedIn(true);
        navigate('/feed')
    }
    return (
        <div className="login">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1 className='mb-5'>Login</h1>
                <div className="mb-4">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="mb-4">
                    <input type={!checked? "password": "text"} className="form-control" id="exampleInputPassword1" required placeholder='Password'/>
                    <div className='show-password'>
                        <input type="checkbox" onClick={() => setChecked(!checked)}/>
                        <label>Show Password</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
                <p className="mt-3">Forgot Username? Password?</p>
                <p className="mt-3">Don't have an account? Sign up</p>
            </form>
        </div>
    )
}

export default Login