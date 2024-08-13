import thankyou from "../../../public/assets/images/icon-thank-you.svg";
import Image from "next/image";
const Step5 = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-center gap-3">
      <Image src={thankyou} alt="Thank you" width={80} height={80} />

      <h1 className="text-marineBlue text-4xl font-semibold tracking-wide"></h1>
      <h1 className="text-marineBlue text-4xl font-semibold tracking-wide">
        Thank you
      </h1>
      <p className="text-coolGray mt-2 tracking-wide">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Step5;
