import React from 'react'
import "./login.css"
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <h2 className="Login-title ">تسجيل الدخول</h2>
            <div className="container">
                <div className="wrapper">
                    <div className="input-box">
                     <span class="details">البريد اللإلكتروني</span>
                        <input type="email" placeholder="أدخل البريد اللإلكتروني" required />
                    </div>
                    <div class="input-box">
                        <span class="details">الرقم السري </span>
                        <input type="password" placeholder="أدخل الرقم السري" required />
                    </div>
                    <div className="button">
                        <input type="submit" value="تسجيل الدخول" />
                    </div>
                    <div className="reset-password">
                     <span > هل نسيت كلمة السر ؟ </span>
                    <Link to= "/reset-password"> أستعادة عن طريق البريد اللإلكتروني </Link>
                    </div>

                </div>
            </div>


        </>
    )
}
