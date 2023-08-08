import Image from "next/image";
import Link from "next/link";

// https://i.ibb.co/bQjx1Ld/Home.png
// https://i.ibb.co/kBdQfrX/Icon-1.png
// https://i.ibb.co/TYthXwz/Icon-2.png
// https://i.ibb.co/gg1CqrL/Icon-3.png
// https://i.ibb.co/zsfM69k/Icon-4.png
// https://i.ibb.co/f9sCBrB/Icon-5.png
// https://i.ibb.co/SKHyfYp/Icon.png
// https://i.ibb.co/zNrsZKZ/Tarot-1.png
// https://i.ibb.co/HrLXbQ8/Tarot-2.png
// https://i.ibb.co/2YnxRVQ/Tarot-3.png
// https://i.ibb.co/RgfDXBV/Tarot-4.png
// https://i.ibb.co/DL2dzN9/Tarot-5.png
// https://i.ibb.co/RD05jMX/Tool-label-1.png
// https://i.ibb.co/RD05jMX/Tool-label-1.png

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
      <div className="mt-8 ">
        {sidebarRoute.map((singleRoute) => (
          <Link key={singleRoute.id} href={singleRoute.href} >
            <div className="flex items-center gap-2 md:p-1 lg:p-2 mx-4 rounded-lg border">
              <Image
                src={singleRoute.iconLink}
                width={41}
                height={41}
                alt={singleRoute.routeName}
              />
              <p className="text-lg text-white font-berlin font-bold">
                {singleRoute.routeName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
