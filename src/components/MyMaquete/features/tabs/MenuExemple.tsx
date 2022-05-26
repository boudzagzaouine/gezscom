import {
  ArchiveIcon,
  ClipboardListIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import { Exemple } from "components/MyMaquete/tools/types";
import { MenuItems } from "widgets/TypeWidgets";

import React from "react";
interface menuProp {
  obj: any;
  edit: (obj: any) => void;
  update: (obj: any) => void;
  del: (id: string) => void;
  archive: (id: string) => void;
  restore: (id: string) => void;
}
const MenuExemple = ({
  archive,
  del,
  edit,
  obj,
  restore,
  update,
}: menuProp) => {
  const menu = (): MenuItems[] => {
    return [
      {
        icon: (
          <ClipboardListIcon
            className="mr-3 h-8 w-8 text-green-300 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Détail",
        action: () => {
          edit(obj);
        },
      },
      {
        icon: (
          <PencilAltIcon
            className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Modifier",
        action: () => {
          update(obj);
        },
      },
      {
        icon: (
          <TrashIcon
            className="mr-3 h-8 w-8 text-rose-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Supprimer",
        action: () => {
          del(obj.id);
        },
      },
      {
        icon: (
          <ArchiveIcon
            className="mr-3 h-8 w-8 text-gray-800 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Archiver",
        action: () => {
          archive(obj.id);
        },
      },
      {
        icon: (
          <ReplyIcon
            className="mr-3 h-8 w-8 text-green-900 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ),
        text: "Restorer",
        action: () => {
          restore(obj.id);
        },
      },
    ];
  };
  return <div>MenuExemple</div>;
};

export default MenuExemple;
