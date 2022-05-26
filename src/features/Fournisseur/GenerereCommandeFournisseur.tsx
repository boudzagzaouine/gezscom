import { BriefcaseIcon, ClipboardListIcon } from "@heroicons/react/solid";
import { style_icon, style_span } from "tools/constStyle";
import NavTabs from "widgets/NavTabs";
import NavTabsHeight from "widgets/NavTabsHeight";
import { MenuNavTabs } from "widgets/TypeWidgets";
import ListAllCommandes from "./ListAllCommandes";
import ListCommandClientGenerer from "./ListCommandeClientGenerer";
import ListCommandFournisseurAGenerer from "./ListCommandFournisseurAGenerer";

const GenerereCommandeFournisseur = () => {
  const genereCommand: MenuNavTabs[] = [
    {
      id: 1,
      name: (
        <>
          <BriefcaseIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Commandes Clients a Générer</span>
        </>
      ),
      featured: <ListCommandClientGenerer />,
    },
    {
      id: 2,
      name: (
        <>
          <ClipboardListIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Commandes Fournisseurs Générée</span>
        </>
      ),
      featured: <ListCommandFournisseurAGenerer />,
    },
  ];
  return (
    <>
      <NavTabsHeight tab={genereCommand} />
    </>
  );
};
export default GenerereCommandeFournisseur;
