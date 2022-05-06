import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Icon from "../widgets/Icon";

const NavVert = () => {
  const route = useRouter();
  // console.clear()
  console.log("rr =" + route.pathname);
  const menuVert = [
    {
      icon: "home",
      text: "Acceuil",
      link: "/",
      active: route.pathname == "/",
    },
    {
      icon: "user-circle",
      text: "Gestion de Clients",
      link: "/manager/ClientManager",
      active: route.pathname == "/manager/ClientManager",
    },
    {
      icon: "truck",
      text: "Gestion de Fournisseurs",
      link: "/manager/VendorManager",
      active: route.pathname == "/manager/VendorManager",
    },
    {
      icon: "shopping-bag",
      text: "gestion d'achats",
      link: "/manager/PurchaseManager",
      active: route.pathname == "/manager/PurchaseManager",
    },
    {
      icon: "home",
      text: "test",
      link: "/Test",
      active: route.pathname == "/Test",
    },
    {
      icon: "home",
      text: "liste des icons",
      link: "/documentation/ListIcons",
      active: route.pathname == "/ee",
    },
    {
      icon: "home",
      text: "eeeeeeeeee",
      link: "/",
      active: route.pathname == "/ee",
    },
    {
      icon: "home",
      text: "eeeeeeeeee",
      link: "/",
      active: route.pathname == "/ee",
    },
    {
      icon: "home",
      text: "eeeeeeeeee",
      link: "/",
      active: route.pathname == "/ee",
    },
    {
      icon: "home",
      text: "eeeeeeeeee",
      link: "/",
      active: route.pathname == "/ee",
    },
    {
      icon: "home",
      text: "eeeeeeeeee",
      link: "/",
      active: route.pathname == "/ee",
    },
    {
      icon: "home",
      text: "eeeeeeeeee",
      link: "/",
      active: route.pathname == "/ee",
    },
  ];

  return (
    <ul className="nav-horiz bg-[#2B5173]">
      <h2 className="bg-[#000] bg-opacity-10 text-[#fff] w-full float-left py-2.5">
        GESTION COMMERCIAL{" "}
      </h2>
      {menuVert.map((item) => (
        <li
          key={item.icon}
          className={
            "cursor-pointer text-sm text-[#fff] w-full float-left py-2.5 " +
            (item.active
              ? "border-l-2 border-white bg-opacity-10 bg-[#000]"
              : "border-l-0 bg-transparent")
          }
        >
          <Link href={item.link}>
            <a>
              <span className="icon">
                <Icon i={item.icon} cl="" />
              </span>
              <span className="text">{item.text}</span>
            </a>
          </Link>
        </li>
      ))}
      <div className="w-full flex justify-center py-5 float-left">
        <img src="/images/logo-4.png" alt="" />
      </div>
    </ul>
  );
};

export default NavVert;
