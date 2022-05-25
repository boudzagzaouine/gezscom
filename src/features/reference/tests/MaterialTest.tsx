
import {
    useFetchRawMaterialsQuery,
    usePaginationRawMaterialsQuery,
    useFetchOneRawMaterialQuery,
    useAddRawMaterialMutation,
    useEditRawMaterialMutation,
    useDeleteRawMaterialMutation,
    useArchiveRawMaterialMutation,
    useRestoreRawMaterialMutation,
} from "config/rtk";
import ListTest from "features/manager/client/ListTest";
import { useRef, useState } from "react";
import { Commande, cm0, RawMaterial, rawMaterial0 } from "tools/types";
import Section from "widgets/Section";
import { Field, Form } from "widgets";

import { dematerialize } from "rxjs";
import Bcyan from "widgets/Bcyan";
export default function MaterialTest() {
    const go: boolean = true
    const close: boolean = false
    //@ts-ignore
    const { data = [], isFetching, refetch } = usePaginationRawMaterialsQuery(0);
    // const { data = [], refetch } = useFetchcommandesByIdClientQuery("42e8d8ec-ac63-455e-badc-08ec7feb3b3b");
    //@ts-ignore
    const [cls, setCls] = useState<RawMaterial[]>(data.content)
    const reload = () => {
        refetch()
        setTimeout(() => {
            //@ts-ignore
            setCls(data.content)
        }, 200);
    }
    const [save] = useAddRawMaterialMutation();
    const [edit] = useEditRawMaterialMutation();

    console.log(data)
    return (
        <>
            {
                go && <Section>
                    <table className="float-left w-full">
                        <thead>
                            <tr><th>id</th><th>design</th></tr>
                        </thead>
                        <tbody>
                            {
                                //@ts-ignore
                                //data?.map((d: RawMaterial) => (
                                data.content?.map((d: RawMaterial) => (
                                    <tr key={d.id}>
                                        <td>{d.id}</td>
                                        <td>{d.design}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <Form defaultValues={rawMaterial0} onSubmit={save}>
                        <Field label="id" name="id" />
                        <Field label="design" name="design" />
                        <Bcyan onClick={() => {
                            setTimeout(() => {
                                refetch()
                            }, 600);
                        }} >
                            save
                        </Bcyan>

                    </Form>

                </Section>
            }
        </>
    );
}
