import React from 'react'

import { Helmet } from 'react-helmet'
import Locationcomponent from '../Components/Location/Location.component'

function Locationpage() {
    return (
        <>
            <Helmet>
                <title>
                    Crop Prediction
                </title>
            </Helmet>
            <Locationcomponent />
        </>
    )
}

export default Locationpage