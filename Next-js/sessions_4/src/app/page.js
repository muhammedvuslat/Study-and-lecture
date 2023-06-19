"use client";
import React, { useEffect, useState } from "react";
import Index from "../button/index";

export default function Home() {
  const [message, setMessage] = useState("İlk Message");

  useEffect(() => {
    setMessage("Değişen Message");
    console.log("page (7)- use Effect");
  }, []);

  console.log("page (10)-object");
  return (
    <div>
      <p>Home Page</p>
      {message}
      <Index />
    </div>
  );
}
