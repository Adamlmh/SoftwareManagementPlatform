import React from 'react'
import { Card, Input } from 'antd'

export default function register() {
    return (
        <div className="login_center">
            <div className="login_center_card">
                <Card style={{ width: '520px', height: '570px', padding: '0px', margin: '0px' }} className="custom-card">
                    <div className="select_login_register">
                        <h3 className="select_login_register_left">登录</h3>
                        <h3 className="select_login_register_right select_login_register_active">注册</h3>
                    </div>
                    <div className="register_center_card_bottom">
                        <div><Input placeholder="输入你的邮箱" /></div>
                        <div><Input placeholder="输入你的密码" type="password" /></div>
                        <div><Input placeholder="确认密码" type="password" /></div>
                        <div><Input placeholder="验证码" type="password" /><button>验证码图片</button></div>
                    </div>
                    <div className="login_center_card_bottom_bottom">
                        <div><button>注册</button></div>
                        <div><div><input type="checkbox" />已同意<a href="#">《服务条款》</a>与<a href="#">《隐私政策》</a></div>  </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
