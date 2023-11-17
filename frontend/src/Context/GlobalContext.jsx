import { createContext, useState } from "react";

export const GlobalContext = createContext({
  data: {},
  setData: () => {},
});

const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <GlobalContext.Provider value={{ data: data, setData: setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
