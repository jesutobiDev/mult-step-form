"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const FormNavigation: React.FC = () => {
  const currentRoute = usePathname();
  const { name, email, phone } = useSelector(
    (state: RootState) => state.personalInfo
  );

  const validateForm = () => {
    if (!name || !email || !phone) return false;

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;

    if (!emailRegex.test(email)) return false;
    if (!phoneRegex.test(phone)) return false;

    return true;
  };

  const getPreviousRoute = (): string | null => {
    switch (currentRoute) {
      case "/step-2":
        return "/";
      case "/step-3":
        return "/step-2";
      case "/step-4":
        return "/step-3";
      default:
        return null;
    }
  };

  const getNextRoute = (): string | null => {
    if (!validateForm()) return null;

    switch (currentRoute) {
      case "/":
        return "/step-2";
      case "/step-2":
        return "/step-3";
      case "/step-3":
        return "/step-4";
      case "/step-4":
        return "/step-5";
      default:
        return null;
    }
  };

  const getNextLabel = (): string => {
    return currentRoute === "/step-4" ? "Confirm" : "Next Step";
  };

  return (
    <div className="flex w-full justify-between bg-white fixed lg:static bottom-0 left-0 items-center px-5">
      {currentRoute !== "/" && getPreviousRoute() && (
        <Link
          href={getPreviousRoute() as string}
          className="text-coolGray tracking-wide w-fit text-sm font-medium hover:text-marineBlue transition-all duration-300 ease-in-out my-5"
        >
          Go Back
        </Link>
      )}
      {currentRoute !== "/step-5" && getNextRoute() && (
        <Link
          href={getNextRoute() as string}
          className={`rounded-md py-3 px-7 tracking-wide w-fit text-sm font-medium transition-all duration-300 ease-in-out ml-auto my-5 ${
            currentRoute === "/step-4"
              ? "bg-purplishBlue text-magnolia"
              : "bg-marineBlue text-magnolia hover:opacity-90"
          } ${!getNextRoute() && "pointer-events-none opacity-50"}`}
        >
          {getNextLabel()}
        </Link>
      )}
    </div>
  );
};

export default FormNavigation;
