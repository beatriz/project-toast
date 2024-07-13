import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            text={toast.message}
            handleDismiss={() => handleDismissToast(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
