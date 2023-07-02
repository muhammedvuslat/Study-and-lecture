import React from "react";
import { getData } from "../getData";

async function Body() {
  const data = await getData();
  return (
    <div>
      <h1>{data.body}</h1>
    </div>
  );
}

export default Body;
