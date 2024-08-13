"use client"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleAddon } from "@/store/slices/addonsSlice";
import Image from "next/image";
import checkmark from "../../../public/assets/images/icon-checkmark.svg";

const Step3 = () => {
  const dispatch = useDispatch();
  const addons = useSelector((state: RootState) => state.addons.addons);
  const planDuration = useSelector((state: RootState) => state.plan.planDuration);

  const handleToggleAddon = (title: string) => {
    dispatch(toggleAddon(title));
  };

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-marineBlue text-4xl font-semibold tracking-wide">Pick add-ons</h1>
      <p className="text-coolGray mt-2 tracking-wide">Add-ons help enhance your gaming experience.</p>
      <form className="mt-6">
        {addons.map((addon, index) => (
          <div
            key={index}
            className={`flex items-center mb-5 w-full border px-4 py-2 rounded-md gap-4 hover:border-purplishBlue cursor-pointer transition-all duration-300 ease-in-out ${
              addon.selected ? "bg-magnolia border-purplishBlue" : "border-coolGray"
            }`}
            onClick={() => handleToggleAddon(addon.title)}
          >
            {/* Custom Checkbox */}
            <div
              className={`relative w-4 h-4 flex items-center justify-center rounded-sm border border-coolGray ${
                addon.selected ? "bg-purplishBlue border-purplishBlue" : ""
              }`}
            >
              {addon.selected && (
                <Image
                  src={checkmark}
                  alt="Selected"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
              )}
              <input
                type="checkbox"
                checked={addon.selected}
                onChange={() => handleToggleAddon(addon.title)}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div>
              <p>{addon.title}</p>
              <p>{addon.description}</p>
            </div>
            <p className="text-purplishBlue ml-auto">
              {"+$"}
              {addon.price[planDuration]}
              {"/"}
              {planDuration === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        ))}
      </form>
      <div className="flex w-full justify-between mb-5 mt-auto">
        <Link
          href="/step-2"
          className="text-coolGray py-3 px-7 tracking-wide w-fit text-sm mb-5 font-medium hover:text-marineBlue transition-all duration-300 ease-in-out"
        >
          Go Back
        </Link>
        <Link
          href="/step-4"
          className="bg-marineBlue text-magnolia rounded-md py-3 px-7 tracking-wide w-fit text-sm mb-5 font-medium hover:opacity-90 transition-all duration-300 ease-in-out"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default Step3;
