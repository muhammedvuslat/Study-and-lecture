import React from "react";
export default function ({ params }) {
  return (
    <div>
      <h1>Dinamik root blog sayfası </h1>{" "}
      <p> 2. Yapı Catch all segments(Tüm Segmentler) </p>
      <hr />
      <p>{params.blog}</p>
      {/* url ile dinamik olarak hangi root girilirse p etiketinde bunu basmış olacağız  */}
    </div>
  );
}
