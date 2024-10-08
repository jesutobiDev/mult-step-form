"use client";
import Link from "next/link";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Step4 = () => {
  const { plans, selectedPlan, planDuration } = useSelector(
    (state: RootState) => state.plan
  );
  
  const selectedAddons = useSelector((state: RootState) => 
    state.addons.addons.filter((addon) => addon.selected)
  );

  const selectedPlanDetails = plans.find((plan) => plan.name === selectedPlan);

  const totalPrice = selectedPlanDetails
    ? selectedPlanDetails.price[planDuration] +
      selectedAddons.reduce((total, addon) => total + addon.price[planDuration], 0)
    : 0;

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-marineBlue text-4xl font-semibold lg:tracking-wide">
        Finishing up
      </h1>
      <p className="text-coolGray mt-2 lg:tracking-wide">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-lightGray/15 rounded-lg p-6 mt-6">
        <div className="pb-6 flex justify-between items-center border-b border-lightGray">
          <div>
            <p className="text-marineBlue font-semibold">
              {selectedPlanDetails?.name}{" "}
              <span className="capitalize">
                {"("}
                {planDuration}
                {")"}
              </span>
            </p>
            <Link href="/step-2" className="text-coolGray underline">
              Change
            </Link>
          </div>
          <p className="text-marineBlue font-semibold">
            {"$"}
            {selectedPlanDetails?.price[planDuration]}
            {"/"}
            {planDuration === "monthly" ? "mo" : "yr"}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {selectedAddons.map((addon, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-coolGray">{addon.title}</p>
              <p className="text-marineBlue">
                {"+$"}
                {addon.price[planDuration]}
                {"/"}
                {planDuration === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center py-4 px-6 mt-4 rounded-lg">
        <p className="text-coolGray">
          Total{" ("}per{" "}
          {planDuration === "monthly" ? "month" : "year"}
          {")"}
        </p>
        <p className="text-purplishBlue font-semibold text-lg">
          {"$"}
          {totalPrice}
          {"/"}
          {planDuration === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    
    </div>
  );
};

export default Step4;
