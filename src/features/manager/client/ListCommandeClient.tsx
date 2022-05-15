import {
  BriefcaseIcon,
  ClipboardListIcon,
  TagIcon,
  TruckIcon,
} from "@heroicons/react/solid";
import React from "react";
import { style_icon, style_span } from "tools/constStyle";
import { Client } from "tools/types";
import NavTabs from "widgets/NavTabs";
import { ListClientsProps, MenuNavTabs } from "widgets/TypeWidgets";
import AdressLivraisons from "./AdressLivraisons";
import ArticlesClients from "./ArticlesClients";
import ListCommandes from "./ListCommandes";
import SoldesCommandes from "./SoldesCommandes";
const ListCommandeClient = ({ idClient }: ListClientsProps) => {
  //
  //
  const commanndes: MenuNavTabs[] = [
    {
      id: 1,
      name: (
        <>
          <BriefcaseIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Commandes Clients</span>
        </>
      ),
      featured: <ListCommandes idClient={idClient} />,
    },
    {
      id: 2,
      name: (
        <>
          <ClipboardListIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Soldes Commandes</span>
        </>
      ),
      featured: <SoldesCommandes idClient={idClient} />,
    },
    {
      id: 3,
      name: (
        <>
          <TagIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Articles Clients</span>
        </>
      ),
      featured: <ArticlesClients idClient={idClient} />,
    },
    {
      id: 4,
      name: (
        <>
          <TruckIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Adresses de livraisons</span>
        </>
      ),
      featured: <AdressLivraisons idClient={idClient} />,
    },
  ];
  return (
    <>
      <NavTabs tab={commanndes} />
    </>
  );
};

export default ListCommandeClient;
