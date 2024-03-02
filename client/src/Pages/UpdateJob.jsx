import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    // Check if selectedOption is not null, otherwise default to empty array
    data.skills = selectedOption || [];
    
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

  const { skills } = useLoaderData();

  useEffect(() => {
    if (skills) {
      setSelectedOption(skills);
    }
  }, [skills]);

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

          {/* Other input fields */}
          
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

          {/* More input fields */}
          
          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateJob;
