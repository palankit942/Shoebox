import { v4 as uuid } from "uuid";
import { useAddress } from "../context/addressContext/address-context";

function useAddAddress() {
  const { addressDispatch } = useAddress();

  function addAddress(currentAddress) {
    const newAddress = {
      id: uuid(),
      ...currentAddress,
    };

    addressDispatch({ type: "ADD-ADDRESS", payload: newAddress });
  }
  return { addAddress };
}

export { useAddAddress };
