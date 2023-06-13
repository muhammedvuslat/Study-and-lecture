import React from "react";

export default function BlogLay({ children }) {
  return (
    <>
      <div>
        <div>Blog Lay</div>
        <hr />
        <div>{children}</div>
        <hr />
        <div>Blog Lay</div>
      </div>
    </>
  );
}
