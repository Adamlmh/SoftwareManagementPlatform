import React, { useRef, useEffect } from 'react'
import { Card, Input } from 'antd'


export default function PasswordLogin({ alert, setAlert }) {
    const passwordRef = useRef()
    const emailRef = useRef()
    const rembermeRef = useRef()
    const agreeRef = useRef()

    //定时器提示
    const setAlertTimeout = (setter, alert, duration = 3000, type = 0) => {
        if (type == 0) {
            setter(alert)
            setTimeout(() => {
                setter({ message: '', type: "" })
            }, duration)
        }
        else {
            setter(alert)
            setTimeout(() => {
                setter({ message: '', type: "" })
                // navigate('/home')
            }, duration)

        }
    }

    //登录按钮
    const login_In = async () => {
        const password = passwordRef.current.input.value
        const email = emailRef.current.input.value
        const agree = agreeRef.current.checked
        if (!email) {
            setAlertTimeout(setAlert, { message: '请输入邮箱', type: 'error' });
            return;
        }
        if (!password) {
            setAlertTimeout(setAlert, { message: '请输入密码', type: 'error' });
            return;
        }
        if (!agree) {
            setAlertTimeout(setAlert, { message: '请同意相关条款政策', type: 'error' });
            return;
        }
        // try {
        //     const response = await accountLogin(email, password);
        //     console.log(response)
        //     if (response.code == 1) {
        //         setAlertTimeout(setAlert, { message: '登录成功', type: 'success' }, 1000, 1);
        //         localStorage.setItem('token', response.data.token)
        //         localStorage.setItem('userId', response.data.userId)
        //         localStorage.setItem('email', email)
        //         if (rembermeRef.current.checked) {
        //             localStorage.setItem('password', password)
        //             localStorage.setItem('email', email)
        //         }
        //     }
        //     else {
        //         setAlertTimeout(setAlert, { message: response.msg, type: 'error' });
        //     }
        // } catch (error) {
        //     console.error('Error fetching models:', error);
        // }
    }



    useEffect(() => {
        if (localStorage.getItem('passwordSF')) {
            passwordRef.current.input.value = localStorage.getItem('password')
        }
        if (localStorage.getItem('emaiSF')) {
            emailRef.current.input.value = localStorage.getItem('email')
        }
        rembermeRef.current.checked = true
        agreeRef.current.checked = true
    }, [])


    return (
        <div>
            <div className="login_center_card_bottom">
                <h3>欢迎使用工软软件管理平台</h3>
                <div><Input placeholder="输入你的邮箱" ref={emailRef} /></div>
                <div>  <Input placeholder="输入你的密码" ref={passwordRef} type="password" /></div>
                <div className="remberMeBigDiv"><div><input type="checkbox" ref={rembermeRef} />记住我</div></div>
            </div>
            <div className="login_center_card_bottom_bottom">
                <div><button onClick={login_In} >登录</button></div>
                <div><div><input type="checkbox" ref={agreeRef} />已同意<a>《服务条款》</a>与<a >《隐私政策》</a></div>  </div>
            </div>
        </div>
    )
}
