// react
import { createContext, useContext, useState } from "react";

// first creat a context
const Notification_Context = createContext();

// make a provider function
export function Notification_Provider({ children }) {
  const [count, set_count] = useState(0);

  const add_notification = () => {
    console.log(count);

    set_count((prev) => prev + 1);
  };

  const reset_notification = () => {
    set_count(0);
  };

  return (
    <Notification_Context.Provider value={{ count, add_notification, reset_notification }}>
      {children}
    </Notification_Context.Provider>
  );
}

// custom hook

export function use_notification() {
  return useContext(Notification_Context);
}
