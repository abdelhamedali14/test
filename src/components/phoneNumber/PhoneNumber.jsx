import React from 'react'
import "./PhoneNumber.scss"
export const PhoneNumber = (props) => {
    const label=props.label
    const pleaceHolder=props.pleaceHolder
    return (
        <>
            <div class="input-box">
                <label class="details"  > {label}</label>
                <input type="number" placeholder={pleaceHolder} required />
            </div>


        </>
    )
}
