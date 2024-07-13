import React from "react";

function useEscapeKey(onEscapePressFn) {
  React.useEffect(() => {
    function handleEvent(event) {
      if (event.key === "Escape") {
        onEscapePressFn();
      }
    }

    window.addEventListener("keydown", handleEvent);

    return () => window.removeEventListener("keydown", handleEvent);
  }, [onEscapePressFn]);
}

export default useEscapeKey;
