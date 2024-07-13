import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toastList, dismissToast } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            text={toast.message}
            handleDismiss={() => dismissToast(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
