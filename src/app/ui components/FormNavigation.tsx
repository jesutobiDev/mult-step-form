import Link from "next/link"

const FormNavigation = () => {
  return (
    <div className="flex w-full justify-between bg-white fixed lg:static bottom-0 left-0 items-center p-5">
    <Link
      href="/"
      className="text-coolGray tracking-wide w-fit text-sm font-medium hover:text-marineBlue transition-all duration-300 ease-in-out"
    >
      Go Back
    </Link>
    <Link
      href="/step-3"
      className="bg-marineBlue text-magnolia rounded-md py-3 px-7 tracking-wide w-fit text-sm font-medium hover:opacity-90 transition-all duration-300 ease-in-out"
    >
      Next Step
    </Link>
  </div>
  )
}

export default FormNavigation