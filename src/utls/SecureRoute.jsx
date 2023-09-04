"use client";
import useGetUser from "@/hooks/useGetUser";
import React from "react";
import { userRoutes } from "@/privateRoutes/userRoutes/userRoutes";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const SecureRoute = ({ children }) => {
  const [user, , isLoading] = useGetUser();
  const pathname = usePathname();
  const router = useRouter();
    // check this pathname is in userRoutes
    if (!user && userRoutes.includes(pathname)) {
        router.push("/login");
        toast.error("You need to must login!", {
            style: {
                background: " #232141",
                color: '#FFC8AA',
            },
        })
        return;
    }
    else {
        return children;
    }
};

export default SecureRoute;
