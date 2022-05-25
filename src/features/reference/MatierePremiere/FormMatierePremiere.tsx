import React from 'react'
import { Field, Form } from "widgets";
import { LigneDeCommande, MatierePremiere, mp0 } from "tools/types";
import Table from "widgets/Table";

type FormMatierePremiereProp = {
    ligneCommande: LigneDeCommande
    saveArticle: (art: LigneDeCommande) => void
    close: () => void
}
const FormMatierePremiere = ({ ligneCommande, saveArticle, close }: FormMatierePremiereProp) => {
    const matiere: MatierePremiere[] = OpenMatiere()
    return (
        <>
            <tr className="relative">
                <div className="absolute left-0 top-0 bg-[#ccc]">
                    <Form defaultValues={ligneCommande} onSubmit={saveArticle}>
                        <Table.td>
                            <Field name="id" placeholder="Désignation" as="select" options={[mp0, ...matiere]} optionLabelName="designation" />
                        </Table.td>
                        <Table.td>
                            <Field name="quantite" placeholder="Quantité" />
                        </Table.td>
                        <Table.td>
                            <Field name="prix" placeholder="Prix" />
                        </Table.td>
                        <Table.td>
                            <div className="float-right w-full">
                                {/* <Bsave />*/}
                            </div>
                        </Table.td>
                    </Form>
                    <div className="float-right w-full">
                        {/* <Bcancel className="absolute right-0" onClick={() => {
            close()
          }} />*/}
                    </div>

                </div>
            </tr>
        </>
    )
}

export default FormMatierePremiere;