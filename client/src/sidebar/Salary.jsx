import React from 'react';
import Button from './Button';
import InputField from '../Components/InputField';

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div className='mb-4 flex-wrap'>
        <Button onClickHandler={handleClick} value="" title="Hourly"/> 
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/> 
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/> 
      </div>

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
          range={30}
          title="< 30000K"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          range={50}
          title="< 50000K"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          range={80}
          title="< 80000K"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          range={100}
          title="< 100000K"
          name="test"
        />
      </div>
    </div>
  );
}

export default Salary;




// 3:01:40 / 3:32:47