import React from "react";

function Blog({ searchParams }) {
  if (searchParams.error === "true") {
    throw new Error("This is error page");
  }
  //! end point üzerinden hatayı yakalayabilmesi için simüle edebileceğimiz bir fonksiyon yazıyoruz ve [url(endpointe) ?error=true ekliyoruz]
  return (
    <>
      <meta name="description" content="RootHead" />
      <title>Blog Head</title>
      <div>
        <div>Blog Page</div>
      </div>
    </>
  );
}

export default Blog;
