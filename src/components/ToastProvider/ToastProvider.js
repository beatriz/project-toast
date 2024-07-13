import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  function dismissToast(toastId) {
    const nextToastList = toastList.filter((toast) => toast.id !== toastId);
    setToastList(nextToastList);
  }

  function addToast(variant, message) {
    const nextToastList = [
      ...toastList,
      { variant, message, id: crypto.randomUUID() },
    ];
    setToastList(nextToastList);
  }

  return (
    <ToastContext.Provider
      value={{ toastList, addToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
