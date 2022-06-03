import {
  openIdsObject,
  OpenIdsObjectProp,
  openIdsObjects,
} from "config/rtk/rtkGen";
import React, { ChangeEvent, FC, useRef, useState } from "react";
import { ARCHIVE, DEL, RESTORE } from "tools/consts";
import { DateFormat } from "tools/Methodes";
import { IdsObject, IdsObjectJson } from "tools/types";
import Bcyan from "widgets/Bcyan";
import Table from "widgets/Table";
import classNames from "classnames";
import Action from "./Action";
import Bcancel from "./Bcancel";
import Bsave from "./Bsave";
import BsavEndNew from "./BsavEndNew";
import { Field } from "./Field";
import { Form } from "./Form";
import MitemsRef from "./MitemsRef";
import ModalS from "./ModalS";
import Required from "./Required";
import Section from "./Section";

const tabSelect = (path: string) => {
  return openIdsObjects(path).tab;
};
const getDesign = (id: string, path: string) => {
  if (id != "") {
    //@ts-ignore
    return openIdsObject(path, id).data.design;
  } else return "";
};
type ListProp<E extends IdsObject, J extends IdsObjectJson> = {
  title: string;
  mal: boolean;
  body: string[];
  emptyObject: E;
  path: string;
};

const List = <E extends IdsObject, J extends IdsObjectJson>({
  title,
  mal,
  body,
  emptyObject,
  path,
}: ListProp<E, J>) => {
  const open: OpenIdsObjectProp<E, J> = openIdsObjects(path);
  const objJson: J = open.data;
  const list: E[] = open.tab;
  const refetch: () => void = open.refetch;
  const save = open.save;
  const edit = open.edit;
  const refCom = useRef(null);
  const del = useRef(null);
  const archive = useRef(null);
  const restore = useRef(null);
  const [show, setShow] = useState(false);
  const [object, setObject] = useState({ ...emptyObject, path: path });

  const close = () => {
    setShow(false);
  };
  const load = (u: E) => {
    setShow(true);
    setObject({ ...u, path: path });
  };

  return (
    <Section>
      <Action id="" path={path} design="" type={title} ref={del} action={DEL} />
      <Action
        id=""
        path={path}
        design=""
        type={title}
        ref={archive}
        action={ARCHIVE}
      />
      <Action
        id=""
        path={path}
        design=""
        type={title}
        ref={restore}
        action={RESTORE}
      />

      <Bcyan
        className="float-left mt-2"
        onClick={() => {
          load(emptyObject);
        }}
      >
        {(mal ? "Nouveau " : "Nouvelle ") + title}
      </Bcyan>
      <Table
        className="tab-list float-left w-full mt-2"
        thead={
          <tr>
            {body?.map((b) => (
              <Table.th>{b.split("#")[0]}</Table.th>
            ))}
            <Table.th></Table.th>
          </tr>
        }
      >
        {list?.map((l) => (
          <tr key={l.id}>
            {
              //@ts-ignore
              body?.map((b: string) => (
                <Table.td>
                  {b.split("#")[2] == "attr"
                    ? l[b.split("#")[1]]
                    : b.split("#")[2] == "date"
                    ? DateFormat(l[b.split("#")[1]])
                    : b.split("#")[2] == "select"
                    ? getDesign(l[b.split("#")[1]], b.split("#")[3])
                    : b.split("#")[2] == "join"
                    ? b.split("#")[3]
                    : ""}
                </Table.td>
              ))
            }
            <Table.td>
              <MitemsRef
                archive={() => {
                  //@ts-ignoregetDesign(l[b.split("#")[1]],l[b.split("#")[3]])
                  archive.current(l.id, l.design);
                }}
                del={() => {
                  //@ts-ignore
                  del.current(l.id, l.design);
                }}
                obj={l}
                update={() => {
                  load(l);
                }}
              />
            </Table.td>
          </tr>
        ))}
      </Table>
      <ModalS show={show} title={""} format={5} close={close}>
        <div className="float-left w-full text-xs">
          <Form
            //@ts-ignore
            defaultValues={object}
            onSubmit={object?.id == "" ? save : edit}
          >
            <div className="w-full float-left">
              {body?.map((b: string) => (
                <div className={classNames("float-left", b.split("#")[5])}>
                  {b.split("#")[2] == "attr" ? (
                    <Field
                      label={
                        b.split("#")[4] == "required" ? (
                          <Required msg={b.split("#")[0]} />
                        ) : (
                          b.split("#")[0]
                        )
                      }
                      name={b.split("#")[1]}
                      disabled={false}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        let o: E = { ...object };
                        let key: string = b.split("#")[1];
                        //@ts-ignore
                        o[key] = e.target.value;
                        setObject(o);
                      }}
                    />
                  ) : b.split("#")[2] == "select" ? (
                    <>
                      <Field
                        disabled={false}
                        label={
                          b.split("#")[4] == "required" ? (
                            <Required msg={b.split("#")[0]} />
                          ) : (
                            b.split("#")[0]
                          )
                        }
                        name={b.split("#")[1]}
                        as="select"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                          let o: E = { ...object };
                          let key: string = b.split("#")[1];
                          //@ts-ignore
                          o[key] = e.target.value;
                          setObject(o);
                        }}
                      >
                        {
                          //@ts-ignore
                          ["", ...(tabSelect(b.split("#")[3]) || [])]?.map(
                            (c: E) => (
                              <option value={c.id}>{c.design}</option>
                            )
                          )
                        }
                      </Field>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 b-ajust-r">
              <Bsave
                className="float-right"
                onClick={() => {
                  setTimeout(() => {
                    refetch();
                    close();
                  }, 500);
                }}
              />
              <BsavEndNew
                className="ml-10 mr-2"
                onClick={() => {
                  setTimeout(() => {
                    refetch();
                  }, 500);
                }}
              />
            </div>
          </Form>
          <Bcancel
            className="float-right mt-5 b-ajust"
            onClick={() => {
              setShow(false);
            }}
          />
        </div>
      </ModalS>
    </Section>
  );
};
//b.split("#")[1]=="date"?DateFormat(l[b.split("#")[0]]):l[b]
export default List;
