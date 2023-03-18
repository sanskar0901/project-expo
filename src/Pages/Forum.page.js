import React from "react";
import { Helmet } from "react-helmet";
import Forumcomponent from "../Components/Forum/Forum.component";
function ForumPage() {
  return (
    <>
      <Helmet>
        <title>Forum</title>
      </Helmet>
      <Forumcomponent />
    </>
  );
}

export default ForumPage;
