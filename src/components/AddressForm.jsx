import { React, useEffect, useState } from "react";
import { useAddress } from "../context/addressContext/address-context.js";
import { useAddAddress } from "../utilities/useAddAddress.js";
import { useEditAddress } from "../utilities/useEditAddress.js";

function AddressForm({ setShowForm, isEditing, setIsEditing }) {
  const initialFormData = {
    fullName: "",
    contact: "",
    pincode: "",
    house: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const { addressDispatch } = useAddress();
  const { addAddress } = useAddAddress();
  const { editAddress } = useEditAddress();

  useEffect(() => {
    if (isEditing.value) {
      setFormData((val) => ({
        ...val,
        fullName: isEditing.data.fullName,
        contact: isEditing.data.contact,
        pincode: isEditing.data.pincode,
        house: isEditing.data.house,
        area: isEditing.data.area,
        landmark: isEditing.data.landmark,
        city: isEditing.data.city,
        state: isEditing.data.state,
      }));
    } else {
      setFormData(initialFormData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  function addTaskHandler(e) {
    e.preventDefault();

    if (isEditing.value) {
      editAddress({ ...formData, id: isEditing.data.id }, setIsEditing);
    } else {
      addAddress({ ...formData });
    }
    setFormData(initialFormData);
    setShowForm((val) => !val);
  }
  return (
    <div className="modal-form-container">
      <div className="form-modal p-8 rounded w-4/5 md:w-2/5">
        <h4 className="text-center">Address Form</h4>
        <form onSubmit={addTaskHandler} className="flex flex-col gap-y-4">
          <div className="address-input-container">
            <div className="input-group">
              <label htmlFor="full-name">Full Name</label>
              <input
                id="full-name"
                className="address-input"
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData((val) => ({ ...val, fullName: e.target.value }))
                }
                required
                minLength={3}
              />
            </div>
            <div className="input-group">
              <label htmlFor="contact">Mobile Number</label>
              <input
                id="contact"
                className="address-input"
                type="number"
                placeholder="10-digit mobile number without prefixes"
                value={formData.contact}
                required
                onKeyDown={(e) =>
                  e.target.value === isNaN(parseFloat(e.target.value))
                    ? "0"
                    : e.target.value
                }
                onChange={(e) =>
                  setFormData((val) => ({ ...val, contact: e.target.value }))
                }
              />
            </div>
            <div className="input-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                id="pincode"
                className="address-input"
                type="number"
                value={formData.pincode}
                placeholder="6 digit [0-9] PIN code"
                onChange={(e) =>
                  setFormData((val) => ({ ...val, pincode: e.target.value }))
                }
                onKeyUp={(e) =>
                  e.target.value === isNaN(parseFloat(e.target.value))
                    ? "0"
                    : e.target.value
                }
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="house">House no., Flat</label>
              <input
                id="house"
                className="address-input"
                type="text"
                value={formData.house}
                onChange={(e) =>
                  setFormData((val) => ({ ...val, house: e.target.value }))
                }
                required
                minLength={3}
              />
            </div>
            <div className="input-group">
              <label htmlFor="area">Area</label>
              <input
                id="area"
                className="address-input"
                type="text"
                value={formData.area}
                onChange={(e) =>
                  setFormData((val) => ({ ...val, area: e.target.value }))
                }
                required
                minLength={3}
              />
            </div>
            <div className="input-group">
              <label htmlFor="landmark">Landmark</label>
              <input
                id="landmark"
                className="address-input"
                type="text"
                value={formData.landmark}
                onChange={(e) =>
                  setFormData((val) => ({ ...val, landmark: e.target.value }))
                }
                required
                minLength={3}
              />
            </div>
            <div className="input-group">
              <label htmlFor="city">City/Town</label>
              <input
                id="city"
                className="address-input"
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData((val) => ({ ...val, city: e.target.value }))
                }
                required
                minLength={3}
              />
            </div>
            <div className="input-group">
              <label htmlFor="state">State</label>
              <select
                className="address-input"
                name="states"
                id="states"
                onChange={(e) =>
                  setFormData((val) => ({ ...val, state: e.target.value }))
                }
                required
              >
                <option value="select">Select</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary add-btn">
            {isEditing.value ? "Update" : "Add"}
          </button>
          <button
            className="btn btn-success dummy-btn"
            onClick={(e) => {
              e.preventDefault();
              addressDispatch({ type: "ADD-DUMMY-ADDRESS" });
              setShowForm((val) => !val);
            }}
          >
            Add Dummy Address
          </button>
        </form>
        <button
          className="close-btn"
          onClick={() => setShowForm((val) => !val)}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}

export { AddressForm };
