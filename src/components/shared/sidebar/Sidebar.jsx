import NavLink from "@/components/navLinks/NavLink";
import Image from "next/image";
import Link from "next/link";
import sidebarRoute from "@/routes-data/sidebarRoute/sidebarRoute";
import relationalRoute from "@/routes-data/sidebarRoute/relationalRoute";

const Sidebar = () => {
  return (
    <div className="font-berlin relative h-full">
      <div className="pt-5">
        <Link href={"/"}>
          <Image
            width={140}
            height={51}
            src="https://i.ibb.co/kxxsFW7/home-modified-3.png"
            alt="magic orb logo"
            className="mx-auto"
          />
        </Link>
      </div>
      <div className="mt-8 flex flex-col gap-y-3 2xl:gap-y-[30px]">
        {sidebarRoute.map((singleRoute) => (
          <NavLink
            key={singleRoute.id}
            exact={singleRoute.href === "/"}
            activeClassName="bg-gradient-to-b from-[#281B32] to-[#2d1e38f4] duration-500 transition-all"
            href={singleRoute.href}
            className="px-4 py-2 mx-2 2xl:mx-4 rounded-lg font-berlin">
            <div className="flex items-center gap-[10px] ">
              <Image
                src={singleRoute.iconLink}
                width={23}
                height={23}
                alt={singleRoute.routeName}
              />
              <p className="text-[20px] text-white font-berlin font-medium">
                {singleRoute.routeName}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
      <hr className="my-4 mx-3 border-2 border-[#00000075]" />
      <div className="mt-4 ml-8">
        <ul className="list-disc list-white mt-2">
          {relationalRoute.map((singleRoute) => (
            <li
              key={singleRoute.id}
              className="mb-1 mx-6 text-white font-berlin">
              <Link href={singleRoute.href}>{singleRoute.routeName}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center w-full pt-2 text-white text-lg hidden sm:inline-block absolute bottom-1 2xl:bottom-3">
        @CoM-orb
      </p>
    </div>
  );
};

export default Sidebar;
