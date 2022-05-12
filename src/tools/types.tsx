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
  commandes:[],
  adressLivs:[]
};

export interface Commande {
id:string
date:Date
season:string
amount:string
client:Client
idClient:string
}
export const cm0:Commande={
  id:"",
date:new Date(),
amount:"",
season:"",
client:c0,
idClient:""
}
export const getCm0= (cl:Client):Commande=>{
  return {
  id:"",
  date:new Date(),
  amount:"",
  season:"",
  client:cl,
  idClient:cl.id
  }
  
}
export const  getClient=(id: string, obj: Client[]) :Client|undefined=>{
  const apr = obj?.find(
    (o:Client) => { return o.id === id; }
  );
  return apr;
}

export interface AdressLiv {
  adress:string
  id:string
	country:string
	city:string
	
}
export interface Chaine {
  val: string;
}
