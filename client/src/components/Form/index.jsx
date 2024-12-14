import React from "react";
import formImage from "../../assets/formImage/formImage.jpg";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-32 py-16 flex justify-between">
      <div>
        <div className="w-[760px]  flex flex-col gap-7">
          <h1 className="font-festivo text-white text-8xl">CONTACT US</h1>
          <p className="text-white text-xl">
            At Coffeeshop Company® we strive to ensure you have the best
            possible experience. Your opinion matters to us, and we would love
            to hear from you. If you have any questions about our products,
            services, locations, or just want to provide feedback, please use
            the contact information listed below or the contact form on this
            page.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-10 w-[760px] ">
          <div className="flex gap-10 flex-wrap">
            <div className="flex flex-col gap-5">
              <label className=" pl-5 text-white">First Name</label>
              <input
                placeholder="Max "
                name="userName"
                {...register("userName", { required: true })}
                className="w-[340px] bg-black px-10 py-5 border text-white border-gray-400 rounded-full"
              />
            </div>
            <div className="flex  flex-col gap-5">
              <label className="pl-5 text-white">Last Name</label>
              <input
                name="lastName"
                {...register("lastName", { required: true })}
                placeholder="Mustermann "
                className="w-[340px] bg-black border text-white border-gray-400 px-10 py-5 rounded-full"
              />
            </div>
            <div className="flex  flex-col gap-5">
              <label className="pl-5 text-white">Email</label>
              <input
                name="email"
                {...register("email", { required: true })}
                className="w-[718px] px-10 py-5 bg-black border text-white border-gray-400  rounded-full"
                placeholder="max.mustermann@domain.com"
              />
            </div>
            <div className="w-full">
              <label>How can we help you?</label>
              <textarea
                name="textarea"
                {...register("textarea", { required: true })}
                placeholder="How can we help you?"
                className="border rounded-lg p-5 font-festivo text-white bg-black w-full h-[300px] "
              ></textarea>
            </div>
            <div className="flex justify-center items-start">
              <input
                type="checkbox"
                name="check"
                className="mt-1.5 "
                {...register("check", { required: true })}
              />
              <p className="text-white pl-2">
                I agree to the transfer and storage of my personal data for the
                purpose of handling e-mail traffic. I have taken note of the
                rights to which I am entitled in the area of data protection. By
                submitting this form, I accept the storage of my data.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#0c2b20] rounded-3xl mt-10 py-4 px-14 text-[#a6a6a6]"
          >
            Submit
          </button>
        </form>
      </div>
      <div className=" ">
        <img
          className=" max-w-[400px] h-[800px] rounded-[500px]"
          src={formImage}
        />
      </div>
    </div>
  );
};

export default Form;
