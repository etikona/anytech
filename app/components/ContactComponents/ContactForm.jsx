"use client";
import React from "react";
import { useForm } from "react-hook-form";
import arrow from "@/public/assets/icons/arrow.png";
import Image from "next/image";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-10 md:p-12 mt-10 mb-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", {
                required: "First Name is required",
              })}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="First Name"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              {...register("jobTitle", { required: "Job Title is required" })}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Job Title"
            />
            {errors.jobTitle && (
              <span className="text-red-500 text-sm">
                {errors.jobTitle.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              {...register("companyName", {
                required: "Company Name is required",
              })}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Company Name"
            />
            {errors.companyName && (
              <span className="text-red-500 text-sm">
                {errors.companyName.message}
              </span>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Let us know how we can help you!"
            rows="5"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Section */}
        <p className="text-sm text-gray-500">
          By submitting this form, you confirm that you agree to the processing
          of your personal data by AnyTech as described in the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          className="bg-orange-600 w-full mt-3 flex items-center text-white text-lg p-2 text-center rounded cursor-pointer transform-3d transition-transform duration-300 "
        >
          <p className="transition-transform duration-300 hover:translate-x-2">
            Submit
          </p>
          <Image
            src={arrow}
            width={20}
            height={20}
            alt="right arrow"
            className="ml-2 transition-transform duration-300 hover:translate-x-2 "
          />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
