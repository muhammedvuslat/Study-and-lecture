"use client";
import Test from "@/components/test";
import React from "react";
import styles from "@/app/homepage.module.css";
import { StyledComp } from "@/components/components";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>Home Page Module stil</h1>
      <h1>Home Page Global stil</h1>
      <p className="text-emerald-600">Page component test</p>
      <Test style={styles["body-title"]} />
      {/* Props ile Test componentine style gönderimi sağlanır ve test componenti içerisinde className'inde bildirilir */}
      <StyledComp />
    </div>
  );
}
