import React from 'react'
import { Helmet } from 'react-helmet'
import LoginComponent from '../Components/Login/Login.component'

function LoginPage() {
    return (
        <>
            <Helmet>
                <title>
                    Login
                </title>
            </Helmet>
            <LoginComponent />
        </>
    )
}

export default LoginPage