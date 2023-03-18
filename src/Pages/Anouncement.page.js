import React from 'react'
import { Helmet } from 'react-helmet'
import Anouncementcomponent from '../Components/Anouncement/Anouncement.component'
function AnouncementPage() {
    return (
        <>
            <Helmet>
                <title>
                    Anouncements
                </title>
            </Helmet>
            <Anouncementcomponent />
        </>
    )
}

export default AnouncementPage