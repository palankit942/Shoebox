import React from "react";
import { useAddress } from "../context/addressContext/address-context";

function AddressList({ setShowForm, setIsEditing, setSelectAddress }) {
  const { addressState, addressDispatch } = useAddress();
  const { address } = addressState;
  return (
    <div className="address-container">
      <div className="address-list-header flex items-center justify-between p-6">
        <span className="text-md font-semibold">Address List</span>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsEditing({
              value: false,
              data: {},
            });
            setShowForm((val) => !val);
          }}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="address-list px-8 py-4">
        {address.map((item) => (
          <label
            key={item.id}
            className="address-item"
          >
          <input onClick={() => setSelectAddress(item)} name="addresses" type="radio" />
          <div className="address-content">
            <p className="font-semibold">{item.fullName}</p>
            <p className="phone">{item.contact}</p>
            <p className="sub-text">
              {item.house}, {item.area}
            </p>
            <p className="sub-text">{item.landmark}</p>
            <p className="sub-text">
              {item.city.toUpperCase()}, {item.state.toUpperCase()}{" "}
              {item.pincode}
            </p>
            <div className="address-item-btns">
              <button
                className="address-btn address-edit-btn"
                onClick={() => {
                  setIsEditing((prevValue) => ({
                    ...prevValue,
                    value: true,
                    data: item,
                  }));
                  setShowForm((val) => !val);
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                className="address-btn address-delete-btn"
                onClick={() =>
                  addressDispatch({ type: "DELETE-ADDRESS", payload: item.id })
                }
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export { AddressList };
