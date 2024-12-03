import React, { useEffect } from "react";

function ConsoleLogger() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return <div>Check the console for messages!</div>;
}

export default ConsoleLogger;
