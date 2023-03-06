import { createContext, useContext, useEffect, useReducer } from "react";
import { addressReducerFunction } from "./addressReducerFunction";

const initialData = {
  address: [],
};

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  useEffect(() => {
    addressDispatch({ type: "UPDATE-FROM-LOCALSTORAGE" });
  }, []);

  const [addressState, addressDispatch] = useReducer(
    addressReducerFunction,
    initialData
  );
  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
