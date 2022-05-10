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
  commandes:Commande[]
  adressLivs:AdressLiv[]
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
  design: "",
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
  commandes:[],
  adressLivs:[]
};

export interface Commande {
id:string
idClient:string
date:Date
season:string
amount:string
}
export const cm0:Commande={
  id:"",
  idClient:"",
  date:new Date(),
amount:"",
season:""
}

export interface AdressLiv {
  id:string
	country:string
	city:string
	adress:string
}
export interface Chaine {
  val: string;
}
