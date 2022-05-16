export type Num = {
  id: number;
};
export interface Client {
  id: string;
  design: string;
  concat: string;
  image: string;
  email: string;
  tel: string;
  device: string;
  adrLiv: string;
  incoterm: string;
  paymentChoice: string;
  adrFact: string;
  bank: string;
  rib: string;
  swift: string;
  commandes: Commande[];
  adressLivs: AdressLiv[];
}
export type ColsClient =
  | "design"
  | "concat"
  | "image"
  | "email"
  | "tel"
  | "device"
  | "adrLiv"
  | "incoterm"
  | "paymentChoice"
  | "adrFact"
  | "bank"
  | "rib"
  | "swift";
export const c0: Client = {
  id: "",
  design: "coco",
  concat: "",
  image: "",
  email: "",
  tel: "",
  device: "",
  adrLiv: "",
  incoterm: "",
  paymentChoice: "",
  adrFact: "",
  bank: "",
  rib: "",
  swift: "",
  commandes: [],
  adressLivs: [],
};

export interface Commande {
  id: string;
  date: Date;
  season: string;
  amount: string;
  client: Client;
  idClient: string;
}
export const cm0: Commande = {
  id: "",
  date: new Date(),
  amount: "",
  season: "",
  client: c0,
  idClient: "",
};
export const getCm0 = (cl: Client): Commande => {
  return {
    id: "",
    date: new Date(),
    amount: "",
    season: "",
    client: cl,
    idClient: cl.id,
  };
};
export const getClient = (id: string, obj: Client[]): Client | undefined => {
  const apr = obj?.find((o: Client) => {
    return o.id === id;
  });
  return apr;
};

export interface AdressLiv {
  adress: string;
  id: string;
  country: string;
  city: string;
}
export interface Chaine {
  val: string;
}

export interface Article {
  id: String,
  design: String;
  nomenclature: String;
  tauxPertes: number;
}

export const article0: Article = {
  id: "",
  design: "",
  nomenclature: "",
  tauxPertes: 0,
};

export interface UnitMeasure {
  id: String,
  design: String;
  symbole: String;
  decimal: number;
}

export const unitMeasure0: UnitMeasure = {
  id: "",
  design: "",
  symbole: "",
  decimal: 0,
};

export interface BureauDouane {
  id: String;
  code: String;
  design: String;
}

export const bureauDouane0: BureauDouane = {
  id: "",
  code: "",
  design: "",
};

export interface Declarant {
  id: String;
  design: String;
  ville: String;
}

export const declarant0: Declarant = {
  id: "",
  design: "",
  ville: "",
};

export interface Incoterm {
  id: String,
  code: String;
  design: String;
}

export const incoterm0: Incoterm = {
  id: "",
  code: "",
  design: "",
};

export interface PayementMode {
  id: String;
  code: String;
  design: String;
}

export const payementMode0: PayementMode = {
  id: "",
  code: "",
  design: "",
};

export interface RegimeDouanier {
  id: String;
  code: String;
  design: String;
}

export const regimeDouanier0: RegimeDouanier = {
  id: "",
  code: "",
  design: "",
};

export interface RawMaterial {
  id: string
  design: String;
  nomenclature: String;
  family: String;
  tauxPertes: number;
  measureUnit: String;
}

export const rawMaterial0: RawMaterial = {
  id: "",
  design: "",
  nomenclature: "",
  family: "",
  tauxPertes: 0,
  measureUnit: "",
};
