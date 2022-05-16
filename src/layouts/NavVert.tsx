import Link from "next/link";
import { useRouter } from "next/router";
import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { BUREAU_DOUANE, CLIENT_MANAGER, DECLARANT, DECLARANT_GES, FAMILLE_ARTICLE, FAMILLE_MATIERE_PREMIERE, INCOTERM_GES, MODE_PAYEMENT, PURCHASE_MANAGER, REGIME_DOUANIER, UNIT_MEASURE, VENDOR_MANAGER } from "tools/consts";
import Icon from "../widgets/Icon";
type NavVertProps = {
  updateSel: (s: number) => void;
};
const NavVert = ({ updateSel }: NavVertProps) => {
  const route = useRouter();
  const [sous, setSous] = useState(false);
  // console.clear()
  console.log("rr =" + route.pathname);

  const menuVert = [
    {
      id: 7,
      icon: "home",
      text: "Acceuil",
      link: "/",
      active: route.pathname == "/",
      sous: []
    },
    {
      id: CLIENT_MANAGER,
      icon: "user-circle",
      text: "Gestion de Clients",
      link: "/manager/client/ClientManager",
      active: route.pathname == "/manager/client/ClientManager",
      sous: []
    },
    {
      id: VENDOR_MANAGER,
      icon: "truck",
      text: "Gestion de Fournisseurs",
      link: "/manager/vendor/VendorManager",
      active: route.pathname == "/manager/vendor/VendorManager",
      sous: []
    },
    {
      id: PURCHASE_MANAGER,
      icon: "shopping-bag",
      text: "gestion d'achats",
      link: "/manager/purchase/Reception",
      active: route.pathname == "/manager/purchase/Reception",
      sous: []
    },
    {
      id: 11,
      icon: "home",
      text: "test",
      link: "/Test",
      active: route.pathname == "/Test",
      sous: []
    },
    {
      id: 12,
      icon: "home",
      text: "liste des icons",
      link: "/documentation/ListIcons",
      active: route.pathname == "/ee",
      sous: []
    },
    {
      id: 13,
      icon: 'table',
      text: 'Gestions des Tables',
      link: "",
      sous: [{
        id: UNIT_MEASURE,
        text: 'Unité de mesure',
        link: "/reference/unitMeasure/NewUnitMeasure",
        active: route.pathname == '/reference/unitMeasure/NewUnitMeasure',
      },
      {
        id: FAMILLE_ARTICLE,
        text: 'Famille Article',
        link: "/reference/article/NewArticle",
        active: route.pathname == '/reference/article/NewArticle',
      },
      {
        id: FAMILLE_MATIERE_PREMIERE,
        text: 'Famille Matière Première',
        link: "/reference/rawMaterial/NewRawMaterial",
        active: route.pathname == '/reference/rawMaterial/NewRawMaterial',
      },
      {
        id: BUREAU_DOUANE,
        text: 'Bureau Douane',
        link: "/reference/bureauDouane/NewBureauDouane",
        active: route.pathname == '/reference/bureauDouane/NewBureauDouane',
      },
      {
        id: REGIME_DOUANIER,
        text: 'Régime Douanier',
        link: "/reference/regimeDouanier/NewRegimeDouanier",
        active: route.pathname == '/reference/regimeDouanier/NewRegimeDouanier',
      },
      {
        id: MODE_PAYEMENT,
        text: 'Mode De Réglement',
        link: "/reference/payementMode/NewPayementMode",
        active: route.pathname == '/reference/payementMode/NewPayementMode',
      },
      {
        id: DECLARANT_GES,
        text: 'Declarant',
        link: "/reference/declarant/NewDeclarant",
        active: route.pathname == '/reference/declarant/NewDeclarant',
      },
      {
        id: INCOTERM_GES,
        text: 'Incoterm',
        link: "/reference/incoterm/NewIncoterm",
        active: route.pathname == '/reference/incoterm/NewIncoterm',
      }]
    },


  ];

  const prev = useRef(false);

  useEffect(() => {

    prev.current = sous;

  }, []);

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
          onClick={() => {
            updateSel(item.id);
            setSous(!prev.current);
          }}
        >
          <Link href={item.link}>
            <a>
              <span className="icon">
                <Icon i={item.icon} cl="" />
              </span>
              <span className="text">{item.text}</span>
            </a>

          </Link>
          {item.sous.length != 0 && sous &&
            <ul className="ml-20 list-disc"  >
              {item.sous.map((sItem) => (
                <li
                  key={sItem.id}
                  className={
                    "cursor-pointer text-sm text-[#fff] w-full float-left py-2.5 " +
                    (sItem.active
                      ? "border-l-2 border-white bg-opacity-10 bg-[#000]"
                      : "border-l-0 bg-transparent")
                  }
                  onClick={() => updateSel(sItem.id)}
                >
                  <Link href={sItem.link}>
                    <a>
                      <span className="text">{sItem.text}</span>
                    </a>
                  </Link>
                </li>
              ))}

            </ul>
          }
        </li>
      ))}
      <div className="w-full flex justify-center py-5 float-left">
        <img src="/images/logo-4.png" alt="" />
      </div>
    </ul>
  );
};

export default NavVert;
