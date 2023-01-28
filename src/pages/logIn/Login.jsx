import React from 'react'
import "./login.css"
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <h2 className="Login-title ">تسجيل الدخول</h2>
            <div className="container">
                <div className="wrapper row  justify-content-center">
              <div className="sign-in-wrapper col-md-6 ">
              <div className="input-box">
                     <span class="details">البريد اللإلكتروني</span>
                        <input type="email" placeholder="أدخل البريد اللإلكتروني" required />
                    </div>
                    <div class="input-box">
                        <span class="details">الرقم السري </span>
                        <input type="password" placeholder="أدخل الرقم السري" required />
                        <div className="button mt-3 py-1">
                        <input type="submit" value="تسجيل الدخول" />
                    </div>
                    </div>
                  
                    <div className="reset-password">
                     <span > هل نسيت كلمة السر ؟ </span>
                    <Link to= "/reset-password"> أستعادة عن طريق البريد اللإلكتروني </Link>
                    </div>
                    <div className="reset-password">
                     <span >    ليس لديك حساب بالفعل؟ </span>
                    <Link to= "/register">أنشأ حساب </Link>
                    </div>
                    
              </div>

                </div>
            </div>


        </>
    )
}
