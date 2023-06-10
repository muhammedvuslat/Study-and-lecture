import React from "react";
import Link from "next/link";

export default function PostPage({ params }) {
  return (
    <div>
      <h1>Dinamik root docs sayfası </h1>{" "}
      <p> 3. Yapı Optional Catch-all Segments (Opsiyonel Tüm Segmentler) </p>
      <p>post--</p>
      <hr />
      <p>{params.post}</p>
      <hr />
      <Link href="/about"> About</Link>
      <hr />
      <Link href="/docs/post1"> Post 1</Link>
      <hr />
      <Link href="/docs/post1/post2"> Post 2</Link>
      <hr />
      <Link
        className="testClassName"
        href={{
          pathname: "/about",
          query: { name: "post", surname: "css" },
        }}
      >
        query Kullanımı
      </Link>
    </div>
  );
}
