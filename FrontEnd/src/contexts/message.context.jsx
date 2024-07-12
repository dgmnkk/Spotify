import { createContext, useState } from "react";

export const MessageContext = createContext({
  isMessage: null,
  switchMessage: (bool) => null,
});

export const MessageProvider = ({ children }) => {
  const [isMessage, setMessage] = useState(true);

  const switchMessage = (bool) => {
    setMessage(bool);
  };

  const value = { isMessage, switchMessage };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};
