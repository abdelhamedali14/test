import React from 'react'
import { createContext } from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext()
export const UserContextProvider = ({ children }) => {
    const setUserRequest = (param,userData) => {
        axios.create({
            baseURL: `https://qaym-3kark2-ziadsindion.pythonanywhere.com/api/users/${param}`,
            headers: { accept: 'application/json' },
            body:{}
         
        })
    }



    return (



        <UserContext.Provider
            value={{
                userData: "",
            }}



        >
            {children}
        </UserContext.Provider>
    )



}