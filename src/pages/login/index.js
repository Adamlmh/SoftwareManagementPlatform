import React, { useState } from 'react'
import "./login.css"
import PasswordLogin from './passwordLogin.jsx'
import Register from './register.jsx'
import { Alert } from 'antd';

export default function Index() {
    const [isLogin, setIsLogin] = useState(true);
    const [alert, setAlert] = useState({ message: '', type: '' });



    return (
        <div className="main">
            {alert.message && <Alert message={alert.message} type={alert.type} className="alert_message" />}
            {isLogin ? <PasswordLogin alert={alert} setAlert={setAlert} /> : <Register alert={alert} setAlert={setAlert} />}
        </div>
    )
}
