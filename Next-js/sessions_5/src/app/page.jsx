"use client";
import React from "react";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return response.json();
};
export default function Home() {
  console.log({ getData });
  return (
    <div>
      <p>Date fetching</p>
    </div>
  );
}
