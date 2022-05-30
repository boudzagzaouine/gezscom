import { BriefcaseIcon, SaveIcon, XCircleIcon } from "@heroicons/react/solid";
import {
  useFetchClientsQuery,
  useFetchOneClientQuery,
} from "config/rtk/RtkClient";
import {
  useAddCommandeMutation,
  useEditCommandeMutation,
} from "config/rtk/RtkCommande";
//@ts-ignore
import dateFormat from "dateformat";
import { useFetchAdressLivsByIdClientQuery } from "config/rtk/RtkAdressLiv";
import React, {
  ChangeEvent,
  forwardRef,
  Ref,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { STYLE_ICON, style_icon, style_span } from "tools/constStyle";
import {
  AdressLiv,
  c0,
  adr0,
  Client,
  Commande,
  ClientJson,
  Devise,
} from "tools/types";
import { Field, Form } from "widgets";
import Modal from "widgets/Modal";
import NavTabs from "widgets/NavTabs";
import { MenuNavTabs } from "widgets/TypeWidgets";
import ArticlesCommande from "./ListArticleCommandes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Bsave from "widgets/Bsave";
import Bcancel from "widgets/Bcancel";
import {
  openAdressLivByIdClient,
  openAdressLivByIdClientProps,
} from "components/manager/client/openAdressLivByIdClient";
import { OpenClientProp, openClients } from "config/rtk/RtkClient";
import { openDevises } from "config/rtk/rtkDevise";
import Calendar from "widgets/Calendar";
import Bcyan from "widgets/Bcyan";
type CommandProps = {
  command: Commande;
  client: Client;
  clients: Client[];
  refetchList: () => void;
};

const FormCommande = (
  { command, client, clients, refetchList }: CommandProps,
  ref: Ref<void>
) => {
  const [showModal, setShowModal] = React.useState(false);
  const [command0, setCommand0] = useState(command);
  const [client0, setClient0] = useState<Client>(client);
  const [idclient, setIdclient] = useState<string>(client.id);
  const adressLivsToOpen: openAdressLivByIdClientProps =
    openAdressLivByIdClient(client0?.id);
  const adressLivs: AdressLiv[] = adressLivsToOpen.data;
  const refetchAdressLiv: () => void = adressLivsToOpen.refetch;
  const clientsToOpen: OpenClientProp = openClients();
  const clients1: Client[] = clientsToOpen.data.content;
  //const {refetch}=useFetchAdressLivsByIdClientQuery(client?.id)
  const refetchClient: () => void = clientsToOpen.refetch;
  const [startDate, setStartDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [adrLiv, setAdrLiv] = useState("");
  type ExampleCustomTimeInputProps = {
    value: string | number | readonly string[] | undefined;
    onChange: (e: string) => void;
  };
  /* const ExampleCustomTimeInput = ({ value, onChange }:{value:"", onChange:(e:string)=>{}}) => (
    <input
      value={value}
      onChange={(e:ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      style={{ border: "solid 1px pink" }}
    />
  ); */
  const openModal = (c: Commande, cl: Client) => {
    setCommand0(c);
    setClient0(cl);
    setIdclient(cl?.id);
    setShowModal(true);
  };
  const [add] = useAddCommandeMutation();
  const [edit] = useEditCommandeMutation();

  //openDevises = (): OpenDeviseProp
  const save = command0.id == "" ? add : edit;
  const close = () => {
    setShowModal(false);
  };
  useEffect(() => {
    refetchAdressLiv();
    refetchClient();
    //@ts-ignore
    ref.current = openModal;
  });
  const commanndes: MenuNavTabs[] = [
    {
      id: 1,
      name: (
        <>
          <BriefcaseIcon className={style_icon} aria-hidden="true" />
          <span className={style_span}>Articles de la commande</span>
        </>
      ),
      featured: <ArticlesCommande idCommande={command0.id} />,
    },
  ];
  const fieldIdClient = useRef(null);
  const fieldAdressLiv = useRef(null);
  if (client0 == undefined && client?.id != "") {
    refetchAdressLiv();
    setTimeout(() => {
      setClient0(client);
    }, 200);
  }
  const getCommande = (date: Date, idclient: string): Commande => {
    return {
      id: command0.id,
      date: date,
      amount: command0.amount,
      season: command0.season,
      idClient: idclient,
      adrLiv: command0.adrLiv,
    };
  };
  return (
    <Modal
      title={
        command0.id === "" ? "Nouvelle commande" : "Mise à jour de la commande"
      }
      show={showModal}
      format={5}
      close={close}
    >
     <Form defaultValues={getCommande(startDate, idclient)} onSubmit={save}>
        <>
          <div className="float-left w-1/2 relative">
            <Field
              type="hidden"
              name="idClient"
              value={client0?.id}
              ref={fieldIdClient}
            />
            <Field type="hidden" name="id" value={command0.id} />
            {command0.idClient != "" ? (
              <>
                <Field label="Client" value={client0?.design} />
              </>
            ) : (
              <Field
                label="Client"
                name="cococo"
                as="select"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  let c: Client = JSON.parse(e.target.value);
                  setClient0(c);
                  setIdclient(c.id);
                  //@ts-ignore
                  /* fieldIdClient.current.value = c.id; */
                }}
              >
                {[c0, ...(clients1 || [])]?.map((c: Client) => (
                  <option value={JSON.stringify(c)}>{c.design}</option>
                ))}
              </Field>
            )}
            <Field
              label="Date Commande"
              name="date33"
              value={dateFormat(startDate, "dd-mm-yyyy")}
              onFocus={() => {
                setOpenCalendar(true);
              }}
            />
           {openCalendar && (
              <DatePicker
                selected={startDate}
                name="date11"
                onChange={(date: Date) => {
                  setStartDate(date);
                  //  command0.date=startDate
                  setOpenCalendar(false);
                }}
                dateFormat="dd-MM-yyyy"
                calendarContainer={Calendar}
                inline
              />
            )}
          </div>
          <div className="float-left w-1/2">
            <Field
              label="Adress de livraison"
              name="adrLiv"
              as="select"
              optionLabelName="adress"
              optionKeyName="adress"
              options={[adr0, ...(adressLivs || [])]}
            />
            <Field label="Saison" name="season" />
          </div>
          <Bsave
            className="float-right mt-5 b-ajust-r"
            onClick={() => {
              setTimeout(() => {
                refetchList();
                close();
              }, 600);
            }}
          />
        </>
      </Form>
      <Bcancel
        className="float-right mt-5 b-ajust"
        onClick={() => {
          close();
        }}
      />
      {command0.id != "" && <NavTabs tab={commanndes} />}
    </Modal>
  );
};

export default forwardRef(FormCommande);
