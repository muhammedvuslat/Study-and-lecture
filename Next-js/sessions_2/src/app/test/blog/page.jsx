import React from "react";

function Blog({ searchParams }) {
  if (searchParams.error === "true") {
    throw new Error("This is error page");
  }
  return (
    <div>
      <div>Blog Page</div>
    </div>
  );
}

export default Blog;
