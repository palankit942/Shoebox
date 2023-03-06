import { useAddress } from "../context/addressContext/address-context";

function useEditAddress() {
  const { addressDispatch } = useAddress();

  function editAddress(currentAddress, setIsEditing) {

    addressDispatch({ type: "EDIT-ADDRESS", payload: currentAddress });
    setIsEditing((prevValue) => ({...prevValue, value: false, data: {}}))
  }
  return { editAddress };
}

export { useEditAddress };
