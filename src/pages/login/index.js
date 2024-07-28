import React, { useState, useEffect, useRef } from 'react'
import "./login.css"
import Center from "./center"
import { Alert } from 'antd';

export default function Index() {
    const [isLogin, setIsLogin] = useState(true);
    const [alert, setAlert] = useState({ message: '', type: '' });
    const mainRef = useRef()

    useEffect(() => {
        // 获取设备信息
        const getDeviceInfo = async () => {
            try {
                const deviceInfo = {
                    userAgent: navigator.userAgent,
                    platform: navigator.platform,
                    cookiesEnabled: navigator.cookieEnabled,
                    language: navigator.language
                };
                console.log(deviceInfo)
                // 使用Fetch API发送设备信息到服务器
                // const response = await fetch('/api/device-info', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(deviceInfo),
                // });

                // const data = await response.json();
                // console.log('Server response:', data);
            } catch (error) {
                console.error('Error sending device info:', error);
            }
        };

        getDeviceInfo();
    }, []); // useEffect依赖项为空数组，表示只在组件挂载时执行一次



    return (
        <div className="main" ref={mainRef}>
            {alert.message && <Alert message={alert.message} type={alert.type} className="alert_message" />}
            <Center isLogin={isLogin} setIsLogin={setIsLogin} alert={alert} setAlert={setAlert} />
        </div>
    )
}
