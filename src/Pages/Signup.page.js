import React from 'react'
import { Helmet } from 'react-helmet'
import SignupComponent from '../Components/Signup/Signup.component'

function SignupPage() {
    return (
        <>
            <Helmet>
                <title>
                    Login
                </title>
            </Helmet>
            <SignupComponent />
        </>
    )
}

export default SignupPage