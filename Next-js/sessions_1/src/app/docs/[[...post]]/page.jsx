import React from "react";

export default function PostPage({ params }) {
  return (
    <div>
      <h1>Dinamik root docs sayfası </h1>{" "}
      <p> 3. Yapı Optional Catch-all Segments (Opsiyonel Tüm Segmentler) </p>
      <p>post--</p>
      <hr />
      <p>{params.post}</p>
    </div>
  );
}
