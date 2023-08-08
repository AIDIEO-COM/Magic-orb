import NavLink from "@/components/navLinks/navLink";
import Image from "next/image";
import Link from "next/link";

const sidebarRoute = [
  {
    id: "1",
    routeName: "Home",
    href: "/",
    iconLink: "https://i.ibb.co/bQjx1Ld/Home.png",
  },
  {
    id: "2",
    routeName: "Magic orb",
    href: "/magic-orb",
    iconLink: "https://i.ibb.co/SKHyfYp/Icon.png",
  },
  {
    id: "3",
    routeName: "Tools",
    href: "/tools",
    iconLink: "https://i.ibb.co/kBdQfrX/Icon-1.png",
  },
  {
    id: "4",
    routeName: "Library",
    href: "/library",
    iconLink: "https://i.ibb.co/TYthXwz/Icon-2.png",
  },
  {
    id: "5",
    routeName: "Account",
    href: "/account",
    iconLink: "https://i.ibb.co/gg1CqrL/Icon-3.png",
  },
  {
    id: "6",
    routeName: "Shop",
    href: "/shop",
    iconLink: "https://i.ibb.co/zsfM69k/Icon-4.png",
  },
  {
    id: "7",
    routeName: "Settings",
    href: "/settings",
    iconLink: "https://i.ibb.co/f9sCBrB/Icon-5.png",
  },
];

const Sidebar = () => {
  return (
    <div>
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
          <NavLink key={singleRoute.id} exact={singleRoute.href === '/'} activeClassName="bg-gradient-to-b from-[#281B32] to-[#2d1e38f4]" href={singleRoute.href} className="md:p-1 lg:p-2 mx-4 rounded-lg ">
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
    </div>
  );
};

export default Sidebar;
