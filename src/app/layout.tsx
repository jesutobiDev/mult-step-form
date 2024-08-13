import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui components/Sidebar";
import StoreProvider from "./StoreProvider";

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
      className="bg-magnolia flex items-center justify-center h-screen w-screen p-10"
    >
      <body
        className={`${ubuntu.className} 2xl:container 2xl:mx-auto bg-white p-4 flex h-[650px] w-[1000px] rounded-xl`}
      >
        <StoreProvider>
          <Sidebar />
          <main className="flex-1 px-20 pt-10">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
