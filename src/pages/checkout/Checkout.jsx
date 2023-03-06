import React, { useState } from "react";
import {
  CheckoutBill,
  AddressForm,
  AddressList,
} from "../../components/Components";
import "./checkout.css";

function Checkout() {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState({ value: false, data: {} });
  const [selectedAddress, setSelectAddress] = useState();
  return (
    <div className="checkout-container">
      <div className="w-80p mx-auto">
        <AddressList
          setShowForm={setShowForm}
          setIsEditing={setIsEditing}
          setSelectAddress={setSelectAddress}
        />
        {showForm && (
          <AddressForm
            setShowForm={setShowForm}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
      <div className="mx-auto">
        <CheckoutBill selectedAddress={selectedAddress} />
      </div>
    </div>
  );
}

export { Checkout };
