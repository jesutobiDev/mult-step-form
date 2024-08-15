"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const FormNavigation: React.FC = () => {
  const currentRoute = usePathname();

  const getPreviousRoute = (): string | null => {
    switch (currentRoute) {
      case "/step-2":
        return "/";
      case "/step-3":
        return "/step-2";
      case "/step-4":
        return "/step-3";
      // case "/step-5":
      //   return "/step-4";
      default:
        return null;
    }
  };

  const getNextRoute = (): string | null => {
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

  return (
    <div className="flex w-full justify-between bg-white fixed lg:static bottom-0 left-0 items-center px-5">
      {currentRoute !== "/" && getPreviousRoute() && (
        <Link
          href={getPreviousRoute() as string}
          className="text-coolGray tracking-wide w-fit text-sm font-medium hover:text-marineBlue transition-all duration-300 ease-in-out py-7"
        >
          Go Back
        </Link>
      )}
      {currentRoute !== "/step-5" && getNextRoute() && (
        <Link
          href={getNextRoute() as string}
          className="bg-marineBlue text-magnolia rounded-md py-3 px-7 tracking-wide w-fit text-sm font-medium hover:opacity-90 transition-all duration-300 ease-in-out ml-auto"
        >
          Next Step
        </Link>
      )}
    </div>
  );
};

export default FormNavigation;
