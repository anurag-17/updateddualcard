import React from 'react'
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"

export const App_a = () => {
    return (
        <>
            <div className='App'>


                <Routes>
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
        </>
    )
}
