"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setPlan, setPlanDuration } from "@/store/slices/planSlice";
import { RootState } from "@/store/store";

const Step2 = () => {
  const dispatch = useDispatch();
  const { plans, selectedPlan, planDuration } = useSelector(
    (state: RootState) => state.plan
  );


  const planClick = (clickedPlanName: string) => {
    dispatch(setPlan(clickedPlanName));
  };


  const handlePlanDuration = () => {
    dispatch(setPlanDuration(planDuration === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-marineBlue text-4xl font-semibold tracking-wide">
        Select your plan
      </h1>
      <p className="text-coolGray mt-2 tracking-wide">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex gap-5 mt-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 h-44 rounded-xl p-4 flex flex-col justify-between border cursor-pointer hover:border-purplishBlue transition-all duration-300 ease-in-out ${
              plan.name === selectedPlan
                ? "bg-magnolia border-purplishBlue"
                : "bg-transparent border-coolGray"
            }`}
            onClick={() => planClick(plan.name)}
          >
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <Image
                src={plan.icon}
                alt={`${plan.name} icon`}
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-marineBlue font-medium tracking-wide">
                {plan.name}
              </h2>
              <p className="text-marineBlue font-medium tracking-wide">
                {"$"}
                {plan.price[planDuration]}
                {"/"}
                {planDuration === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-lightGray/20 rounded-md p-4 mt-10 flex gap-4 font-semibold items-center justify-center">
        <p
          className={`${
            planDuration === "monthly" ? "text-marineBlue" : "text-coolGray"
          }`}
        >
          Monthly
        </p>
        <div
          className={`bg-marineBlue rounded-full w-10 h-5 flex items-center p-1 cursor-pointer ${
            planDuration === "monthly" ? "justify-start" : "justify-end"
          } `}
          onClick={handlePlanDuration}
        >
          <div className={`bg-white h-full w-2/5 rounded-full`}></div>
        </div>
        <p
          className={`${
            planDuration === "yearly" ? "text-marineBlue" : "text-coolGray"
          }`}
        >
          Yearly
        </p>
      </div>
      <div className="flex w-full justify-between mb-5 mt-auto">
        <Link
          href="/"
          className="text-coolGray py-3 px-7 tracking-wide w-fit text-sm mb-5 font-medium hover:text-marineBlue transition-all duration-300 ease-in-out"
        >
          Go Back
        </Link>
        <Link
          href="/step-3"
          className="bg-marineBlue text-magnolia rounded-md py-3 px-7 tracking-wide w-fit text-sm mb-5 font-medium hover:opacity-90 transition-all duration-300 ease-in-out"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default Step2;
