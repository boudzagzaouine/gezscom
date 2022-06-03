import React, { useEffect, useState } from "react";
import Section from "widgets/Section";
import { ClientJson, Colis, colis0 } from "../tools/types";
import { Button, Field, Form } from "widgets";
import { XIcon, PlusIcon, MinusIcon } from "@heroicons/react/solid";
import Bcyan from "widgets/Bcyan";
import Bcancel from "widgets/Bcancel";
import Bsave from "widgets/Bsave";
import Table from "widgets/Table";
import NouvelPalette from "./NouvellePalette";
import ModifPalette from "./ModifPalette";
import GestionColisCommande from "./GestionColisCommande";
import AffectationDesColis from "./AffectationDesColis";
import AnnulationDesCommandes from "./AnnulationDesCommande";
import { openColis } from "../rtk/rtk_colisage";

type ConsulterUtilisateurProps = {
  setShowColis: (b: boolean) => void;
  estModifier: boolean;
  setModifier: (b: boolean) => void;
  colis: Colis;
  ClientJson: ClientJson;
  setColis: (b: boolean) => void;
};

function FicheDeColisage({
  setShowColis,
  estModifier,
  setModifier,
  colis,
  setColis,
  ClientJson,
}: ConsulterUtilisateurProps) {
  const ColisToOpen: any = openColis();
  const saveColis = ColisToOpen.save;
  const refetchColis = ColisToOpen.refetch;
  const [showModal, setShowModal] = useState(false);
  const [showModalE, setShowModalE] = useState(false);
  const [showColisCmd, setShowColisCmd] = useState(false);
  const [showAffectation, setshowAffectation] = useState(false);
  const [showAnnulation, setShowAnnulation] = useState(false);
  const [nom, setNom] = useState("");
  const [listPret, setListPret] = useState([
    {
      code: 1,
      designation: "vvvvvvv",
      pois_brut: 500,
      qntTot: 100,
      qnt_rest: 100,
      nCmd: 5,
      saison: 4,
      portion: "Maroc",
      packaging: 20,
    },
  ]);

  // const [estAjt,setEstAjt] = useState(false);
  const change = (obj: String, val: String | Number | Date) => {
    console.log(colis);
    setColis({
      ...colis,
      [obj]: val,
    });
  };

  return (
    <Section>
      <Form
        defaultValues={colis0}
        onSubmit={() => {
          saveColis(colis);
          refetchColis();
          setModifier(false);
        }}
      >
        <div className="grid grid-rows-6">
          <div className="row-span-1">
            <p className="float-left text-xl">
              Fiche de colisage Ref {colis.id}
            </p>
            <XIcon
              className="w-6 h-6 float-right cursor-pointer"
              onClick={() => {
                setShowColis(false);
              }}
            />
            {/* <XIcon className='w-6 h-6 float-right cursor-pointer' onClick={()=>{}} /> */}
          </div>
          <div className="grid  row-span-4">
            <div className="m-auto">
              <div className="flex my-5 w-full ">
                <div className="flex items-center">
                  <Field
                    label="Client"
                    name="client"
                    as="select"
                    optionKeyName="id"
                    optionLabelName="design"
                    options={["", ...ClientJson]}
                    className="w-96"
                    disabled={!estModifier}
                    value={colis.idClient}
                    onChange={(e: any) => change("idClient", e.target.value)}
                  />
                </div>
                <div className="flex items-center ml-5">
                  <Field
                    label="Date de Colisage"
                    name="date_colisage"
                    type="date"
                    className="w-96"
                    disabled={!estModifier}
                    value={colis.date_colisage}
                    onChange={(e: any) =>
                      change("date_colisage", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex my-5">
                <div className="flex items-center ">
                  <Field
                    label="Poids brut"
                    type="number"
                    name="pois_brut"
                    className="w-96"
                    disabled={!estModifier}
                    value={colis.pois_brut}
                    onChange={(e: any) => change("pois_brut", e.target.value)}
                  />
                </div>
                <div className="flex items-center ml-5">
                  <Field
                    label="Nombre de palettes"
                    type="number"
                    name="nombre_palettes"
                    className="w-96"
                    disabled={!estModifier}
                    value={colis.nombre_palettes}
                    onChange={(e: any) =>
                      change("nombre_palettes", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex my-5 w-full">
                <div className="flex items-center ">
                  <Field
                    label="Poids net"
                    type="number"
                    name="pois_net"
                    className="w-96"
                    disabled={!estModifier}
                    value={colis.pois_net}
                    onChange={(e) => change("pois_net", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1">
            {!estModifier && (
              <div className="">
                <Bcyan
                  onClick={() => setModifier(true)}
                  label="Modifier"
                  className="float-right mr-28 "
                />
              </div>
            )}
            {estModifier && (
              <div className="">
                <Bcancel
                  onClick={() => setModifier(false)}
                  label=""
                  className="float-right mr-28 "
                />
                <Bsave
                  type="submit"
                  /*onClick={() => setModifier(false)}*/ className="float-right mr-10 "
                />
              </div>
            )}
          </div>
        </div>
      </Form>
      <div className="">
        <fieldset className=" border-2 rounded-xl">
          <legend className="ml-5 text-2xl text-gray-400 p-2 ">
            List des commandes prête
          </legend>
          <div className="m-5">
            <Table
              className="tab-list my-8 px-1 tab-list float-left"
              thead={
                <Table.tr>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Code Article
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Designation
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Poids brut
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Quantite total
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Quantite Restante
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Nº Commande
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Saison
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Portion
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Packaging
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 "></Table.th>
                </Table.tr>
              }
            >
              {listPret.map((p: any) => {
                return (
                  <Table.tr key={p.code}>
                    <Table.td>{p.code}</Table.td>
                    <Table.td>{p.designation}</Table.td>
                    <Table.td>{p.pois_brud}</Table.td>
                    <Table.td>{p.qntTot}</Table.td>
                    <Table.td>{p.qnt_rest}</Table.td>
                    <Table.td>{p.nCmd}</Table.td>
                    <Table.td>{p.saison}</Table.td>
                    <Table.td>{p.portion}</Table.td>
                    <Table.td>{p.packaging}</Table.td>
                    <Table.td className="cursor-pointer">
                      <PlusIcon
                        className="w-7 h-7 border-2 rounded-full border-black text-black "
                        onClick={() => setShowColisCmd(true)}
                      />
                      <GestionColisCommande
                        showColisCmd={showColisCmd}
                        setShowColisCmd={setShowColisCmd}
                        colis={colis}
                      />
                    </Table.td>
                  </Table.tr>
                );
              })}
            </Table>
          </div>
        </fieldset>
      </div>
      <div className="">
        <fieldset className=" border-2 rounded-xl">
          <legend className="ml-5 text-2xl text-gray-400 p-2 ">
            List des colis
          </legend>
          <div className="m-5">
            <Table
              className="tab-list my-8 px-1 tab-list float-left"
              thead={
                <Table.tr>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Code Article
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Client
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Designation
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Quantite
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Nº Commande
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Saison
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Portion
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Nº Colis
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 "></Table.th>
                </Table.tr>
              }
            >
              {listPret.map((p: any) => {
                return (
                  <Table.tr key={p.code}>
                    <Table.td>{p.code}</Table.td>
                    <Table.td>{colis.client}</Table.td>
                    <Table.td>{p.designation}</Table.td>
                    <Table.td>{p.qntTot}</Table.td>
                    <Table.td>{p.nCmd}</Table.td>
                    <Table.td>{p.saison}</Table.td>
                    <Table.td>{p.portion}</Table.td>
                    <Table.td>{10}</Table.td>
                    <Table.td className="cursor-pointer">
                      <div className="flex float-right mx-2">
                        <MinusIcon
                          className="w-7 h-7 border-2 rounded-full border-black text-black "
                          onClick={() => setShowAnnulation(true)}
                        />
                        <AnnulationDesCommandes
                          showAnnulation={showAnnulation}
                          setshowAnnulation={setShowAnnulation}
                        />
                        <PlusIcon
                          className="w-7 h-7 border-2 rounded-full border-black text-black mx-2 "
                          onClick={() => setshowAffectation(true)}
                        />
                        <AffectationDesColis
                          showAffectation={showAffectation}
                          setshowAffectation={setshowAffectation}
                        />
                      </div>
                    </Table.td>
                  </Table.tr>
                );
              })}
            </Table>
          </div>
        </fieldset>
      </div>
      <div className="">
        <fieldset className=" border-2 rounded-xl">
          <legend className="ml-5 text-2xl text-gray-400 p-2 ">
            List des palettes
          </legend>
          <div className="m-5">
            <Bcyan
              label="Nouvelle palette"
              className="ml-3"
              onClick={() => {
                setShowModal(true);
              }}
            />
            <NouvelPalette showModal={showModal} setShowModal={setShowModal} />
            <Table
              className="tab-list my-8 px-1 tab-list float-left"
              thead={
                <Table.tr>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Nº Commande
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Nombre de colis
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                    Remarque
                  </Table.th>
                  <Table.th className=" top-0 z-10    py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 "></Table.th>
                </Table.tr>
              }
            >
              {listPret.map((p: any) => {
                return (
                  <Table.tr key={p.code}>
                    <Table.td>1</Table.td>
                    <Table.td>20</Table.td>
                    <Table.td>xxxxxxxxxxxxxxxx</Table.td>
                    <Table.td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-semibold sm:pr-6 md:pr-0">
                        <Button
                          className="text-green-600 hover:text-green-800"
                          onClick={() => {
                            setShowModalE(true);
                          }}
                        >
                          Modifier
                        </Button>
                        <ModifPalette
                          showModalE={showModalE}
                          setShowModalE={setShowModalE}
                        />
                      </td>
                    </Table.td>
                  </Table.tr>
                );
              })}
            </Table>
          </div>
        </fieldset>
      </div>
    </Section>
  );
}

export default FicheDeColisage;
