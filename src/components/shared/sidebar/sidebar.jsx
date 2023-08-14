import NavLink from "@/components/navLinks/NavLink";
import Image from "next/image";
import Link from "next/link";
import sidebarRoute from "@/routes-data/sidebarRoute/sidebarRoute";
import relationalRoute from "@/routes-data/sidebarRoute/relationalRoute";

const Sidebar = () => {
  return (
    <div className="font-berlin">
      <div className="mt-4">
        <Image
          width={160}
          height={51}
          src="https://i.ibb.co/kxxsFW7/home-modified-3.png"
          alt="magic orb logo"
          className="mx-auto"
        />
      </div>
      <div className="mt-8 flex flex-col gap-y-4 lg:gap-y-3">
        {sidebarRoute.map((singleRoute) => (
          <NavLink
            key={singleRoute.id}
            exact={singleRoute.href === "/"}
            activeClassName="bg-gradient-to-b from-[#281B32] to-[#2d1e38f4] duration-500 transition-all"
            href={singleRoute.href}
            className="p-2 mx-4 rounded-lg ">
            <div className="flex items-center gap-2 ">
              <Image
                src={singleRoute.iconLink}
                width={41}
                height={41}
                alt={singleRoute.routeName}
              />
              <p className="text-lg text-white font-berlin font-semibold">
                {singleRoute.routeName}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
      <hr className="mt-4 mx-4 border-2 border-[#00000075]" />
      <div className="flex justify-center w-full mt-4">
        <ul className="list-disc w-fit mx-auto list-white">
          {relationalRoute.map((singleRoute) => (
            <li key={singleRoute.id} className="mb-1 text-white font-berlin">
              <Link href={singleRoute.href}>{singleRoute.routeName}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center w-full pt-2 text-white text-lg hidden sm:inline-block">
        #Com-orb
      </p>
    </div>
  );
};

export default Sidebar;
