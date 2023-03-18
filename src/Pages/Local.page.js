import React from "react";

import { Helmet } from "react-helmet";
import Localcropcomponent from "../Components/Local/Localcrop.component";
import Locationcomponent from "../Components/Location/Location.component";

function Locationpage() {
  return (
    <>
      <Helmet>
        <title>Crop Prediction Locally</title>
      </Helmet>
      <Localcropcomponent />
    </>
  );
}

export default Locationpage;
