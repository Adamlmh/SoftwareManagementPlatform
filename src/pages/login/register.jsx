import React, { useRef, useEffect } from 'react'
import { Input } from 'antd'


export default function Register({ alert, setAlert }) {
    const firstPasswordRef = useRef()
    const secondPasswordRef = useRef()
    const emailRef = useRef()
    const agreeRef = useRef()

    //定时器提示
    const setAlertTimeout = (setter, alert, duration = 3000, type = 0) => {
        if (type === 0) {
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

    useEffect(() => {
        agreeRef.current.checked = true
    }, [])

    const registerClick = async () => {
        const email = emailRef.current.input.value;
        const firstPassword = firstPasswordRef.current.input.value;
        const secondPassword = secondPasswordRef.current.input.value;
        const agree = agreeRef.current.checked

        if (!email) {
            setAlertTimeout(setAlert, { message: '请输入邮箱', type: 'error' });
            return;
        }
        if (!firstPassword) {
            setAlertTimeout(setAlert, { message: '请输入密码', type: 'error' });
            return;
        }
        if (!secondPassword) {
            setAlertTimeout(setAlert, { message: '请确认密码', type: 'error' });
            return;
        }
        if (firstPassword !== secondPassword) {
            setAlertTimeout(setAlert, { message: '密码不匹配', type: 'error' });
            return;
        }
        // if (!sendyzem) {
        //     setAlertTimeout(setAlert, { message: '还未发送验证码', type: 'error' });
        //     return;
        // }
        // if (!yzm) {
        //     setStatus(setYzmStatus, 'warning');
        //     setAlertTimeout(setAlert, { message: '验证码不正确', type: 'error' });
        //     return;
        // }
        if (!agree) {
            setAlertTimeout(setAlert, { message: '请同意相关条款政策', type: 'error' });
            return;
        }
        // try {
        //     const response = await accountController(email, firstPassword, yzm);
        //     if (response.code == 1) {
        //         setAlertTimeout(setAlert, { message: '注册成功，将跳转到登录页面', type: 'success' }, 1000, 1);
        //     }
        //     else {
        //         setAlertTimeout(setAlert, { message: response.msg, type: 'error' });
        //     }
        // } catch (error) {
        //     console.error('Error fetching models:', error);
        // }
    }







    return (
        <div>
            <div className="register_center_card_bottom">
                <div><Input placeholder="输入你的邮箱" ref={emailRef} /></div>
                <div><Input placeholder="输入你的密码" type="password" ref={firstPasswordRef} /></div>
                <div><Input placeholder="确认密码" type="password" ref={secondPasswordRef} /></div>
                <div><Input placeholder="验证码" type="password" /><button>验证码图片</button></div>
            </div>
            <div className="login_center_card_bottom_bottom">
                <div><button onClick={registerClick}>注册</button></div>
                <div><div><input type="checkbox" ref={agreeRef} />已同意<a href="#">《服务条款》</a>与<a href="#">《隐私政策》</a></div>  </div>
            </div>
        </div>

    )
}
