import React from 'react'
import InputField from '../Components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const TwentyFourHoursAgo = new Date(now - 24 *60*60*1000);
    const SevenDaysAgo = new Date(now -  7* 24 *60*60*1000);
    const ThirtyDaysAgo = new Date(now - 30 *24 *60*60*1000);

  // convert date to string
  const TwentyFourHoursAgoDate = TwentyFourHoursAgo.toISOString().slice(0,10);
  const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0,10);
  const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);
  
  return (
    <div>
    <h4 className="text-lg font-medium mb-2"> Date Of Posting</h4>
     
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>All Time
      </label>

      <InputField
        handleChange={handleChange}
        value={TwentyFourHoursAgoDate}
        title="Last 24 Hrs"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value={SevenDaysAgoDate}
        title="Last 7 Days"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value={ThirtyDaysAgoDate}
        title="Last Month"
        name="test"
      />
     
    </div>
  </div>
  )
}

export default JobPostingData
