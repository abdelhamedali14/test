import React from 'react'
import { Link } from 'react-router-dom'
import "./register.css"


export const Register = () => {
    return (
        <>
            <div className="Register-container">
                <div className="title">التسجيل</div>
                <div className="content">
                    <form action="submit">
                        <div className="user-details">
                            <div className="input-box">
                                <span class="details">الأسم </span>
                                <input type="text" placeholder="أدخل الأسم" required />
                            </div>
                            <div class="input-box">
                                <span class="details">أسم المستخدم</span>
                                <input type="text" placeholder="أدخل أسم المستخدم" required />
                            </div>
                            <div class="input-box">
                                <span class="details">البريد الألكتروني</span>
                                <input type="email" placeholder="أدخل البريد اللإلكتروني" required />
                            </div>
                            <div class="input-box">
                                <span class="details"  > الهاتف الأول </span>
                                <input type="number" placeholder="أدخل الهاتف الأول  " required />
                            </div>
                            <div class="input-box">
                                <span class="details"> الهاتف الثاني</span>
                                <input type="number" placeholder="أدخل الهاتف الثاني" required />
                            </div>
                            <div class="input-box">
                                <span class="details">كلمة السر</span>
                                <input type="password" placeholder="أدخل كلمة السر" required />
                            </div>
                            <div class="input-box">
                                <span class="details">تأكيد كلمة السر</span>
                                <input type="password" placeholder="تأكيد كلمة السر" required />
                            </div>
                            <div className="input-box">
                            <span class="details">البلد</span>
                                <select name="country" id="country">
                                    <option value="saudia arabia">السعودية</option>
                                    <option value="egypt">مصر</option>
                                </select>
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" />
                            <input type="radio" name="gender" id="dot-2" />
                            <span className="gender-title">النوع</span>
                            <div className="category">
                                <label for="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">ذكر</span>
                                </label>
                                <label for="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">أنثي</span>
                                </label>
                            </div>
                            <div className="button">
                                <input type="submit" value="تسجيل" />
                            </div>

                        </div>
                    </form>
                </div>
               <div className="sign-in">
                <span>هل لديك حساب  بالفعل ؟</span>
                <Link className='go-to-signin' to={"login"} >تسجيل الدخول</Link>
               </div>
            



            </div>





        </>


    )







}
