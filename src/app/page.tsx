"use client"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateSingleField } from "@/store/slices/personalInfoSlice";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector(
    (state: RootState) => state.personalInfo
  );

  const handleChange = (
    field: "name" | "email" | "phone",
    value: string
  ) => {
    dispatch(updateSingleField({ field, value }));
  };

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-marineBlue text-4xl font-semibold tracking-wide">
        Personal info
      </h1>
      <p className="text-coolGray mt-2 tracking-wide">
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
            className="mt-1 block w-full border border-lightGray rounded-md outline-none focus:border-purplishBlue py-3 px-4 text-marineBlue placeholder:text-coolGray font-medium"
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className="mt-6">
          <label
            className="block text-sm font-medium text-marineBlue"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="mt-1 block w-full border border-lightGray rounded-md outline-none focus:border-purplishBlue py-3 px-4 text-marineBlue placeholder:text-coolGray font-medium"
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="mt-6">
          <label
            className="text-sm font-medium text-marineBlue"
            htmlFor="phone-number"
          >
            Phone Number
          </label>
          <input
            className="mt-1 block w-full border border-lightGray rounded-md outline-none focus:border-purplishBlue py-3 px-4 text-marineBlue placeholder:text-coolGray font-medium"
            type="tel"
            id="phone-number"
            name="phone-number"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </form>
      <Link
        href="/step-2"
        className="bg-marineBlue text-magnolia rounded-md py-3 px-7 tracking-wide w-fit text-sm ml-auto mb-5 font-medium hover:opacity-90 transition-all duration-300 ease-in-out mt-auto"
      >
        Next Step
      </Link>
    </div>
  );
}
