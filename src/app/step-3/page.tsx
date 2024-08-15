"use client"
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
      <h1 className="text-marineBlue text-4xl font-semibold lg:tracking-wide">Pick add-ons</h1>
      <p className="text-coolGray mt-2 lg:tracking-wide">Add-ons help enhance your gaming experience.</p>
      <form className="mt-6">
        {addons.map((addon, index) => (
          <div
            key={index}
            className={`flex items-center mb-5 w-full border px-4 py-4 rounded-md gap-4 hover:border-purplishBlue cursor-pointer transition-all duration-300 ease-in-out ${
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
              <p className="font-semibold text-marineBlue">{addon.title}</p>
              <p className="text-coolGray text-sm font-medium">{addon.description}</p>
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
    
    </div>
  );
};

export default Step3;
