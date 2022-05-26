import { openFournisseurs } from "components/Fournisseur/openFournisseur";
import {
  useAddMatierePremiereMutation,
  useFetchMatierePremiereQuery,
} from "config/rtk";
import React, { forwardRef, Ref, useEffect, useState } from "react";
import { LIST_FAMILLE_MATIERE_PREMIERE, ORIGINE } from "tools/consts";
import { f0, Fournisseur, MatierePremiere } from "tools/types";
import { Field, Form } from "widgets";
import Bcyan from "widgets/Bcyan";
import Modal from "widgets/Modal";

type MatierePremiereProps = {
  Matierep: MatierePremiere;
};

const FormMatierePremiere = (
  { Matierep }: MatierePremiereProps,
  ref: Ref<void>
) => {
  const [showModal, setShowModal] = React.useState(false);
  const [matiere0, setMatiere0] = useState(Matierep);
  const { data = [], isFetching, refetch } = useFetchMatierePremiereQuery();
  //@ts-ignore
  const [fournisseurs, setFournisseurs] = useState(data?.content);
  const fournisseur: Fournisseur[] = openFournisseurs();
  //@ts-ignore
  const [idFournisseurs, setidFournisseurs] = useState(
    fournisseurs?.map((x) => x.raisonSociale)
  );
  const [save] = useAddMatierePremiereMutation();
  const openModal = (m: MatierePremiere) => {
    setMatiere0(m);
    setShowModal(true);
  };
  const close = () => {
    setShowModal(false);
  };
  useEffect(() => {
    //@ts-ignore
    ref.current = openModal;
  });
  return (
    <Modal
      title={"Nouvelle Matiére premiére"}
      show={showModal}
      format={5}
      close={close}
    >
      <Form defaultValues={matiere0} onSubmit={save}>
        {({ watch }) => {
          //@ts-ignore
          const idFournisseur = watch("idFournisseur");
          //const fournisseur1:Fournisseur|undefined= Matierep.fournisseur.id!=""?Matierep.fournisseur:getFournisseur(idFournisseur,fournisseurs)
          console.log(idFournisseur);
          console.log(fournisseur.map((f: Fournisseur) => f.raisonSociale));
          return (
            <>
              <div className="mt-1">
                <Field type="hidden" name="idFournisseur" />
                {matiere0.idFournisseur != "" ? (
                  <>
                    <Field type="hidden" name="idFournisseur" />
                    <Field
                      label="Fournisseur"
                      value={matiere0.fournisseur.raisonSociale}
                    />
                  </>
                ) : (
                  <Field
                    label="Fournisseur"
                    name="idFournisseur"
                    as="select"
                    options={[f0, ...fournisseur]}
                    optionLabelName="raisonSociale"
                  />
                )}
                <Field label="Désignation" name="designation" />
                <Field
                  label="Famille matiére premiére"
                  name="familleMatierePremiere"
                  as="select"
                  options={LIST_FAMILLE_MATIERE_PREMIERE}
                />
                <Field label="Prix" name="prix" />
                <Field
                  label="Origine"
                  name="origine"
                  as="select"
                  options={ORIGINE}
                />
                {/* <DatePicker className="border-[#f00]" selected={stsartDate} onChange={(date:any) => setStartDate(date)} /> */}
              </div>
              <Bcyan
                className="float-right mt-2"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Annuler
              </Bcyan>
              <Bcyan className="float-right mt-2">Sauvegarder</Bcyan>
            </>
          );
        }}
      </Form>
    </Modal>
  );
};

export default forwardRef(FormMatierePremiere);
