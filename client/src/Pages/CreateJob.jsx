import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    fetch("http://localhost:5000/post-job", {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Posted Successfully !!!!")
        }
        reset()
      });

  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "ReactJS", label: "ReactJS" },
    { value: "Express", label: "Express" },
    { value: "Python", label: "Python" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Full-Stack", label: "Full-Stack" },
    { value: "Mern-Stack", label: "Mern-Stack" },
    { value: "Frontend-Development", label: "Frontend-Development" },
    { value: "Backend", label: "Backend" },
    { value: "Machine-Learning", label: "Machine-Learning" },
    { value: "JAVA", label: "JAVA" },
    { value: "Project-Testing", label: "Project-Testing" },
    { value: "Android-Development", label: "Android-Development" },
    { value: "UI/UX", label: "UI/UX" },
  ];

  const handleSkillChange = (newValue) => {
    console.log("Selected Skills:", newValue);
    setSelectedOption(newValue || []);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <div className="bg-[#f3faf9] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Title</label>
              <input
                type="text"
                placeholder="Web Developer"
                {...register("jobTitle", { required: true })}
                className="create-job-input"
              />
              {errors.jobTitle && <p>This field is required</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName", { required: true })}
                className="create-job-input"
              />
              {errors.companyName && <p>This field is required</p>}
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Minimum Salary</label>
              <input
                type="text"
                placeholder="₹20k"
                {...register("minPrice", { required: true })}
                className="create-job-input"
              />
              {errors.minPrice && <p>This field is required</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Maximum Salary</label>
              <input
                type="text"
                placeholder="₹50k"
                {...register("maxPrice", { required: true })}
                className="create-job-input"
              />
              {errors.maxPrice && <p>This field is required</p>}
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Salary Type</label>
              <select {...register("salaryType", { required: true })} className="create-job-input">
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              {errors.salaryType && <p>This field is required</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New Delhi"
                {...register("jobLocation", { required: true })}
                className="create-job-input"
              />
              {errors.jobLocation && <p>This field is required</p>}
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Posting Date</label>
              <input
                type="Date"
                placeholder="Ex: 2024-1-26"
                {...register("postingDate", { required: true })}
                className="create-job-input"
              />
              {errors.postingDate && <p>This field is required</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Experience Level</label>
              <select
                {...register("experienceLevel", { required: true })}
                className="create-job-input"
              >
                <option value="">Choose Your Experience</option>
                <option value="noExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work-Remotely</option>
              </select>
              {errors.experienceLevel && <p>This field is required</p>}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-lg ">Required Skill Sets: </label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={handleSkillChange}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Company Logo</label>
              <input
                type="url"
                placeholder="Paste company logo URL: "
                {...register("companyLogo", { required: true })}
                className="create-job-input"
              />
              {errors.companyLogo && <p>This field is required</p>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Employment Level</label>
              <select
                {...register("employmentType", { required: true })}
                className="create-job-input"
              >
                <option value="">Choose Your Employment</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
              {errors.employmentType && <p>This field is required</p>}
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg ">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              placeholder="Job Description"
              {...register("description", { required: true })}
            />
            {errors.description && <p>This field is required</p>}
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg ">Job Posted By</label>
            <input
              type="email"
              placeholder="your email"
              {...register("postedBy", { required: true })}
              className="create-job-input"
            />
            {errors.postedBy && <p>This field is required</p>}
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateJob;
