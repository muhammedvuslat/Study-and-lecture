import React from "react";
import styles from "@/styles/components/test.module.css";

function Test({ style }) {
  return (
    <div>
      <h2 className={style}>Test Component content-1</h2>
      <div className={styles.container}>
        <h2 className={styles["body-title"]}>Test Component content-2</h2>
      </div>
    </div>
  );
}

export default Test;
