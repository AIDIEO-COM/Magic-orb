import Image from "next/image";

const Sidebar = () => {
  const sidebarRoute = [
    {
      id: "1",
      routeName: "home",
      href: "/",
      iconLink: "https://i.ibb.co/bQjx1Ld/Home.png",
    },
  ];

  return (
    <div>
      {sidebarRoute.map((singleRoute) => (
        <div key={singleRoute.id} className="flex items-center gap-2">
          <Image
            src={singleRoute.iconLink}
            width={41}
            height={41}
            alt={singleRoute.routeName}
          />
          <p className="text-lg">{singleRoute.routeName}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
