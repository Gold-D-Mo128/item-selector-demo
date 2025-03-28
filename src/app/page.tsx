"use client";

import styles from "./page.module.css";
import { Provider } from "react-redux";
import ItemSelector from "@/components/ItemSelector";
import store from "@/redux/store";

export default function Home() {
  return (
    <div className={styles.page}>
      <Provider store={store}>
        <ItemSelector />
      </Provider>
    </div>
  );
}
