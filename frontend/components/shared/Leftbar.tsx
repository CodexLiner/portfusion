"use client";
import { sidebarLinks } from "@/constants/dashboard";
import { link } from "fs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
function Leftbar() {
  const router = useRouter();
  const path = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar content-start">
      <h1 className="text-light-1 max-lg:hidden pl-5 pb-3 font-medium">Menu</h1>
      <div className="flex w-full flex-1 flex-col gap-6 pl-5 pr-20 pt-5 content-start">
        {sidebarLinks.map((link) => {
          const isActive =
            (path.includes(link.route) && link.route.length > 1) ||
            path === link.route;
          console.log(isActive + link.label);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link rounded-md  ${
                isActive && "bg-white border-none"
              }`}
            >
              <Image src={link.icon} alt={link.label} width={20} height={20} />
              <p
                className={`max-lg:hidden ${
                  isActive ? "text-dark-1" : "text-light-1"
                }`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default Leftbar;
