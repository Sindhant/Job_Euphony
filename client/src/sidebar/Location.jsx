import React from "react";
import InputField from "../Components/InputField";

const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2"> Location</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="delhi"
          title="Delhi"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="pune"
          title="Pune"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="bangalore"
          title="Bangalore"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="chennai"
          title="Chennai"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="mohali"
          title="Mohali"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="ahmedabad"
          title="Ahmedabad"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
