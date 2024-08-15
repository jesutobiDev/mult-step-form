"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateSingleField } from "@/store/slices/personalInfoSlice";
import { useState, useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector(
    (state: RootState) => state.personalInfo
  );

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateFields = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "" };

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\+?[0-9\s\-]{7,15}$/.test(phone)) {
      newErrors.phone = "Phone number is invalid";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    field: "name" | "email" | "phone",
    value: string
  ) => {
    dispatch(updateSingleField({ field, value }));
    setErrors({ ...errors, [field]: "" });
  };

  return (
    <div className="flex flex-col h-auto lg:h-full lg:w-full">
      <h1 className="text-marineBlue text-4xl font-semibold lg:tracking-wide">
        Personal info
      </h1>
      <p className="text-coolGray mt-2 lg:tracking-wide">
        Please provide your name, email address, and phone number.
      </p>
      <form action="">
        <div className="mt-6">
          <label
            className="block text-sm font-medium text-marineBlue"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-lightGray'} rounded-md outline-none focus:border-purplishBlue py-3 px-4 text-marineBlue placeholder:text-coolGray font-medium`}
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mt-6">
          <label
            className="block text-sm font-medium text-marineBlue"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-lightGray'} rounded-md outline-none focus:border-purplishBlue py-3 px-4 text-marineBlue placeholder:text-coolGray font-medium`}
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mt-6">
          <label
            className="text-sm font-medium text-marineBlue"
            htmlFor="phone-number"
          >
            Phone Number
          </label>
          <input
            className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-lightGray'} rounded-md outline-none focus:border-purplishBlue py-3 px-4 text-marineBlue placeholder:text-coolGray font-medium`}
            type="tel"
            id="phone-number"
            name="phone-number"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </form>
    </div>
  );
}
