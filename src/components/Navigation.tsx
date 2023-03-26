import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import avatar from "../assets/images/avatar.png";

function NavItem(props: { label: any; icon: any; active: any; hasphoto: any }) {
  const { label, icon, active, hasphoto } = props;
  const [isActive, setIsActive] = useState(active);

  return (
    <Link
      href={`/${label === "Home" ? "" : label.toLowerCase()}`}
      className={`flex flex-col items-center justify-center text-center flex-1 py-2  hover:text-udine-1 ${
        isActive
          ? "text-udine-1 bg-gradient-to-t from-white to-[#ffe1c5] border-t-2 border-udine-4 mb-2"
          : "text-[#D5D5D5]"
      }`}
      onClick={() => setIsActive(true)}
    >
      {hasphoto ? (
        <Image
          src={avatar}
          alt="profile"
          className="w-[24px] h-[24px] rounded-full mt-1 items-center"
        />
      ) : (
        <i className={`${icon} text-[24px] mt-1`} />
      )}
    </Link>
  );
}

export default function TabBar() {
  const router = useRouter();

  return (
    <div className="flex justify-between fixed bottom-0 w-full max-w-[600px] bg-white shadow-2xl">
      <NavItem
        icon="fa-solid fa-home"
        label="Home"
        active={router.pathname === "/"}
        hasphoto={undefined}
      />
      <NavItem
        icon="fa-solid fa-star"
        label="Rating"
        active={router.pathname === "/rating"}
        hasphoto={undefined}
      />
      <NavItem
        icon="fa-solid fa-qrcode"
        label="Scan"
        active={router.pathname === "/scan"}
        hasphoto={undefined}
      />
      <NavItem
        icon="fa-solid fa-calendar-alt"
        label="Schedule"
        active={router.pathname === "/schedule"}
        hasphoto={undefined}
      />
      <NavItem
        icon="fa-solid fa-user"
        label="Profile"
        active={router.pathname === "/profile"}
        hasphoto={false}
      />
    </div>
  );
}
