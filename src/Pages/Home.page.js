import React from 'react'
import { Helmet } from 'react-helmet'
import HomeComponent from '../Components/Home/Home.component'
function HomePage() {
    return (
        <>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
            <HomeComponent />
        </>
    )
}

export default HomePage