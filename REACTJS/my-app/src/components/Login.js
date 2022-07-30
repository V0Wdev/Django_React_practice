import React, {useEffect, useState} from 'react';
import APIservice from './APIservice';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    let history = useNavigate()
  
    const registerBtn =()=>{
         APIservice.RegisterUser({username, password})
        .then(()=> loginBtn())
        .catch(error=> console.log(error))
        }

    const loginBtn =()=>{
        APIservice.LoginUser({username, password})
        .then(resp=> setToken('mytoken',resp.token))
        .catch(error=> console.log(error))
    }
    useEffect(()=>{
        if (token['mytoken'])
        {
            history('/articles')
        }
                                
    },[token]);
  return (
    <div>
        <div className='App'>
        <div className='Login'>{
    isLogin ? <h1>Please Login</h1>
    : <h1> Please Create Account</h1>
}
        <div className='login-form'>
        <label className='form-label'>Username</label>
        <input onChange={e => setUsername(e.target.value)} value={username} type="text" className='form-control' placeholder='Username'></input>
        <label className='form-label'>Password</label>
        <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='form-control' placeholder='Password' ></input>
        </div>
        {isLogin ? <button className='btn btn2 btn-primary' onClick={loginBtn}>Login</button>
        : <button className='btn btn2 btn-primary' onClick={registerBtn}>Register</button>}
        <div className='mb-3'>
            <br/>
            {isLogin ? <h5>If you don`t have account <button className='btn btn-primary' onClick={()=>setLogin(false)}>Create account</button></h5>
            :<h5>If you have account <button className='btn btn-primary' onClick={()=>setLogin(true)}>Create account</button></h5>
            }
        </div>
        </div>
        </div>
    </div>
  )
}

export default Login