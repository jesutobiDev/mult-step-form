"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideLink = [
  {
    id: 1,
    href: "/",
    label: "Your Info",
  },
  {
    id: 2,
    href: "/step-2",
    label: "Select Plan",
  },
  {
    id: 3,
    href: "/step-3",
    label: "Add-ons",
  },
  {
    id: 4,
    href: "/step-4",
    label: "Summary",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-sidebar-mobile lg:bg-sidebar-desktop lg:w-[300px] rounded-xl bg-no-repeat bg-cover p-10 flex flex-col gap-7">
      {sideLink.map((item) => (
        <Link href={item.href} key={item.id}>
          <div className="flex gap-2 items-center uppercase">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                pathname === item.href
                  ? "bg-lightBlue text-marineBlue"
                  : "text-white bg-transparent border border-white"
              }`}
            >
              {item.id}
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-pastelBlue">Step {item.id}</p>
              <p className="text-white font-medium tracking-wide leading-7">
                {item.label}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
