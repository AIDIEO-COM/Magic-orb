"use client";
import IsLoading from "@/components/shared/loadingSpinner/IsLoading";
import useGetUser from "@/hooks/useGetUser";
import { userRoutes } from "@/privateRoutes/userRoutes/userRoutes";
import { redirect, usePathname } from "next/navigation";

const SecureRoute = ({ children }) => {
  const [user, , isLoading] = useGetUser();
  const pathname = usePathname();
  if(isLoading){
    return <IsLoading></IsLoading>
  }
  // check this pathname is in userRoutes
  if (!user && userRoutes.includes(pathname)) {
    return redirect("/login");
  }
  return children;
};

export default SecureRoute;
