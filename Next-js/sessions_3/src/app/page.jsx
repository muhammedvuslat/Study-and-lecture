import Test from "@/components/test";
import React from "react";
import styles from "@/app/homepage.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>Home Page</h1>
      <Test style={styles["body-title"]} />
      {/* Props ile Test componentine style gönderimi sağlanır ve test componenti içerisinde className'inde bildirilir */}
    </div>
  );
}
