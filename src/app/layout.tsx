import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui components/Sidebar";
import StoreProvider from "./StoreProvider";
import FormNavigation from "./ui components/FormNavigation";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi-step Form",
  description: "Coded by Bada Jesutobi, Project from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-magnolia flex items-center justify-center h-screen w-screen lg:p-10 relative"
    >
      <body
        className={`${ubuntu.className} 2xl:container 2xl:mx-auto bg-magnolia lg:bg-white lg:p-4 lg:flex lg:h-[650px] w-full lg:w-[1000px] rounded-xl relative h-screen`}
      >
        <StoreProvider>
          <Sidebar />
          <main className="flex-1 absolute lg:static top-[150px]  lg:w-full left-0 right-0 mx-auto justify-between flex flex-col px-5 lg:px-20">
            <div className="bg-white px-5 py-10 flex-1 lg:pt-10 lg:w-full h-fit rounded-lg">
              {children}
            </div>
            <FormNavigation />
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
