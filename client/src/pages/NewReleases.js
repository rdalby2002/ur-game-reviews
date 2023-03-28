import React from "react";
import { QUERY_NEW } from "../utils/queries";

function NewReleases(){
  const { loading, data } = useQuery(QUERY_NEW);
  const newReleases = data?.newReleases || [];
    <Card
    hoverable
    style={{
      width: 240,
    }}
    

    cover={<img alt="NewReleases" />}
  >
    <Meta  description={"www.instagram.com"} />
  </Card>
};

export default NewReleases;